﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EncouroCon.Models
{
   public class MapFetch
    {
        public int MapID { get; set; } = 0;
        public Guid OwnerID { get; set; }
        public string StruggleName { get; set; }
        public DateTimeOffset LastMove { get; set; }
        public string Colours { get; set; }
        public string Planets { get; set; }
        public string Edges { get; set; }
    }
}