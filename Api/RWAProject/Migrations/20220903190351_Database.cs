using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RWAProject.Migrations
{
    public partial class Database : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Namjernice",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Kalorije = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Masti = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Ugljikohidrati = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Proteini = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Namjernice", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Namjernice");
        }
    }
}
