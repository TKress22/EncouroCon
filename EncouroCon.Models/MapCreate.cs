﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EncouroCon.Models
{
   public class MapCreate
    {
        public int MapID { get; set; }
        public Guid OwnerID { get; set; }
        public string Colours { get; set; }
        public string Planets { get; set; }
        public string Edges { get; set; }
    }
}