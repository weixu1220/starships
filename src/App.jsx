import { useState,useEffect } from 'react'
import './App.css'
import FetchData from './components/FetchData';
import DisplayData from './components/DisplayData';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    FetchData(setData)
  }, []);

  return (
    <div className="container">
      <h1>STAR WARS STARSHIPS</h1>
      <DisplayData data={data}/> 
    </div>
  )
}

export default App
