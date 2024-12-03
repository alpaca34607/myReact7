import './App.css';
import { useEffect, useState } from "react"
import axios from 'axios';
import { IoIosUmbrella } from "react-icons/io";

function App() {

  useEffect(() => {
    (async () => {
      const data = await axios.get('https://alpaca34607.github.io/myReact/json/F-C0032-001.json');
      console.log(data);
      // const { location } = data.data.cwaopendata.datatest;
      // console.log(location);
    })()
  }, [])
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
                <div className="city"><h3>台北市</h3></div>
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