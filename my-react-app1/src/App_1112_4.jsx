
  // 建立物件變數{[陣列])
const arr1 =[ 'p1','p2','p3']
  
    // 陣列解構


const [pNo1, pNo2,pNo3] =arr1;  
function App(){

  return(
    <>
    {/* 一般寫法 */}
    <p>陣列值1:{arr1[0]}</p>
    <p>陣列值1:{arr1[1]}</p>
    <p>陣列值1:{arr1[2]}</p>
    <hr />
     {/* 解構寫法 */}
     <p>陣列值1:{pNo1}</p>
     <p>陣列值1:{pNo2}</p>
     <p>陣列值1:{pNo3}</p>
 </>
  )
  }
  
export default App