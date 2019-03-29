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
                    Move = model.Move,
                    CreatedDate = model.CreatedDate
                };
            using (var ctx = new ApplicationDbContext())
            {
                ctx.DayComment.Add(entity);
                return ctx.SaveChanges() == 1;
            }
        }
        public IEnumerable<DayCommentListItem> FetchUserComments()
        {
            using (var ctx = new ApplicationDbContext())
            {
                var query =
                    ctx
                        .DayComment
                        .Where(e => e.OwnerID == _userID)
                        .Select(
                            e =>
                                new DayCommentListItem
                                {
                                    CommentID = e.CommentID,
                                    WasGood = e.WasGood,
                                    Reason = e.Reason,
                                    Move = e.Move,
                                    Created = e.CreatedDate
                                }
                        );

                return query.ToArray();
            }
        }
    }
}