using Microsoft.EntityFrameworkCore;
using My_knowadge.Dto;
using My_knowadge.Models;

namespace My_knowadge.Services
{
    public class AddressService : IAddressService
    {

        private readonly AppDBContext appContext = new AppDBContext();

        public AddressService(AppDBContext dbContext)
        {
            this.appContext = dbContext;
        }

        public async void Create(AddressDto dto)
        {
            appContext.Addresses.Add(new Address
            {
                City = dto.City,
                Street = dto.Street,
                Suite = dto.Suite,
                Zipcode = dto.Zipcode,
                Id = dto.Id
            });
            await appContext.SaveChangesAsync();
        }
        public async void Update(AddressDto dto)
        {

            appContext.Addresses.Update(new Address
            {
                City = dto.City,
                Street = dto.Street,
                Suite = dto.Suite,
                Zipcode = dto.Zipcode,
                Id = dto.Id,
            });
            await appContext.SaveChangesAsync();
        }
        public async Task<List<AddressDto>> List()
        {
            var data = await appContext.Addresses.Select(x => new AddressDto
            {
                City = x.City,
                Street = x.Street,
                Suite = x.Suite,
                Zipcode = x.Zipcode,
                Id = x.Id,
            }).ToListAsync();
            return data;
        }
        public async void Delete(Guid id)
        {
            var data = appContext.Companies.Where(x => x.Id == id).FirstOrDefaultAsync().Result;
            appContext.Companies.Remove(data);
            await appContext.SaveChangesAsync();

        }

        public async Task<AddressDto> GetById(Guid id)
        {
            return await appContext.Addresses.Where(x => x.Id == id).Select(x => new AddressDto
            {
                City = x.City,
                Street = x.Street,
                Suite = x.Suite,
                Zipcode = x.Zipcode,
                Id = x.Id
            }).FirstOrDefaultAsync();
        }
    }
}
