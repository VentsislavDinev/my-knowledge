namespace My_knowadge.Dto
{
    public class GeoDto
    {
        public Guid Id { get; set; }
        public string Lat { get; set; }
        public string Lng { get; set; }
        public int AddressId { get; set; }
        public AddressDto Address { get; set; }
    }
}
