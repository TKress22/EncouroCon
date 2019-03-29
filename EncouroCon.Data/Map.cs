using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EncouroCon.Data
{
    public class Map
    {
        //public int MapID { get; set; } = 0;
        [Key]
        public Guid OwnerID { get; set; }
        public DateTimeOffset LastMove { get; set; }
        public string StruggleName { get; set; }
        public string Colours { get; set; }
        public string PlanetData { get; set; } //Format: [x,y|colour|value|name]  ex: "[100,200|#ff0|3|garba]"
        public string Edges { get; set; } //Format: [(4,5)(1,2)]
    }
}