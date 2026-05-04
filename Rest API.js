const apiKey = "88754594146bb7ec8df684db66d6ec9b"; // 👈 tumhari API key

async function getWeather() {
    const city = document.getElementById("city").value.trim();

    const loading = document.getElementById("loading");
    const error = document.getElementById("error");
    const weatherBox = document.getElementById("weather");

    // UI reset
    loading.classList.remove("hidden");
    error.classList.add("hidden");
    weatherBox.classList.add("hidden");

    try {
        // ✅ Correct API URL
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        // ❌ Error handling
        if (res.status === 404) {
            throw new Error("City not found ❌");
        }
        if (res.status === 401) {
            throw new Error("Invalid API key 🔑");
        }

        const data = await res.json();

        // ✅ Data display
        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = `🌡 Temp: ${data.main.temp}°C`;
        document.getElementById("desc").innerText = `🌥 ${data.weather[0].description}`;

        weatherBox.classList.remove("hidden");

    } catch (err) {
        error.innerText = err.message;
        error.classList.remove("hidden");
    }

    loading.classList.add("hidden");
}