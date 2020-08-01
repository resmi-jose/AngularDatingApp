using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValueController : ControllerBase
    {
        private readonly DataContext _context;

        public ValueController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Value
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Value>>> Getvalues()
        {
            return await _context.values.ToListAsync();
        }

        // GET: api/Value/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ActionResult<Value>> GetValue(int id)
        {
            var value = await _context.values.FindAsync(id);

            if (value == null)
            {
                return NotFound();
            }

            return value;
        }

        // PUT: api/Value/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutValue(int id, Value value)
        {
            if (id != value.Id)
            {
                return BadRequest();
            }

            _context.Entry(value).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ValueExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Value
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Value>> PostValue(Value value)
        {
            _context.values.Add(value);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetValue", new { id = value.Id }, value);
        }

        // DELETE: api/Value/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Value>> DeleteValue(int id)
        {
            var value = await _context.values.FindAsync(id);
            if (value == null)
            {
                return NotFound();
            }

            _context.values.Remove(value);
            await _context.SaveChangesAsync();

            return value;
        }

        private bool ValueExists(int id)
        {
            return _context.values.Any(e => e.Id == id);
        }
    }
}
