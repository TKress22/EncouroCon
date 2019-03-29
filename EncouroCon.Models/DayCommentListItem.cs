using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EncouroCon.Models
{
    public class DayCommentListItem
    {
        public int CommentID { get; set; }
        public bool WasGood { get; set; }
        public string Reason { get; set; }
        public string Move { get; set; }

        [Display (Name = "Day")]
        public DateTimeOffset Created { get; set; }
    }
}