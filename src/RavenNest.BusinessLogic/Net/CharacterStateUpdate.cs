﻿namespace RavenNest.BusinessLogic.Net
{
    public class CharacterStateUpdate
    {
        public CharacterStateUpdate(
            string userId,
            int health,
            string island,
            string duelOpponent,
            bool inRaid,
            bool inArena,
            string task,
            string taskArgument,
            Vector3 position)
        {
            UserId = userId;
            Health = health;
            Island = island;
            DuelOpponent = duelOpponent;
            InRaid = inRaid;
            InArena = inArena;
            Task = task;
            TaskArgument = taskArgument;
            Position = position;
        }

        public string UserId { get; set; }
        public int Health { get; set; }
        public string Island { get; set; }
        public string DuelOpponent { get; set; }
        public bool InRaid { get; set; }
        public bool InArena { get; set; }
        public string Task { get; set; }
        public string TaskArgument { get; set; }
        public Vector3 Position { get; set; }
    }
}