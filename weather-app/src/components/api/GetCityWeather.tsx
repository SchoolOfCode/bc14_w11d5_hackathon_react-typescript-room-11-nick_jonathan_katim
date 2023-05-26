import axios from "axios";
import { useQuery } from "@tanstack/react-query";

type GetCityWeatherProps = {
  city: string;
};

export default function GetCityWeather(props: GetCityWeatherProps) {
  // create a new varaible to convert the temp into celcius
  function kelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }
  const {
    data: weatherData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city},uk&appid=0c63ca9f419924f3e5badb3b4760bb53`;
      const { data } = await axios.get(url);
      console.log("test");
      return data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return (
      <div>
        Error: {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }
  // create new variable to convert temperature from Kelvin to Celcius - to 00.00 format
  const temperatureInCelsius =
    Math.round(kelvinToCelsius(weatherData.main.temp) * 100) / 100;

  return (
    <div>
      <h2>Weather for '{props.city}'</h2>
      <p>Temperature: {temperatureInCelsius}°C</p>
      {/* <p>Temperature: {weatherData.main.temp}</p> */}
      <p>Weather: {weatherData.weather[0].main}</p>
      <p>Wind Speed: {weatherData.wind.speed}</p>
    </div>
  );
}
