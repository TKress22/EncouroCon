using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EncouroCon.Models
{
    public class DayCommentCreate
    {
        public Guid OwnerID { get; set; }
        public bool WasGood { get; set; }
        public string Reason { get; set; }
        public string Move { get; set; }
        public DateTimeOffset CreatedDate { get; set; }
    }
}