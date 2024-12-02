import './App.css';
import { useEffect, useState } from "react"
import axios from 'axios';

function App() {

  useEffect(() => {
    (async () => {
      const data = await axios.get('./F-C0032-001.json');
      console.log(data);
      const { location } = data.data.cwaopendata.datatest;
      console.log(location);
    })
  }, [])
  return (

    <>
      <body class="wrap">
        <h2>36小時天氣預報</h2>
        
          <div class="city"><h3>台北市</h3></div>
          <div class="weatherbox">
          <div class="innerweather">
          <h3>2日</h3>
          <p>上午 6:00</p>
          <p>~</p>
          <p>下午 6:00</p>
          <img src="/weatherIcon/晴時多雲.svg" />
          <p>晴時多雲</p>
          <p>10%</p>
          </div>
          <div class="innerweather">
          <h3>2日</h3>
          <p>上午 6:00</p>
          <p>~</p>
          <p>下午 6:00</p>
          <img src="/weatherIcon/晴時多雲.svg" />
          <p>晴時多雲</p>
          <p>10%</p>
          </div>
          <div class="innerweather">
          <h3>2日</h3>
          <p>上午 6:00</p>
          <p>~</p>
          <p>下午 6:00</p>
          <img src="/weatherIcon/晴時多雲.svg" />
          <p>晴時多雲</p>
          <p>10%</p>
          </div>
        </div>
        
      </body>





    </>
  )
}
export default App