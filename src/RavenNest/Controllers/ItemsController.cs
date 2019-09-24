﻿using System;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using RavenNest.BusinessLogic.Docs.Attributes;
using RavenNest.BusinessLogic.Game;
using RavenNest.Models;

namespace RavenNest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ApiDescriptor(Name = "Items API", Description = "Used for managing the items database.")]
    public class ItemsController : ControllerBase
    {
        private readonly IItemManager itemManager;
        private readonly IAuthManager authManager;

        public ItemsController(IItemManager itemManager, IAuthManager authManager)
        {
            this.itemManager = itemManager;
            this.authManager = authManager;
        }

        //[HttpGet("willitwonka")]
        //public Task<string> ImportJsonDatabase()
        //{
        //    return new ItemImporter(itemManager)
        //        .ImportJsonDatabaseAsync();
        //}

        [HttpGet]
        [MethodDescriptor(
            Name = "Get all available items",
            Description = "This will return the list of all available items in Ravenfall. This is required as no other endpoints will give out any item data other than item id. This list of items is then necessary to do an item lookup.",
            RequiresSession = false,
            RequiresAuth = true)
        ]
        public ItemCollection Get()
        {
            var authToken = GetAuthToken();
            AssertAuthTokenValidity(authToken);
            var itemCollection = itemManager.GetAllItems(authToken);
            return itemCollection;
        }

        [HttpPost]
        [MethodDescriptor(
            Name = "Add a new item to the database",
            Description = "This will add a new item to the game. This requires the authenticated user to be a Ravenfall administrator.",
            RequiresSession = false,
            RequiresAuth = true,
            RequiresAdmin = true)
        ]
        public Task<bool> AddItemAsync(Item item)
        {
            var authToken = GetAuthToken();
            AssertAdminAuthToken(authToken);
            return this.itemManager.AddItemAsync(authToken, item);
        }

        [HttpDelete("{itemId}")]
        [MethodDescriptor(
            Name = "Delete an item from the database",
            Description = "This will delete an item from the game. This requires the authenticated user to be a Ravenfall administrator.",
            RequiresSession = false,
            RequiresAuth = true,
            RequiresAdmin = true)
        ]
        public bool RemoveItem(Guid itemId)
        {
            var authToken = GetAuthToken();
            AssertAdminAuthToken(authToken);
            return this.itemManager.RemoveItem(authToken, itemId);
        }

        [HttpPut]
        [MethodDescriptor(
            Name = "Update an item in the database",
            Description = "This update the target item. This requires the authenticated user to be a Ravenfall administrator.",
            RequiresSession = false,
            RequiresAuth = true,
            RequiresAdmin = true)
        ]
        public bool UpdateItem(Item item)
        {
            var authToken = GetAuthToken();
            AssertAdminAuthToken(authToken);
            return this.itemManager.UpdateItem(authToken, item);
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        private static void AssertAuthTokenValidity(AuthToken authToken)
        {
            if (authToken == null) throw new NullReferenceException(nameof(authToken));
            if (authToken.UserId == Guid.Empty) throw new NullReferenceException(nameof(authToken.UserId));
            if (authToken.Expired) throw new SecurityTokenExpiredException("Session has expired.");
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        private static void AssertAdminAuthToken(AuthToken authToken)
        {
            throw new Exception("We don't have any administrators. LUL! NO ONE CAN MANAGE ITEMS!!!");
        }

        private AuthToken GetAuthToken()
        {
            if (HttpContext.Request.Headers.TryGetValue("auth-token", out var value))
            {
                return authManager.Get(value);
            }

            return null;
        }
    }


}