using Newtonsoft.Json;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace testAPI
{
    public interface IApiService
    {
        Task<T> GetAsync<T>(string requestUri);
        Task<HttpResponseMessage> PostAsync<T>(string requestUri, T content);
        Task<HttpResponseMessage> PutAsync<T>(string requestUri, T content);
        Task<HttpResponseMessage> DeleteAsync(string requestUri);
    }

    public class ApiService : IApiService
    {
        private readonly HttpClient _httpClient;

        public ApiService()
        {
            _httpClient = new HttpClient
            {
                BaseAddress = new Uri("https://localhost:7137/")
            };
            _httpClient.DefaultRequestHeaders.Accept.Clear();
            _httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }

        public async Task<T> GetAsync<T>(string requestUri)
        {
            var response = await _httpClient.GetAsync(requestUri);
            response.EnsureSuccessStatusCode();
            var content = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<T>(content); // Sử dụng Newtonsoft.Json 
        }

        public async Task<HttpResponseMessage> PostAsync<T>(string requestUri, T content)
        {
            var response = await _httpClient.PostAsJsonAsync(requestUri, content);
            response.EnsureSuccessStatusCode();
            return response;
        }

        public async Task<HttpResponseMessage> PutAsync<T>(string requestUri, T content)
        {
            var jsonContent = JsonConvert.SerializeObject(content);
            var httpContent = new StringContent(jsonContent, Encoding.UTF8, "application/json");

            var response = await _httpClient.PutAsync(requestUri, httpContent);
            response.EnsureSuccessStatusCode();
            return response;
        }

        public async Task<HttpResponseMessage> DeleteAsync(string requestUri)
        {
            var response = await _httpClient.DeleteAsync(requestUri);
            response.EnsureSuccessStatusCode();
            return response;
        }
    }
}
