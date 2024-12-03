import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import { IoIosUmbrella } from "react-icons/io";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://github.com/alpaca34607/myReact7/blob/gh-pages/json/F-C0032-001.json');
        const { location } = response.data.cwaopendata.dataset;
        setWeatherData(location); // 設置資料到狀態中
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);


  return (

    <>
      <div className="wrap">
        <h2>36小時天氣預報</h2>
        {/*一列兩欄*/}
        <div className="row">
          
          {/* 第一欄 */}
          <div className="col">
            {/* 一個大方盒 */}
            <div className="cityweather">

              {/* 卡片樣式 */}
              <div className="card">
                {/* 標題 */}
                <div className="city"><h3> 台北市 </h3></div> {/*city.locationName */}
                {/* 內容 */}
                <div className="weatherbox">
                  {/* 一列三欄 */}
                  <div className="innerweather">
                    <h3>2日</h3>
                    <p>上午 6:00<br />
                      ~<br />
                      下午 6:00</p>
                      {/* <img src="./public/weatherIcon/晴時多雲.svg" alt="" /> */}
                    <img src="./weatherIcon/晴時多雲.svg" alt="" />

                    <p>晴時多雲</p>
                    <p><IoIosUmbrella />10%</p>
                  </div>
                  <div className="innerweather">
                    <h3>2日</h3>
                    <p>上午 6:00<br />
                      ~<br />
                      下午 6:00</p>
                    <img src="./weatherIcon/晴時多雲.svg" />

                    <p>晴時多雲</p>
                    <p><IoIosUmbrella />10%</p>
                  </div>
                  <div className="innerweather">
                    <h3>2日</h3>
                    <p>上午 6:00<br />
                      ~<br />
                      下午 6:00</p>
                    <img src="./weatherIcon/晴時多雲.svg" />

                    <p>晴時多雲</p>
                    <p><IoIosUmbrella />10%</p>
                  </div>


                </div>
              </div>
            </div>



            <div className="cityweather">

              {/* 卡片樣式 */}
              <div className="card">
                {/* 標題 */}
                <div className="city"><h3>台北市</h3></div>
                {/* 內容 */}
                <div className="weatherbox">
                  {/* 一列三欄 */}
                  <div className="innerweather">
                    <h3>2日</h3>
                    <p>上午 6:00<br />
                      ~<br />
                      下午 6:00</p>
                    <img src="./weatherIcon/晴時多雲.svg" />

                    <p>晴時多雲</p>
                    <p><IoIosUmbrella />10%</p>
                  </div>
                  <div className="innerweather">
                    <h3>2日</h3>
                    <p>上午 6:00<br />
                      ~<br />
                      下午 6:00</p>
                    <img src="./weatherIcon/晴時多雲.svg" />

                    <p>晴時多雲</p>
                    <p><IoIosUmbrella />10%</p>
                  </div>
                  <div className="innerweather">
                    <h3>2日</h3>
                    <p>上午 6:00<br />
                      ~<br />
                      下午 6:00</p>
                    <img src="./weatherIcon/晴時多雲.svg" />

                    <p>晴時多雲</p>
                    <p><IoIosUmbrella />10%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
             {/* 第二欄 */}
             <div className="col2">
            {/* 一個大方盒 */}
            <div className="cityweather">

              {/* 卡片樣式 */}
              <div className="card">
                {/* 標題 */}
                <div className="city"><h3>台北市</h3></div>
                {/* 內容 */}
                <div className="weatherbox">
                  {/* 一列三欄 */}
                  <div className="innerweather">
                    <h3>2日</h3>
                    <p>上午 6:00<br />
                      ~<br />
                      下午 6:00</p>
                    <img src="./weatherIcon/晴時多雲.svg" />

                    <p>晴時多雲</p>
                    <p><IoIosUmbrella />10%</p>
                  </div>
                  <div className="innerweather">
                    <h3>2日</h3>
                    <p>上午 6:00<br />
                      ~<br />
                      下午 6:00</p>
                    <img src="./weatherIcon/晴時多雲.svg" />

                    <p>晴時多雲</p>
                    <p><IoIosUmbrella />10%</p>
                  </div>
                  <div className="innerweather">
                    <h3>2日</h3>
                    <p>上午 6:00<br />
                      ~<br />
                      下午 6:00</p>
                    <img src="./weatherIcon/晴時多雲.svg" />

                    <p>晴時多雲</p>
                    <p><IoIosUmbrella />10%</p>
                  </div>


                </div>
              </div>
            </div>



            <div className="cityweather">

              {/* 卡片樣式 */}
              <div className="card">
                {/* 標題 */}
                <div className="city"><h3>台北市</h3></div>
                {/* 內容 */}
                <div className="weatherbox">
                  {/* 一列三欄 */}
                  <div className="innerweather">
                    <h3>2日</h3>
                    <p>上午 6:00<br />
                      ~<br />
                      下午 6:00</p>
                    <img src="./weatherIcon/晴時多雲.svg" />

                    <p>晴時多雲</p>
                    <p><IoIosUmbrella />10%</p>
                  </div>
                  <div className="innerweather">
                    <h3>2日</h3>
                    <p>上午 6:00<br />
                      ~<br />
                      下午 6:00</p>
                    <img src="./weatherIcon/晴時多雲.svg" />

                    <p>晴時多雲</p>
                    <p><IoIosUmbrella />10%</p>
                  </div>
                  <div className="innerweather">
                    <h3>2日</h3>
                    <p>上午 6:00<br />
                      ~<br />
                      下午 6:00</p>
                    <img src="./weatherIcon/晴時多雲.svg" />

                    <p>晴時多雲</p>
                    <p><IoIosUmbrella />10%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}
export default App