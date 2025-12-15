import Header from "./components/Header";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import WeatherMetrics from "./components/WeatherMetrics";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <CurrentWeather />
        <HourlyForecast />
      </main>
    </>
  );
}
