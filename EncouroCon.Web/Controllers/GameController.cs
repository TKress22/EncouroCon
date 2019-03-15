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
        public MapService mapServ { get; set; }
        public DayCommentService dayServ { get; set; }
        public HolderModel(Guid ID)
        {
            mapServ = new MapService(ID);
            dayServ = new DayCommentService(ID);
        }
    }
}