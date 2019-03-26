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
            return View(model);
        }
        public ActionResult Setup()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Setup(MapCreate model)
        {
            if (!ModelState.IsValid) return View(model);

            var service = CreateMapService();

            if (service.CreateMap(model))
            {
                TempData["SaveResult"] = "Everything saved successfully";
                return RedirectToAction("Index");
            };

            ModelState.AddModelError("", "Ruh roh. Something broke...");
            return View(model);
        }

        private MapService CreateMapService()
        {
            var userID = Guid.Parse(User.Identity.GetUserId());
            var service = new MapService(userID);
            return service;

        }
    }

    public class HolderModel
    {
        public MapFetch map;
        
        public HolderModel(Guid ID)
        {
            var mapServ = new MapService(ID);
            var dayServ = new DayCommentService(ID);
            map = mapServ.GetMapByID(ID);
            var tst = (DateTime.Now - map.LastMove).TotalHours;
        }
    }
}