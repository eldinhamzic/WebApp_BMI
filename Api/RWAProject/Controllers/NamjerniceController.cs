using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RWAProject.Models;

namespace RWAProject.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class NamjerniceController : Controller
    {
        private readonly RwaDBContext _db;
        public NamjerniceController(RwaDBContext _db)
        {
            this._db = _db;
        }

        [HttpGet]
        public async Task<IActionResult> GetNamjernice()
        {
            var news = await _db.Namjernice.ToListAsync();
            return Ok(news);
        }

        //jedna namjernica
        [HttpGet]
        [Route("{id:int}")]
        [ActionName("GetNamjerniceSve")]
        public async Task<IActionResult> GetNamjerniceSve([FromRoute] int id)
        {
            var news = await _db.Namjernice.FirstOrDefaultAsync(x => x.Id == id);
            if (news != null)
            {
                return Ok(news);
            }
            return NotFound("ide");
        }

       


        //Unnesi namjernice
        [HttpPost]
        public async Task<IActionResult> CreateNamjernicu([FromBody] Namjernice namjernica)
        {

            await _db.Namjernice.AddAsync(namjernica);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetNamjerniceSve), new { id = namjernica.Id }, namjernica);
        }





    }

        
    }
