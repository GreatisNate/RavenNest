﻿using System;

namespace RavenNest.Models
{
    public class PlayerState
    {
        public string UserId { get; set; }
        public string CurrentTask { get; set; }
        public decimal[] Experience { get; set; }
        //public decimal[] Resources { get; set; }
        public decimal[] Statistics { get; set; }
        public int Revision { get; set; }
    }
}
