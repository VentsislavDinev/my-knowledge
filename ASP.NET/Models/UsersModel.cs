namespace My_knowadge.Models
{
    public class UsersModel
    {
        public int id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public int AddressId { get; set; }
        public Address Address { get; set; }
        public string Phone { get; set; }
        public string Website { get; set; }
        public int CompanyId { get; set; }
        public Company Company { get; set; }
    }
}
