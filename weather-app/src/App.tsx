import './App.css';
import {useState} from 'react';
import GetCityWeather from './components/api/GetCityWeather';
import AudioPlayer from './components/AudioPlayer';
function App() {
   // variable to set the search term to nothing
  const [searchTerm, setSearchTerm] = useState('');
 // write a function to input the users info
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }
  // write a function to listen for the search button to be pressed - set search value
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setSearchTerm(searchTerm);
  }

  const [isTextVisible, setIsTextVisible] = useState(false);

  function handleEllipsisClick() {
    setIsTextVisible(!isTextVisible);
  }

  // Return the JSX element
  // text input box
  //search button -> takes in text input passes to API request


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
