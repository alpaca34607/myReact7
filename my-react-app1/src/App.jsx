import MyComponent from "./component/MyComponent"
function MyComponent2() {
  return(
  // 空標籤:Fragment
  <>
  <h1>我是元件2</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ratione inventore minus nobis enim quaerat illum modi impedit ducimus tempora molestiae, harum cupiditate deserunt corporis, ipsam officia velit eaque dolore?</p>
  </>
  )
}
function App() {


  return (
    <div> 
      <MyComponent2/>
      </div>
  )
}

export default App
