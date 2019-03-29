using EncouroCon.Models;
using EncouroCon.Services;
using Microsoft.AspNet.Identity;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EncouroCon.Web.Controllers
{
    class XData
    {
        public string id;
        public string owner;
        public string reason;
        public string colors;
        public string planets;
        public string conns;
        public string lastMove;
        public bool wasGood;
        public string struggleName;
    }

    [Authorize]
    public class GameController : Controller
    {
        // GET: Game
        public ActionResult Index()
        {
            var userId = Guid.Parse(User.Identity.GetUserId());
            var model = new HolderModel(userId);
            model.dayCre = new DayCommentCreate { OwnerID = userId };
            return View(model);
        }

        public ActionResult IndexSubmitJSON(string color,string code)
        {
            System.IO.File.WriteAllText(@"C:\bin\john.log", code);
            XData data = JsonConvert.DeserializeObject<XData>(code);
            data.colors = data.colors.Replace(" ", ", ").Replace("__EEE_E_EEE__EE_E_E_E_","#");
            HolderModel model = new HolderModel(Guid.Parse(data.owner));
            model.dayCre.Reason = data.reason;
            model.dayCre.OwnerID = (model.map.OwnerID = Guid.Parse(data.owner));
            model.dayCre.Move = "";
            model.dayCre.WasGood = data.wasGood;
            model.dayCre.CreatedDate = DateTimeOffset.Now;
            model.map.Colours = data.colors;
            model.map.Edges = data.conns;
            model.map.LastMove = DateTimeOffset.Parse(data.lastMove);
            model.map.Planets = data.planets;
            return IndexFunc(model);
        }

        public ActionResult IndexFuncPar(string id, string owner, string reason, string colors, string planets, string conns, string lastMove, string wasGoodStr)
        {
            bool wasGood = Boolean.Parse(wasGoodStr);
            HolderModel model = new HolderModel(Guid.Parse(owner));
            model.dayCre = new DayCommentCreate { OwnerID = Guid.Parse(owner) };
            model.dayCre.Reason = reason;
            model.dayCre.OwnerID = (model.map.OwnerID = Guid.Parse(owner));
            model.dayCre.Move = "";
            model.dayCre.WasGood = wasGood;
            model.dayCre.CreatedDate = DateTimeOffset.Now;
            model.map.Colours = colors.Replace("%20"," ").Replace("%23","#").Replace("%COMMA",",");
            model.map.Edges = conns;
            model.map.LastMove = DateTimeOffset.Parse(lastMove);
            model.map.Planets = planets;
            return IndexFunc(model);
        }

        //[HttpPost]
        //[ValidateAntiForgeryToken]
        public ActionResult IndexFunc(HolderModel model)
        {
            if (!ModelState.IsValid) return View(model);

            var mapService = CreateMapService();
            var dayService = CreateCommentService();

            if (mapService.UpdateMap(model.map) && dayService.CreateComment(model.dayCre))
            {
                TempData["SaveResult"] = "Everything saved successfully";
                return RedirectToAction("Index");
            };

            ModelState.AddModelError("", "Ruh roh. Something broke...");
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
        private DayCommentService CreateCommentService()
        {
            var userID = Guid.Parse(User.Identity.GetUserId());
            var service = new DayCommentService(userID);
            return service;
        }
    }

    public class HolderModel
    {
        public MapFetch map;
        public IEnumerable<DayCommentListItem> days;
        public DayCommentCreate dayCre;
        public Guid guid;
        
        public HolderModel(Guid ID)
        {
            guid = ID;
            map = new MapService(ID).GetMapByID(ID);
            days = new DayCommentService(ID).FetchUserComments();
        }
    }
}