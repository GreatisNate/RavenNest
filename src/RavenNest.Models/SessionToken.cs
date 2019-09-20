﻿using System;

namespace RavenNest.Models
{
    public class SessionToken
    {
        public Guid SessionId { get; set; }
        public DateTime StartedUtc { get; set; }
        public DateTime ExpiresUtc { get; set; }
        public string AuthToken { get; set; }
        public bool Expired => DateTime.UtcNow >= ExpiresUtc;
    }
}