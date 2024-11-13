import './App.css';
function App() {
  // 建立特色欄位
  const H = {

    info1: {
      h1: "教學影音",
      word: "莫名其妙的影音課程，認識世界上奇奇怪怪的Youtuber",
    },
    info2: {
      h1: "良性互動",
      word: "莫名其妙的影音課程，認識世界上奇奇怪怪的Youtuber",
    },
    info3: {
      h1: "趨勢分享",
      word: "莫名其妙的影音課程，認識世界上奇奇怪怪的Youtuber",
    }
  }
  const { info1, ...other } = H;
  console.log(info1);
  console.log(other.info3);

  // 建立推薦課程欄位

  const C = {
    class1: {
      h1: "Unity 5",
      word: "最新的Unity公開課程，讓你一步一步做出自己心中理想的遊戲",
      teacher: "講師:xxx",
      time: "影音課程時數:4小時",
      price: "原價NT$1600",
      discount: "NT$ 1200",
    },
    class2: {
      h1: "GameSalad 2D 手游製作 ",
      word: "最新的Unity公開課程，讓你一步一步做出自己心中理想的遊戲",
      teacher: "講師:xxx",
      time: "影音課程時數:8小時",
      price: "原價NT$3200",
      discount: "NT$ 1600",
    },
    class3: {
      word: "最新的Unity公開課程，讓你一步一步做出自己心中理想的遊戲",
      teacher: "講師:xxx",
      time: "影音課程時數:8小時",
      price: "原價NT$3200",
      discount: "NT$ 1600",
    }
  }
  const { class1, ...more } = C;
  console.log(class1);
  console.log(more.class3);



  return (
    <>



      <div classnName="wrap">
        <div class="banner">
          <img src="../public/images/banner.jpg" alt="" />
        </div>


        <div class="infobox" >
          <div class="infoboxinner">
            <h1>{`${info1.h1}`}</h1>
            <p>{`${info1.word}`}</p>
          </div>
          <div class="infoboxinner">
            <h1>{`${other.info2.h1}`}</h1>
            <p>{`${other.info2.word}`}</p>
          </div>
          <div class="infoboxinner">
            <h1>{`${other.info3.h1}`}</h1>
            <p>{`${other.info3.word}`}</p>
          </div>
        </div>


        <div class="row3">
          <h1>讓學習成為一種習慣</h1>
        </div>
        <h1 id="recommend">推薦課程</h1>
        <div class="classbox">

          <div class="class">

            <div class="classboxinner">
              <img src="../public/images/unity.jpg" alt="課程" class="classimg" />

              <h1>{`${class1.h1}`}</h1>
              <p class="classword">{`${class1.word}`}</p>
              <p class="teacher">{`${class1.teacher}`}</p>
              <p class="time">{`${class1.time}`}</p>
              <p><span1 class="price">{`${class1.price}`}</span1><span2 class="discount">{`${class1.discount}`}</span2></p>
          

              <button>付款上課去</button>
            </div>
            <div class="classboxinner">
              <img src="../public/images/gamesalad.jpg" alt="課程" class="classimg" />

              <h1>{`${more.class2.h1}`}</h1>
              <p class="classword">{`${more.class2.word}`}</p>
              <p class="teacher">{`${more.class2.teacher}`}</p>
              <p class="time">{`${more.class2.time}`}</p>
              <p><span1 class="price">{`${more.class2.price}`}</span1><span2 class="discount">{`${more.class2.discount}`}</span2></p>
             
              <button>付款上課去</button>
            </div>
            <div class="classboxinner">
              <img src="../public/images/gwd.jpg" alt="課程" class="classimg" />

              <h1>{`${more.class3.h1}`}</h1>
              <p class="classword">{`${more.class3.word}`}</p>
              <p class="teacher">{`${more.class3.teacher}`}</p>
              <p class="time">{`${more.class3.time}`}</p>
              <p><span1 class="price">{`${more.class3.price}`}</span1><span2 class="discount">{`${more.class3.discount}`}</span2></p>
              
              <button>付款上課去</button>
            </div>
          </div>











        </div>
      </div >
      <footer>
        <div>&copy;( 呂依璇13版權申明 )</div>
      </footer>



    </>

  )
}


export default App