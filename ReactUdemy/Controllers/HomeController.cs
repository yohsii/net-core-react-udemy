using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ReactUdemy.Models;

namespace ReactUdemy.Controllers
{
    //[ApiController]
    //[Route("api/[action]")]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        //[Route("api/test")]
        public async Task<IActionResult> Test() {
            var httpClient = new HttpClient();
            var weatherInfoJson = await httpClient.GetStringAsync("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02");
            return Content(weatherInfoJson,"application/json");
        }
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index(string path)
        {

            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
