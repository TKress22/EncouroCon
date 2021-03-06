﻿using EncouroCon.Data;
using EncouroCon.Models;
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
        public bool CreateMap(MapCreate model)
        {
            var entity =
                new Map()
                {
                    OwnerID = _userID,
                    StruggleName = model.StruggleName,
                    Colours = model.FavCol + ", " + model.RepCol,
                    PlanetData = model.Planets,
                    Edges = model.Edges
                };
            using (var ctx = new ApplicationDbContext())
            {
                ctx.Map.Add(entity);
                return ctx.SaveChanges() == 1;
            }
        }
        public bool UpdateMap(MapFetch model)
        {
            using (var ctx = new ApplicationDbContext())
            {
                var entity =
                    ctx
                        .Map.Where(e => e.OwnerID == _userID)
                        .Single();

                entity.PlanetData = model.Planets;
                return ctx.SaveChanges() == 1;
            }
        }
        public bool DeleteMap(int id)
        {
            using (var ctx = new ApplicationDbContext())
            {
                var entity =
                    ctx
                        .Map
                        .Single(e => e.OwnerID == _userID);

                ctx.Map.Remove(entity);

                return ctx.SaveChanges() == 1;
            }
        }
        public MapFetch GetMapByID(Guid ID)
        {
            using (var ctx = new ApplicationDbContext())
            {
                var entity =
                    ctx
                        .Map
                        .Single(e => e.OwnerID == ID);
                return
                    new MapFetch
                    {
                        OwnerID = entity.OwnerID,
                        StruggleName = entity.StruggleName,
                        LastMove = entity.LastMove,
                        Colours = entity.Colours,
                        Planets = entity.PlanetData,
                        Edges = entity.Edges
                    };
            }
        }
    }
}