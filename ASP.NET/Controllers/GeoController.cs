using Microsoft.AspNetCore.Mvc;
using My_knowadge.Dto;
using My_knowadge.Models;
using My_knowadge.Services;

namespace My_knowadge.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GeoController : ControllerBase
    {
        private readonly IGeoService _geo;

        public GeoController(IGeoService geo)
        {
            _geo = geo;
        }

        [HttpGet("all")]
        public async Task<ActionResult<List<GeoDto>>> GetAll()
        {
            if (_geo.List().Result == null)
            {
                return NotFound();
            }

            return await _geo.List();
        }
        [HttpGet("Get/{id}")]
        public async Task<ActionResult<GeoDto>> GetById(Guid id)
        {
            if (_geo.GetById(id).Result == null)
            {
                return NotFound();
            }
            var data = _geo.GetById(id).Result;

            if (data == null)
            {
                return NotFound();
            }

            return data;
        }
        [HttpPut("edit/{id}")]
        public async Task<ActionResult<GeoDto>> Update(Guid id, GeoDto dto)
        {
            if (id != dto.Id)
            {
                return BadRequest();
            }

            _geo.Update(dto);

            return await _geo.GetById(id);
        }
        [HttpPost("add")]
        public ActionResult<GeoDto> Create(GeoDto id)
        {
            _geo.Create(id);
            return CreatedAtAction(nameof(GetById), new { id = id.Id }, id);

        }
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {

            if (_geo.GetById(id).Result == null)
            {
                return NotFound();
            }
            _geo.Delete(id);

            var custommer = await _geo.GetById(id);
            if (custommer == null)
            {
                return NoContent();
            }
            return NoContent();
        }

    }
}
