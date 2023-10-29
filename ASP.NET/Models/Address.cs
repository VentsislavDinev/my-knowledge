namespace My_knowadge.Models
{
    public class Address
    {
        public Guid Id { get; set; }
        public string Street { get; set; }
        public string Suite { get; set; }
        public string City { get; set; }
        public string Zipcode { get; set; }
        public Guid GeoId { get; set; }
        public Geo Geo { get; set; }
    }

}
