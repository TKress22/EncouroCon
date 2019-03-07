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
        public string PlanetData { get; set; } //Format: [x,y|colour|value|name]  ex: "[100,200|#ff0|3|garba]"
        public string Edges { get; set; } //Format: [(4,5)(1,2)]
    }
}