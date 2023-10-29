using Microsoft.EntityFrameworkCore;
using My_knowadge.Dto;
using My_knowadge.Models;

namespace My_knowadge.Services
{
    public class CompanyService : ICompanyService
    {
        private readonly AppDBContext appContext = new AppDBContext();

        public CompanyService(AppDBContext dbContext)
        {
            this.appContext = dbContext;
        }

        public async void Create(CompanyDto dto)
        {
            appContext.Companies.Add(new Company
            {
                Bs = dto.Bs,
                CatchPhrase = dto.CatchPhrase,
                Name = dto.Name,
            });
            await appContext.SaveChangesAsync();
        }
        public async void Update(CompanyDto dto)
        {

            appContext.Companies.Update(new Company
            {
                Bs = dto.Bs,
                CatchPhrase = dto.CatchPhrase,
                Name = dto.Name,
            });
            await appContext.SaveChangesAsync();
        }
        public async Task<List<CompanyDto>> List()
        {
            var data = await appContext.Companies.Select(x => new CompanyDto
            {
                Bs = x.Bs,
                CatchPhrase = x.CatchPhrase,
                Name = x.Name,
                UserlId = x.UserlId,
            }).ToListAsync();
            return data;
        }
        public async void Delete(Guid id)
        {
            var data = appContext.Companies.Where(x => x.Id == id).FirstOrDefaultAsync().Result;
            appContext.Companies.Remove(data);
            await appContext.SaveChangesAsync();

        }

        public async Task<CompanyDto> GetById(Guid id)
        {
            return await appContext.Companies.Where(x => x.Id == id).Select(x => new CompanyDto
            {
                Bs = x.Bs,
                CatchPhrase = x.CatchPhrase,
                Name = x.Name,
                UserlId = x.UserlId,
            }).FirstOrDefaultAsync();
        }
    }
}
