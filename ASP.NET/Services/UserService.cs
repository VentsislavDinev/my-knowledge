using Microsoft.EntityFrameworkCore;
using My_knowadge.Dto;
using My_knowadge.Models;

namespace My_knowadge.Services
{
    public class UserService : IUserService
    {
        private readonly AppDBContext appContext = new AppDBContext();

        public UserService(AppDBContext dbContext)
        {
            this.appContext = dbContext;
        }

        public async void Create(UserDto dto)
        {
            appContext.Users.Add(new UsersModel
            {
                id = dto.id,
                Email = dto.Email,
                Name = dto.Name,
                Phone = dto.Phone,
                Website = dto.Website,
                Username = dto.Website,
                CompanyId = dto.CompanyId
            });
            await appContext.SaveChangesAsync();
        }
        public async void Update(UserDto dto)
        {

            appContext.Users.Update(new UsersModel
            {
                id = dto.id,
                Email = dto.Email,
                Name = dto.Name,
                Phone = dto.Phone,
                Website = dto.Website,
                Username = dto.Website,
                CompanyId = dto.CompanyId
            });
            await appContext.SaveChangesAsync();
        }
        public async Task<List<UserDto>> List()
        {
            var data = await appContext.Users.Select(x => new UserDto
            {
                id = x.id,
                Email = x.Email,
                Name = x.Name,
                Phone = x.Phone,
                Website = x.Website,
                Username = x.Website,
                CompanyId = x.CompanyId
            }).ToListAsync();
            return data;
        }
        public async void Delete(int id)
        {
            var data = appContext.Users.Where(x => x.id == id).FirstOrDefaultAsync().Result;
            appContext.Users.Remove(data);
            await appContext.SaveChangesAsync();

        }

        public async Task<UserDto> GetById(int id)
        {
            return await appContext.Users.Where(x => x.id == id).Select(x => new UserDto
            {
                Email = x.Email,
                Name = x.Name,
                Phone = x.Phone,
                Website = x.Website,
                Username = x.Website,
                CompanyId = x.CompanyId
            }).FirstOrDefaultAsync();
        }
    }
}
