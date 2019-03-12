using EncouroCon.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EncouroCon.Models
{
    public class HolderModel
    {
        public MapService mapServ { get; set; }
        public DayCommentService dayServ { get; set; }
        public HolderModel(Guid ID)
        {
            mapServ = new MapService(ID);
            dayServ = new DayCommentService(ID);
        }
    }
}