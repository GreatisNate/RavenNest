﻿using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace RavenNest.DataModels
{
    public class EntitySet<TModel, TKey> : IEntitySet<TModel, TKey> where TModel : Entity<TModel>
    {
        private readonly ConcurrentDictionary<TKey, TModel> entities;
        private readonly ConcurrentDictionary<TKey, EntityChangeSet> addedEntities;
        private readonly ConcurrentDictionary<TKey, EntityChangeSet> updatedEntities;
        private readonly ConcurrentDictionary<TKey, EntityChangeSet> removedEntities;
        private readonly Func<TModel, TKey> keySelector;

        private readonly ConcurrentDictionary<string, EntityLookupGroup<TModel, TKey>> groupLookup
            = new ConcurrentDictionary<string, EntityLookupGroup<TModel, TKey>>();

        public ICollection<TModel> Entities => entities.Values;
        public ICollection<EntityChangeSet> Added => addedEntities.Values;
        public ICollection<EntityChangeSet> Updated => updatedEntities.Values;
        public ICollection<EntityChangeSet> Removed => removedEntities.Values;

        public DateTime LastModified { get; private set; }

        public EntitySet(IEnumerable<TModel> collection, Func<TModel, TKey> keySelector)
        {
            this.keySelector = keySelector;
            this.entities = new ConcurrentDictionary<TKey, TModel>();
            this.addedEntities = new ConcurrentDictionary<TKey, EntityChangeSet>();
            this.updatedEntities = new ConcurrentDictionary<TKey, EntityChangeSet>();
            this.removedEntities = new ConcurrentDictionary<TKey, EntityChangeSet>();

            foreach (var entity in collection)
            {
                entity.PropertyChanged += OnEntityPropertyChanged;
                var key = keySelector(entity);
                entities[key] = entity;
            }
        }

        public bool TryGet(TKey key, out TModel entity)
        {
            return entities.TryGetValue(key, out entity);
        }

        public TModel this[TKey key]
        {
            get
            {
                if (TryGet(key, out var model))
                {
                    return model;
                }

                throw new KeyNotFoundException("No entities with the ID " + key + " could be found.");
            }
        }

        public IReadOnlyList<TModel> this[string group, TKey groupKey]
        {
            get
            {
                if (this.groupLookup.TryGetValue(group, out var groupEntities))
                {
                    return groupEntities[groupKey].Values.ToList();
                }

                throw new KeyNotFoundException("No entities could be found with the provided ID.");
            }
        }

        public TModel this[string group, TKey groupKey, TKey itemKey]
        {
            get
            {
                if (this.groupLookup.TryGetValue(group, out var groupEntities))
                {
                    return groupEntities[groupKey, itemKey];
                }

                throw new KeyNotFoundException("No entities could be found with the provided ID.");
            }
        }

        public void Add(TModel model)
        {
            var key = keySelector(model);
            if (addedEntities.ContainsKey(key) || updatedEntities.ContainsKey(key) || removedEntities.ContainsKey(key))
                return;
            LastModified = DateTime.UtcNow;
            model.PropertyChanged -= OnEntityPropertyChanged;
            model.PropertyChanged += OnEntityPropertyChanged;

            foreach (var group in this.groupLookup)
            {
                group.Value.Add(model);
            }

            entities[key] = model;
            updatedEntities[key] = new EntityChangeSet
            {
                LastModified = DateTime.UtcNow,
                State = EntityState.Added,
                Entity = model
            };
        }

        public void Remove(TModel model)
        {
            var key = keySelector(model);
            if (entities.TryRemove(key, out _))
            {
                LastModified = DateTime.UtcNow;
                model.PropertyChanged -= OnEntityPropertyChanged;

                foreach (var group in this.groupLookup)
                {
                    group.Value.Remove(model);
                }

                if (addedEntities.TryRemove(key, out _))
                {
                    return;
                }

                updatedEntities.TryRemove(key, out _);
                removedEntities[key] = new EntityChangeSet
                {
                    LastModified = DateTime.UtcNow,
                    State = EntityState.Deleted,
                    Entity = model
                };
            }
        }

        //public void Update(TModel model)
        //{
        //    var key = keySelector(model);
        //    if (addedEntities.ContainsKey(key) || removedEntities.ContainsKey(key))
        //    {
        //        return; // dont do anything
        //    }
        //    updatedEntities
        //}

        public void AddRange(IEnumerable<TModel> models) => models.ForEach(Add);
        public void RemoveRange(IEnumerable<TModel> models) => models.ForEach(Remove);
        //public void UpdateRange(IEnumerable<TModel> models) => models.ForEach(Update);        

        //public ConcurrentQueue<EntityChangeSet<TModel>> BuildAddQueue()
        //{
        //    var queue = new ConcurrentQueue<EntityChangeSet<TModel>>();
        //    return queue;
        //}

        private void OnEntityPropertyChanged(object sender, PropertyChangedEventArgs e)
        {
            LastModified = DateTime.UtcNow;
            var entity = sender as TModel;
            //var property = e.PropertyName;
            var key = keySelector(entity);

            // check if a group key has changed and if so, re-evaluate which group it should contain to.
            foreach (var group in groupLookup)
            {
                group.Value.Update(entity);
            }


            if (addedEntities.ContainsKey(key) || removedEntities.ContainsKey(key)) return;
            if (updatedEntities.TryGetValue(key, out var value))
            {
                value.LastModified = DateTime.UtcNow;
                value.State = EntityState.Modified;
                return;
            }

            updatedEntities[key] = new EntityChangeSet
            {
                LastModified = DateTime.UtcNow,
                State = EntityState.Modified,
                Entity = entity
            };
        }

        public void RegisterLookupGroup(string name, Func<TModel, TKey> lookupKey)
        {
            var dict = new ConcurrentDictionary<TKey, ConcurrentDictionary<TKey, TModel>>(entities.Values.GroupBy(lookupKey)
                .ToDictionary(x => x.Key, x => new ConcurrentDictionary<TKey, TModel>(x.ToDictionary(y => keySelector(y), y => y))));
            this.groupLookup[name] = new EntityLookupGroup<TModel, TKey>(dict, lookupKey, keySelector);
        }
    }
}