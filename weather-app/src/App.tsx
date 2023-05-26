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

  return (
  <div className="App">  
    <div className="SearchBar">
      <input type="text" placeholder="Search..." value={searchTerm} onChange={handleChange}/>
      <button type="submit" onClick={handleClick}>Search</button>
      {/* <button type="submit" onClick={clearSearch}>Clear</button> */}
    </div>
    <AudioPlayer />
    <GetCityWeather city={searchTerm}/>
  </div>
  )
}

export default App;
