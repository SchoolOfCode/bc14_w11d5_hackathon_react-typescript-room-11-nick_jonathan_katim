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
            return <div>Error: {error.message}</div>;
        }
    
      return (
          <div>{JSON.stringify(weatherData)}</div>
      );
}