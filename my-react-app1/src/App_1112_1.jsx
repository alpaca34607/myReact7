// 子組件"props寫法"
// function MyComponnent(props){
// onsole.log(props)
// preprocessCSS.c()
//   return <><div>我是子組件</div>
//  <div>{props.a}</div>
//  <div>{props.b}</div>
//  </>

// }

// 子組件使用"物件解構賦質"寫法 
// 解構父職的名稱必須一樣,順序可以不同
function MyComponnent({ a, b="我是預設值b", c }) {
console.log(a,b,c)
  
  return <>
    <div>我是子組件</div>
    <div>{a}</div>
    <div>{b}</div>
    <div className="myFunC">{c}</div>
    </>
   
  }
 
 
   //父組件
  
  function App(){
  return(
    <>
      <MyComponnent
        a="我是屬性a"
       // b="我是屬性b"
        c={() =>{console.log("我是方法c")

        }}  />
      
      {  /* props = properites = 屬性
        作用:從副主件傳資料到子組件(只能上對下傳遞)
        撰寫React時，組件之間需要溝通時 (也就是傳遞資料)
        props就可以做到這件事
         */


      }
    </>
    )

}
    export default App