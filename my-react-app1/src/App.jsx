
import "./App.css"
/*  空標籤:Fragment */
function MyComponent() {
  return(

  <>
  <h2>我是元件2</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ratione inventore minus nobis enim quaerat illum modi impedit ducimus tempora molestiae, harum cupiditate deserunt corporis, ipsam officia velit eaque dolore?</p>
  </>
  )
}
function App() {

// 建立變數
const strName="建仔";
  return (
    <div> 
      {/* JSX中使用javascript變數，前後加大括號{變數名稱} */}
      <h1 className="myH1" style={{
        color:'red',
        background:'yellow',
        width:'300px',
      }}>{strName.toUpperCase()}, 午安</h1>
      {{/* 屬性中使用變數 */}}
      <label htmlFor="userName">請輸入姓名:</label>
      {/* {placeholdder => 提示字} */}
      <input type="text" id="userName" placeholder={strName}/>
     { {/* <MyComponent/> */}}
      </div>
  )
}

export default App
