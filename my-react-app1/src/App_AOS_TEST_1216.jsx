import { useEffect } from "react";

// https://machalsnik.github.io/aos/

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init();
    //初始化
  }, []);

  return (
    <>
      <h1 data-aos="fade-up-left" >AOS測試</h1>
      <div data-aos="fade-up" className="box">
        <p data-aos="fade-left" >aos測試用</p>
      </div>
    </>
  );
}
