using Microsoft.AspNetCore.Mvc;
using My_knowadge.Dto;
using My_knowadge.Services;
using System.Text;

namespace My_knowadge.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AddressController : ControllerBase
    {
        private readonly IAddressService _address;

        public AddressController(IAddressService address)
        {
            _address = address;
        }

        [HttpGet("all")]
        public async Task<ActionResult<List<AddressDto>>> GetAll()
        {
            if (_address.List().Result == null)
            {
                return NotFound();
            }

            return await _address.List();
        }
        [HttpGet("Get/{id}")]
        public async Task<ActionResult<AddressDto>> GetById(Guid id)
        {
            if (_address.GetById(id).Result == null)
            {
                return NotFound();
            }
            var data = _address.GetById(id).Result;

            if (data == null)
            {
                return NotFound();
            }

            return data;
        }
        [HttpPut("edit/{id}")]
        public async Task<ActionResult<AddressDto>> Update(Guid id, AddressDto dto)
        {
            if (id != dto.Id)
            {
                return BadRequest();
            }

            _address.Update(dto);

            return await _address.GetById(id);
        }
        [HttpPost("add")]
        public ActionResult<AddressDto> Create(AddressDto id)
        {
            _address.Create(id);
            return CreatedAtAction(nameof(GetById), new { id = id.Id }, id);
        }
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {

            if (_address.GetById(id).Result == null)
            {
                return NotFound();
            }
            _address.Delete(id);

            var custommer = await _address.GetById(id);
            if (custommer == null)
            {
                return NoContent();
            }
            return NoContent();
        }
    }
}
