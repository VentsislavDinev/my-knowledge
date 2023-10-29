using My_knowadge.Dto;

namespace My_knowadge.Services
{
    public interface IUserService
    {
        void Create(UserDto dto);
        void Delete(int id);
        Task<UserDto> GetById(int id);
        Task<List<UserDto>> List();
        void Update(UserDto dto);
    }
}