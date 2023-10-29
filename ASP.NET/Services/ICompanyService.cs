using My_knowadge.Dto;

namespace My_knowadge.Services
{
    public interface ICompanyService
    {
        void Create(CompanyDto dto);
        void Delete(Guid id);
        Task<CompanyDto> GetById(Guid id);
        Task<List<CompanyDto>> List();
        void Update(CompanyDto dto);
    }
}