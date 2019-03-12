using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EncouroCon.Services
{
    public class MapService
    {
        private readonly Guid _userID;

        public MapService(Guid ID)
        {
            _userID = ID;
        }
    }
}