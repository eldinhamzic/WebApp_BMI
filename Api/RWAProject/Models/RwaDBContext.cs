using Microsoft.EntityFrameworkCore;

namespace RWAProject.Models
{
    public class RwaDBContext : DbContext
    {

            public RwaDBContext()
            {
             }
        public RwaDBContext(DbContextOptions<RwaDBContext> options)
                : base(options)
            {
            }

            public virtual DbSet<Namjernice> Namjernice { get; set; } 
          

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                if (!optionsBuilder.IsConfigured)
                {
                    optionsBuilder.UseSqlServer("Data Source = .; Initial Catalog = RwaDatabase; Integrated Security = True");
                }
            }
        }
    }
