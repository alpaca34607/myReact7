import img1 from "/images2/01.jpg";
import img2 from "/images2/02.jpg";
import img3 from "/images2/03.jpg";
import img4 from "/images2/04.jpg";
import React, { useState } from "react";

// import "./App.css";

export default function App() {
  // 建立圖片陣列
  const [currentImgIndex, setCurrentImgIndex] = useState(2);

  const arrPhotos = [img1, img2, img3, img4];

  return (
    <>
      <div className="wrapper">
        <div
          style={{
            display: "flex",
            flexDirection:"column",
            width: "580px",
            height:"480px",
            justifyContent: "space-around",
            margin: "50px 60px",
            overflow:"hidden",
          }}
        >
          {/* 大圖區 */}
          <img
            src={arrPhotos[currentImgIndex]}
            alt="photos"
            width="100%"
            height="480px"
           
            
          />
           {/* 縮圖區 */}
           <div
              style={{ 
                width:"auto",
                display: "flex", 
                justifyContent:"flex-start",
                marginTop:"10px",
               }}
            >
              {/* <img src={arrPhotos[0]} alt="photos" width={100} height={80} />
              <img src={arrPhotos[1]} alt="photos" width={100} height={80} />
              <img src={arrPhotos[2]} alt="photos" width={100} height={80} />
              <img src={arrPhotos[3]} alt="photos" width={100} height={80} /> */}
           

            {
              arrPhotos.map((photo, index)=>{
                return(
                  <img key={index} src={arrPhotos[index]} alt="photos" width={100} height={80}
                  onClick={(e)=>setCurrentImgIndex(index)
                  }
                  style={{cursor:"pointer",
                    marginRight:"5px"
                  }}
                  />
                )
              })
            }
             </div>
         
        </div>
      </div>
    </>
  );
}
