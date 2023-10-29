using My_knowadge.Models;

namespace My_knowadge.Dto
{
    public class CompanyDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string CatchPhrase { get; set; }
        public string Bs { get; set; }
        public int UserlId { get; set; }
        public UserDto User { get; set; }
    }
}
