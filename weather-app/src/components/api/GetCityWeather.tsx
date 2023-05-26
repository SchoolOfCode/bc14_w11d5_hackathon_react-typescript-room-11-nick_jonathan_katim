import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

type GetCityWeatherProps = {
    city: string;
}




export default function GetCityWeather(props: GetCityWeatherProps) {
    const { data: weatherData, isLoading, isError, error} = useQuery({
        queryKey: ['data'], 
        queryFn: async () => {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city},UK&appid=0c63ca9f419924f3e5badb3b4760bb53`;
            const { data } = await axios.get(url);
            console.log('test');
            return data;
        }
        });
    
        if (isLoading) {
            return <div>Loading...</div>;
        }
    
        if (isError) {
            return <div>Error: {{ data: weatherData, isLoading, isError, error}.error.message}</div>;
        }

    return (
        <div>
            <h1>Weather for {props.city}</h1>
            <p>Temperature: {weatherData.main.temp}</p>
            <p>Weather: {weatherData.weather[0].main}</p>
            <p>Wind Speed:{weatherData.}
        </div>
    )
