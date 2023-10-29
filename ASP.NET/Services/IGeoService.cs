using My_knowadge.Dto;

namespace My_knowadge.Services
{
    public interface IGeoService
    {
        void Create(GeoDto dto);
        void Delete(Guid id);
        Task<GeoDto> GetById(Guid id);
        Task<List<GeoDto>> List();
        void Update(GeoDto dto);
    }
}