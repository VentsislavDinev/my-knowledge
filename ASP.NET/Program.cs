
using Microsoft.EntityFrameworkCore;
using My_knowadge.Models;
using My_knowadge.Services;

namespace My_knowadge
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddDbContext<AppDBContext>(options =>
            {
                object value = options.UseSqlServer("server=.;database=myDb;trusted_connection=true;");
            });

            builder.Services.AddTransient<ICompanyService, CompanyService>();
            builder.Services.AddTransient<IGeoService, GeoService>();
            builder.Services.AddTransient<IAddressService, AddressService>();
            builder.Services.AddTransient<IUserService, UserService>();
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}