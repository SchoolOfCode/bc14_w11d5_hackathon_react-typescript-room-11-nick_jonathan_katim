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
    <div className="weather-quote">
        Whether the weather is incredible, or whether the weather is abysmal, <br />
        The Weatherers will forecast you the weather so you can weather any weather, <br />
        and never be weathered down...
        {isTextVisible && <span> by the weather.</span>}
        {!isTextVisible && (
          <span className="ellipsis" onClick={handleEllipsisClick}>
            .
          </span>
        )}
      </div>
    <AudioPlayer />
    <GetCityWeather city={searchTerm}/>
  </div>
  )
}

export default App;
