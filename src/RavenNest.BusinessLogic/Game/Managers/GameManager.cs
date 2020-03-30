﻿using RavenNest.BusinessLogic.Data;
using RavenNest.BusinessLogic.Extensions;
using RavenNest.Models;

namespace RavenNest.BusinessLogic.Game
{
    public class GameManager : IGameManager
    {
        private readonly IGameData gameData;

        public GameManager(IGameData gameData)
        {
            this.gameData = gameData;
        }

        public GameInfo GetGameInfo(SessionToken session)
        {
            return null;
        }

        public EventCollection GetGameEvents(SessionToken session)
        {
            var gameSession = gameData.GetSession(session.SessionId);
            if (gameSession == null)
            {
                return new EventCollection();
            }

            var events = gameData.GetSessionEvents(gameSession);
            var eventCollection = new EventCollection();

            foreach (var ev in events)
            {
                var gameEvent = ModelMapper.Map(ev);
                if (eventCollection.Revision < gameEvent.Revision)
                    eventCollection.Revision = gameEvent.Revision;
                if (gameEvent.Revision > gameSession.Revision)
                    eventCollection.Add(gameEvent);
            }

            if (eventCollection.Revision > gameSession.Revision)
            {
                gameSession.Revision = eventCollection.Revision;
            }

            return eventCollection;
        }

        public bool Join(string userId, string targetUserId)
        {
            var targetSession = gameData.GetSessionByUserId(targetUserId);
            if (targetSession == null) return false;

            var character = gameData.GetCharacterByUserId(userId);
            if (character == null) return false;

            var state = gameData.GetState(character.StateId);

            // just push the event to the client
            // and make the client to try and add the player
            gameData.Add(gameData.CreateSessionEvent(
                GameEventType.PlayerAdd,
                targetSession,
                new PlayerAdd()
                {
                    UserId = userId,
                    UserName = character.Name,
                    Island = state?.Island,
                    Task = state?.Task,
                    TaskArgument = state?.TaskArgument
                }
            ));

            return true;
        }

        public bool Leave(string userId)
        {
            var targetSession = gameData.GetSessionByUserId(userId);
            if (targetSession == null) return false;

            var character = gameData.GetCharacterByUserId(userId);
            if (character == null) return false;

            gameData.Add(gameData.CreateSessionEvent(
                GameEventType.PlayerRemove,
                targetSession,
                new PlayerId { UserId = userId }
            ));

            return true;
        }

        public bool SetTask(string userId, string task, string taskArgument)
        {
            var targetSession = gameData.GetSessionByUserId(userId);
            if (targetSession == null) return false;

            var character = gameData.GetCharacterByUserId(userId);
            if (character == null) return false;

            gameData.Add(gameData.CreateSessionEvent(
                GameEventType.PlayerTask,
                targetSession,
                new PlayerTask()
                {
                    UserId = userId,
                    Task = task,
                    TaskArgument = taskArgument
                }
            ));

            return true;
        }

        public bool JoinRaid(string userId)
        {
            var targetSession = gameData.GetSessionByUserId(userId);
            if (targetSession == null) return false;

            var character = gameData.GetCharacterByUserId(userId);
            if (character == null) return false;

            gameData.Add(gameData.CreateSessionEvent(
                GameEventType.PlayerJoinRaid,
                targetSession,
                new PlayerId { UserId = userId }
            ));

            return true;
        }

        public bool JoinDungeon(string userId)
        {
            var targetSession = gameData.GetSessionByUserId(userId);
            if (targetSession == null) return false;

            var character = gameData.GetCharacterByUserId(userId);
            if (character == null) return false;

            gameData.Add(gameData.CreateSessionEvent(
                GameEventType.PlayerJoinDungeon,
                targetSession,
                new PlayerId { UserId = userId }
            ));

            return true;
        }

        public bool JoinArena(string userId)
        {
            var targetSession = gameData.GetSessionByUserId(userId);
            if (targetSession == null) return false;

            var character = gameData.GetCharacterByUserId(userId);
            if (character == null) return false;

            gameData.Add(gameData.CreateSessionEvent(
                GameEventType.PlayerJoinArena,
                targetSession,
                new PlayerId { UserId = userId }
            ));

            return true;
        }
    }
}