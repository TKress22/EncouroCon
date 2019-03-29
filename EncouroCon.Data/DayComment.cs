using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EncouroCon.Data
{
    public class DayComment
    {
        [Key]
        public int CommentID { get; set; }

        [Required]
        public Guid OwnerID { get; set; }

        [Required]
        public bool WasGood { get; set; }

        public string Reason { get; set; }

        [Required]
        public DateTimeOffset CreatedDate { get; set; }

        public string Move { get; set; } //Format: mover|id
    }
}