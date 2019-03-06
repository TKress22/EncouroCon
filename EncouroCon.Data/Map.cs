using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EncouroCon.Data
{
    public class Map
    {
        public int MapID { get; set; }
        public Guid OwnerID { get; set; }
        public string PlanetData { get; set; }
        public string Edges { get; set; }
    }
}