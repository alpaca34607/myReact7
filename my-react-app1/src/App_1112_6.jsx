function App(){
  // 建立物件變數

const person= {

  s1:{
  name:"同學1",
  age: 10,
  },
  s2:{
    name:"同學2",
    age: 11,
    },

    s3:{
      name:"同學3",
      age: 12,
      }
  }
  
  
  
     
  //多筆資料的物件解構方法2:解構+展開...(其餘算子)
// 解構s1展開s2,s3
const {s1,...other} = person;
console.log(s1)
console.log(other.s3);

return(
  <>
<div>{`同學1姓名:${s1.name}`}</div>
<div>{`同學1姓名:${other.s3.name}`}</div>
</>
)
}

 
  export default App