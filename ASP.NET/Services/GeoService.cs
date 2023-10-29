using Microsoft.EntityFrameworkCore;
using My_knowadge.Dto;
using My_knowadge.Models;

namespace My_knowadge.Services
{
    public class GeoService : IGeoService
    {
        private readonly AppDBContext appContext = new AppDBContext();

        public GeoService(AppDBContext dbContext)
        {
            this.appContext = dbContext;
        }

        public async void Create(GeoDto dto)
        {
            appContext.Geos.Add(new Geo
            {
                Id = dto.Id,
                AddressId = dto.AddressId,
                Lat = dto.Lat,
                Lng = dto.Lng
            });
            await appContext.SaveChangesAsync();
        }
        public async void Update(GeoDto dto)
        {

            appContext.Geos.Update(new Geo
            {
                Id = dto.Id,
                AddressId = dto.AddressId,
                Lat = dto.Lat,
                Lng = dto.Lng
            });
            await appContext.SaveChangesAsync();
        }
        public async Task<List<GeoDto>> List()
        {
            var data = await appContext.Geos.Select(x => new GeoDto
            {
                Id = x.Id,
                AddressId = x.AddressId,
                Lat = x.Lat,
                Lng = x.Lng
            }).ToListAsync();
            return data;
        }
        public async void Delete(Guid id)
        {
            var data = appContext.Geos.Where(x => x.Id == id).FirstOrDefaultAsync().Result;
            appContext.Geos.Remove(data);
            await appContext.SaveChangesAsync();

        }

        public async Task<GeoDto> GetById(Guid id)
        {
            return await appContext.Geos.Where(x => x.Id == id).Select(x => new GeoDto
            {
                Id = x.Id,
                AddressId = x.AddressId,
                Lat = x.Lat,
                Lng = x.Lng
            }).FirstOrDefaultAsync();
        }
    }
}
