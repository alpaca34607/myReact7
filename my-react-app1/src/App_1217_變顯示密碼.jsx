import { useRef ,useState} from 'react';

export default function App() {
  // conat [value, setValue]=useState('') 
  // 建立一個useRef的變數

const inputRef=UseRef(null)
console.log('App render...')
  const submitHander= () =>{
    // console.log(value);

    // 查看直
    console.log(inputRef.current.value);
    // 查看類型
    console.log(inputRef.current.type);
    // 更改類型為password
    console.log(inputRef.current.type)="password";
      // 更改類型為password
    console.log(inputRef.current.type);


  }
 return (
  <>
{/*   <input type="text" oncchange={(e)=> setValue(e.target.value)}/> */}
  <button onClick={submitHander}> 送出</button>
  </>
    
  );
}
