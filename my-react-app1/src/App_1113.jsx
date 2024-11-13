import './App.css';
import ShowContent from './ShowContent.jsx'
import ShowContentClass from './ShowContentClass.jsx'





function App() {
  return (
    <>

      <div className="wrap">
        {/* 頁首廣告區 */}
        <header className="banner">
          <img src="../public/images/banner.jpg" alt="" />
        </header>
      </div>
      {/* 特色區 */}
      <div className="infobox">
        <ShowContent />
      </div>
      {/* 標語 */}
      <div className="row3">
        <h1>讓學習成為一種習慣</h1>
      </div>

      {/* 推薦課程 */}

      <h1 id="recommend">推薦課程</h1>
      <div className="classbox">
        <ShowContentClass />
      </div>

      <div>
        {/* 頁尾 */}
        <footer>
          <div>&copy;( 呂依璇13版權申明 )</div>
        </footer>
      </div>

    </>

  )
}


export default App