using My_knowadge.Dto;

namespace My_knowadge.Services
{
    public interface IAddressService
    {
        void Create(AddressDto dto);
        void Delete(Guid id);
        Task<AddressDto> GetById(Guid id);
        Task<List<AddressDto>> List();
        void Update(AddressDto dto);
    }
}