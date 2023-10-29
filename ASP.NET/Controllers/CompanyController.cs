using Microsoft.AspNetCore.Mvc;
using My_knowadge.Dto;
using My_knowadge.Services;

namespace My_knowadge.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CompanyController : ControllerBase
    {
        private readonly ICompanyService _company;

        public CompanyController(ICompanyService company)
        {
            _company = company;
        }

        [HttpGet("all")]
        public async Task<ActionResult<List<CompanyDto>>> GetAll()
        {
            if (_company.List().Result == null)
            {
                return NotFound();
            }

            return await _company.List();
        }
        [HttpGet("Get/{id}")]
        public async Task<ActionResult<CompanyDto>> GetById(Guid id)
        {
            if (_company.GetById(id).Result == null)
            {
                return NotFound();
            }
            var data = _company.GetById(id).Result;

            if (data == null)
            {
                return NotFound();
            }

            return data;
        }
        [HttpPut("edit/{id}")]
        public async Task<ActionResult<CompanyDto>> Update(Guid id, CompanyDto dto)
        {
            if (id != dto.Id)
            {
                return BadRequest();
            }

            _company.Update(dto);

            return await _company.GetById(id);
        }
        [HttpPost("add")]
        public ActionResult<CompanyDto> Create(CompanyDto id)
        {
            _company.Create(id);
            return CreatedAtAction(nameof(GetById), new { id = id.Id }, id);

        }
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {

            if (_company.GetById(id).Result == null)
            {
                return NotFound();
            }
            _company.Delete(id);

            var custommer = await _company.GetById(id);
            if (custommer == null)
            {
                return NoContent();
            }
            return NoContent();
        }
    }
}
