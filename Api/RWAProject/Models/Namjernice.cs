using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RWAProject.Models
{
    public class Namjernice
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Naziv { get; set; }
        public string Kalorije { get; set; }
        public string Masti { get; set; }
        public string Ugljikohidrati { get; set; }
        public string Proteini { get; set; }

    }
}
