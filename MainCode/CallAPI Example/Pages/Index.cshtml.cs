using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using testAPI;

namespace CallAPI_Example.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly IApiService _apiService;

        public IndexModel(ILogger<IndexModel> logger, IApiService apiService)
        {
            _logger = logger;
            _apiService = apiService;
        }
        public List<WeatherForecast> weatherForecasts { get; set; }
        public async Task<IActionResult> OnGet()
        {
            try
            {
                // Gọi API GET
                weatherForecasts = await _apiService.GetAsync<List<WeatherForecast>>("WeatherForecast");

                // Xử lý dữ liệu phản hồi ở đây

                return Page(); // hoặc Redirect, hoặc RedirectToPage, hoặc PartialView, tùy thuộc vào trường hợp của bạn
            }
            catch (Exception ex)
            {
                // Xử lý ngoại lệ
                return Page(); // hoặc trả về một trang lỗi khác
            }
        }
    }

    public class WeatherForecast
    {
        public DateOnly Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string? Summary { get; set; }
    }
}
