using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EncouroCon.Models
{
   public class MapCreate
    {
        public int MapID { get; set; }
        public Guid OwnerID { get; set; }
        [Display (Name = "Struggle Name:")]
        public string StruggleName { get; set; }
        [Display(Name = "Favourite Colour:")]
        public string FavCol { get; set; }
        [Display(Name = "Representative Colour:")]
        public string RepCol { get; set; }
        public string Planets { get; set; }
        public string Edges { get; set; }
    }
}