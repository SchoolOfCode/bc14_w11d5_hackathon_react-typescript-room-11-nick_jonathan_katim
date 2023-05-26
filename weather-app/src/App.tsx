import './App.css';
import {useState} from 'react';
import GetCityWeather from './components/api/GetCityWeather';
import AudioPlayer from './components/AudioPlayer';
function App() {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setSearchTerm(searchTerm);
  }

  // function clearSearch() {
  //   setSearchTerm("");
  // }

  const [isTextVisible, setIsTextVisible] = useState(false);

  function handleEllipsisClick() {
    setIsTextVisible(!isTextVisible);
  }

  return (
  <div className="App">  
    <h1 className="title">The Weatherers</h1>
    <div className="SearchBar">
      <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange}/>
      <button type="submit" onClick={handleClick}>Search</button>
      {/* <button type="submit" onClick={clearSearch}>Clear</button> */}
    </div>
    <h2 className="weather-quote">
        Whether the weather is incredible, or whether the weather is abysmal,
        The Weatherers will forecast you the weather so you can weather any weather,
        and never be weathered down...
        <span
          className={`ellipsis ${isTextVisible ? 'visible' : ''}`}
          onClick={handleEllipsisClick}
        >
          by the weather.
        </span>
      </h2>
    <AudioPlayer />
    <GetCityWeather city={searchTerm}/>
  </div>
  )
}

export default App;
