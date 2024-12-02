import { useState } from "react"

function APP(){
  const [inputUserName,setInputUserName]=useState("我是文字方塊");
return(
  <>
  <h1>react-表單</h1>
  <hr/>
  {/* input */}
  <label htmlFor="username">使用者名稱</label>
  <input type ="text" id="username"
  value={inputUserName}
  onchange={(e)=>{
    console.log(`更改前:${inputUserName}`);
    setInputUserName(e.target.value);

  }}
  
/>{inputUserName}
</>
)

}

export default APP