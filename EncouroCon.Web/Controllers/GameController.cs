using EncouroCon.Models;
using EncouroCon.Services;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EncouroCon.Web.Controllers
{
    [Authorize]
    public class GameController : Controller
    {
        // GET: Game
        public ActionResult Index()
        {
            var userId = Guid.Parse(User.Identity.GetUserId());
            var model = new HolderModel(userId);
            return View();
        }
        public ActionResult Setup()
        {
            return View();
        }
    }

    public class HolderModel
    {
        public MapFetch map;
        
        public HolderModel(Guid ID)
        {
            var mapServ = new MapService(ID);
            var dayServ = new DayCommentService(ID);
           // map = mapServ.GetMapByID(ID);
        }
    }
}