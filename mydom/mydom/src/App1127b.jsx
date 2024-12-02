import { useEffect } from "react";

function App() {
  useEffect(() => {
    const p1 = document.getElementById('p1');
    
    // 添加 mouseover 事件監聽器
    p1.addEventListener('mouseover', () => {
      p1.style.color = "blue";
      p1.style.fontWeight = "bold";
    });

    // 添加 mouseout 事件監聽器
    p1.addEventListener('mouseout', () => {
      p1.style.color = "";
      p1.style.fontWeight = "";
    });

    const p2 = document.getElementById('p2');
    p2.addEventListener('mouseover', () => {
      p2.textContent = "內容被改了";
    });

    p2.addEventListener('mouseout', () => {
      p2.textContent = "變內容";
    });

    const h1 = document.getElementById('h1');
    h1.addEventListener('click', (e) => {
      console.log(e.target.textContent);
      if (isClick === false) {
        e.target.textContent = "click事件被觸發了";
        e.target.style.color = "blue";
        isClick = true;
      } else {
        e.target.textContent = "滑鼠事件";
        e.target.style.color = "";
        isClick = false;
      }
    });

    // 清理事件監聽器，防止內存洩漏
    return () => {
      p1.removeEventListener('mouseover', () => {});
      p1.removeEventListener('mouseout', () => {});
      p2.removeEventListener('mouseover', () => {});
      p2.removeEventListener('mouseout', () => {});
      h1.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <>
      <h1 id="h1">滑鼠事件</h1>
      <hr />
      <p id="p1">變色</p>
      <p id="p2">變內容</p>
    </>
  );
}

export default App;
