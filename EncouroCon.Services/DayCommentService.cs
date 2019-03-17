using EncouroCon.Data;
using EncouroCon.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EncouroCon.Services
{
    public class DayCommentService
    {
        private readonly Guid _userID;

        public DayCommentService(Guid ID)
        {
            _userID = ID;
        }

        public bool CreateComment(DayCommentCreate model)
        {
            var entity =
                new DayComment()
                {
                    OwnerID = _userID,
                    WasGood = model.WasGood,
                    Reason = model.Reason,
                    CreatedDate = model.CreatedDate
                };
            using (var ctx = new ApplicationDbContext())
            {
                ctx.DayComment.Add(entity);
                return ctx.SaveChanges() == 1;
            }
        }
        public bool EditComment(DayCommentListItem model)
        {
            return true;
        }
        public bool DeleteComment(int id)
        {
            return true;
        }

    }
}