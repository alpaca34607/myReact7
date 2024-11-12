
function Component(){
  return  <h1>Hello,React</h1>
}

function App(){
  // 建立陣列(可以是任何形式資料 => 元件)
  // 同一個陣列中，key屬性的值不可重覆
const listItem = [
 <Component key="0"/>,
 <Component key="1"/>,
 <Component key="2"/>,
]
const listBook = [
  {bookName:'HTML', id:'book1'},
  {bookName:'CSS', id:'book2'},
  {bookName:'Javascript', id:'book3'},
]

// 過濾出陣列中，除了CSS的書本
const filterBooks = listBook.filter((book)=>{
  //   if(book.bookName !== 'CSS'){
  //     return true
  //   }else{
  //     return false
  //   }
  // 三元運算子的判斷式(只能用在單層判斷不能超過2個運算式)
  // 判斷式?條件成立:條件不成立
  return book.bookName !== 'CSS' ? true :false
  })
  return (
    <> 
    {/* 使用陣列方法1 */}
    {listItem}
<hr />
{/* 使用陣列方法2 => map() => 此方法可以把一個陣列轉換成另一個陣列 */}
{
    listBook.map((book) => {
      return <div key={book.id}>{book.bookName}</div>

    })
  }
  <hr />
  {/* 使用filter()r過濾陣列資料 */}
  {
    filterBooks.map((book) =>{
      return <div key={book.id}>{book.bookName}</div>
    })
  }
  </>
  )
}

export default App
