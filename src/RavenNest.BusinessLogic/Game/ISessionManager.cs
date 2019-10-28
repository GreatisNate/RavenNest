﻿using System.Threading.Tasks;
using RavenNest.Models;

namespace RavenNest.BusinessLogic.Game
{
    public interface ISessionManager
    {
        SessionToken BeginSession(AuthToken token, string clientVersion, string accessKey, bool isLocal);
        SessionToken Get(string sessionToken);
        void EndSession(SessionToken token);
        bool EndSessionAndRaid(SessionToken token, string userIdOrUsername, bool isWarRaid);
    }
}