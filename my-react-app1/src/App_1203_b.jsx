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
        {weatherList.map((city) => (
          <div className="item" key={city.locationName}>
            <h3>{city.locationName}</h3>
            <div className="content">

              {city.weatherElement[0].time.map((time, index) => (
                <div className="item2" key={index}>
                  <div className="innerweather">
                    {/* 日期 */}
                    {new Date(time.startTime).toLocaleString(undefined, {
                      day: 'numeric',

                    })}

                    {/* 顯示時間範圍 */}
                    <p>
                      {new Date(time.startTime).toLocaleString(undefined, {
                        hour: 'numeric',
                        minute: 'numeric',
                      })}
                      <br />~<br />
                      {new Date(time.endTime).toLocaleString(undefined, {
                        hour: 'numeric',
                        minute: 'numeric',
                      })}
                    </p>


                    {/* 天氣圖示 */}
                    {/* <p>
                      <img src="/weatherIcon/陰短暫雨.svg" alt="天氣圖示" /></p> */}
                    <p><img src={`./weatherIcon/${time.parameter.parameterName}.svg`} alt="" /></p>
                    
                    {/* 天氣狀況 */}
                    {time.parameter.parameterName}

                    {/* 降雨機率 */}
                    {/* <p> <IoIosUmbrella /> {time.parameter.parameterName}%</p> */}
                    <p><IoIosUmbrella />
                      {
                        city.weatherElement[4].time[index].parameter.parameterName
                      }
                      %
                    </p>
                  </div>
                </div>
              ))}


            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;

