import React from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import {API_BASE_URL} from './API/Config'
import WeatherList from './components/WeatherList';


const App = () => {
  const {data, setUrl} = UseFetch();
  console.log(data);

  return (
    <Container className="App">
      <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${process.env.REACT_APP_API_KEY}`)} />

    {/* conditionally render  */}
      {data && <WeatherList weathers={data.list} />}
    </Container>
  );
};

export default App;
