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
    }
}