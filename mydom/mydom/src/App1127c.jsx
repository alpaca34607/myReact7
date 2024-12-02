import { useEffect, useState } from "react"

function APP(){
  // 使用者名稱
  const [inputUserName,setInputUserName] = useState("我是文字方塊");
  // 縣市名稱
 const [selCity,setSelCity]= useState('');
//  建立陣列
const arrCity=['台北市','新北市','桃園市','花蓮市','高雄市'];
// 閱讀確認
const [check , setCheck] = useState(false);

// 複選:多個核取方塊
 const [chkList , setChkList] = useState([]);
 const arrList=['HTML','CSS','JS','react']

 //建立函式被勾選的狀態
 const handleChkList= (e) =>{
  // console.log(e.target.value);
  // 使用其餘運算子保留已經被勾選的項目+目前被勾選的項目
  // 檢查是否被勾選
if(e.target.checked){
  // 是 => 原本+新的 
  setChkList([...chkList,e.target.value]);
}else{
  // 否 => 從原本被勾選的項目中，拿掉不要的(filter)
  setChkList(
    chkList.filter((list)=>{
      return list !== e.target.checked
      


  }));
}
 }

// 選項按鈕
const [q1Ans,setQ1Ans] = useState('');
const [q2Ans,setQ2Ans] = useState('');

useEffect(()=>{
  const btn1 = document.getElementById
})

//統計次數
const [ans1Count,setAns1Count]=useState('')
 

 return(
  <>
  <h1>react-表單</h1>
  <hr/>
  {/* input */}
  <label htmlFor="username">使用者名稱</label>
  <input type ="text" id="username"
  value={inputUserName}
  onChange={(e)=>{
    console.log(`更改前:${inputUserName}`);
    setInputUserName(e.target.value);

  }}
  
/>{inputUserName}
<br/>
{/* select */}
<label htmlFor = "city">縣市名</label>
<select name="" id="city"
value={selCity}
onChange={(e)=>{
  setSelCity(e.target.value);
}}

>

  {/* 逐行寫法 */}
  {/* <option value="台北市">台北市</option>
  <option value="桃園市">桃園市</option>
  <option value="新北市">新北市</option>
  <option value="台中市">台中市</option>
  <option value="台南市">台南市</option>
  <option value="高雄市">高雄市</option> */}


  {/* 讀取陣列寫法 */}
  {/* disabled =>無法使用(失能/失效) */}
  <option value="" disabled>請選擇</option>
  {arrCity.map((city)=>{
    return <option value={city} key={city}>{city}</option>

  })
     
  }
</select>{selCity}
</>
)
}


 
export default APP