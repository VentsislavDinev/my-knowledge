using Microsoft.AspNetCore.Mvc;
using My_knowadge.Dto;
using My_knowadge.Services;

namespace My_knowadge.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _user;

        public UserController(IUserService user)
        {
            _user = user;
        }

        [HttpGet("all")]
        public async Task<ActionResult<List<UserDto>>> GetAll()
        {
            if (_user.List().Result == null)
            {
                return NotFound();
            }

            return await _user.List();
        }
        [HttpGet("Get/{id}")]
        public async Task<ActionResult<UserDto>> GetById(int id)
        {
            if (_user.List().Result == null)
            {
                return NotFound();
            }
            var data = _user.GetById(id).Result;

            if (data == null)
            {
                return NotFound();
            }

            return data;
        }
        [HttpPut("edit/{id}")]
        public async Task<ActionResult<UserDto>> Update(int id, UserDto dto)
        {
            if (id != dto.id)
            {
                return BadRequest();
            }

            _user.Update(dto);

            return await _user.GetById(id);
        }
        [HttpPost("add")]
        public ActionResult<UserDto> Create(UserDto id)
        {
            _user.Create(id);
            return CreatedAtAction(nameof(GetById), new { id = id.id }, id);

        }
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            if (_user.GetById(id).Result == null)
            {
                return NotFound();
            }
            _user.Delete(id);

            var custommer = await _user.GetById(id);
            if (custommer == null)
            {
                return NoContent();
            }
            return NoContent();
        }
    }
}
