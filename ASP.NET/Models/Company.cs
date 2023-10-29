namespace My_knowadge.Models
{
    public class Company
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string CatchPhrase { get; set; }
        public string Bs { get; set; }
        public int UserlId { get; set; }
        public UsersModel User { get; set; }
    }

}
