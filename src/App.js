import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import data from './data/events.json'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import MainPage from './components/MainPage/MainPage';
import EventPage from './components/EventPage/EventPage'
import LocationPage from './components/LocationPage/LocationPage'


function App() {
  useEffect(() => {
    //fetch("./data/events.json").then(res => res.json()).then(data => console.log(data))
    console.log(data)
  }
  )

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/eventPage" element={<EventPage />} />
          <Route path="/locationPage" element={<LocationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
