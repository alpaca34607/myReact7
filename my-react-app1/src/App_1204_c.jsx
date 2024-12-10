import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import { IoIosUmbrella } from "react-icons/io";
import ShowWeather from './ShowWeathear';


function App() {
  const [weatherList, setWeatherList] = useState([]);


  useEffect(() => {
    (async () => {

      // 取得 JSON 資料
      const data = await axios.get('https://alpaca34607.github.io/myReact7/json/F-C0032-001.json');



      // 修改根據 JSON 資料格式取得 location 陣列
      const { location } = data.data.cwaopendata.dataset;
      console.log(location)
      setWeatherList(location);

    })();
  }, []);

  // locationName =>縣市名
  // elementName[0] => wx =>天氣概況
  // elementName[4] => PoP => 降雨率
  // 
  return (
    <div className="wrap">
      <h2>36小時天氣預報</h2>
      <div className="container">
      <ShowWeather/>
      
      </div>
    </div>
  );
}


export default App;

