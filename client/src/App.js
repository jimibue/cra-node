import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([])
  async function getData(){
    let res = await Axios.get('/api/authors')
    console.log(res)
    setData(res.data)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="App">
      <h1>Data from node</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
