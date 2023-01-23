using Microsoft.EntityFrameworkCore;
using RWAProject.Models;
using RWAProject.Controllers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


//Include Database
builder.Services.AddDbContext<RwaDBContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString(
    "Default")
    ));

builder.Services.AddCors((setup) => {
    setup.AddPolicy("default", (options) =>
    {
        options.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin();
    });
});





var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("default");


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();



app.Run();
