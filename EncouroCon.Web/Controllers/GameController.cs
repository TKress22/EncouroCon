using EncouroCon.Models;
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
        public ActionResult DayStats()
        {
            var model = new DayCommentListItem[0];
            return View(model);
        }
    }
}