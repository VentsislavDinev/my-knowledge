using My_knowadge.Models;

namespace My_knowadge.Dto
{
    public class AddressDto
    {
        public Guid Id { get; set; }
        public string Street { get; set; }
        public string Suite { get; set; }
        public string City { get; set; }
        public string Zipcode { get; set; }
        public Guid GeoId { get; set; }
        public GeoDto Geo { get; set; }
    }
}
