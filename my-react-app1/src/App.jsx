import React, { useState, useEffect } from "react";

import "./App.css";

export default function App() {
  // 建立目前背景圖的變數
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const slides = [
    { url: "./images2/01.jpg", text: "第一張圖" },
    { url: "./images2/02.jpg", text: "第二張圖" },
    { url: "./images2/03.jpg", text: "第三張圖" },
    { url: "./images2/04.jpg", text: "第四張圖" },
  ];

  // 當currentImgIndex改變時,會觸發useEffect
  //Interval多久時間跳下一張
  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(autoplay);
  }, [currentImgIndex]);
  //下一張
  const nextSlide = () => {
    // 取得前一張的索引編號，檢查是否為最後一張最後一個編號
    // 是=>回到第一張
    // 否=>跳到下一張
    setCurrentImgIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/* 最外層 */}
      <div
        className="wrapper"
        style={{
          border: "1px solid red",
          maxWidth: "100vw",
          height: "100vh",
          margin: "auto",
        }}
      >
        {/* 滿版背景輪播區 */}
        <div
          style={{
            backgroundImage: `url(${slides[currentImgIndex].url})`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            margin: "auto",
          }}
        >
          <h2 style={{ color: "white", margin: "0"}}>{slides[currentImgIndex].text}</h2>
        </div>
      </div>
      背景輪播
    </>
  );
}
