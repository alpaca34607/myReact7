import { useEffect } from 'react';
import $ from 'jquery';
export default function App() {
  useEffect(() => {
    //初始化
    // 移入 => mouseover()
    // 移出 => mouseout()
    // 移動 => mousemove()
    // x、y座標 => pageX、pageY
    // 取得HTML內容=html()
    // 淡入 => fadeIn()
    // 淡出=> fadeOut()
    // 速度 =>毫秒 => (slow, normal, fast)
    // 尋找指定的名稱 => has()
    // 新增html元素 => append()
    // 取得子元素 => children()

    $('a:has(.ttpShow)')
      .on('mouseover', function (e) {
        $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>'
        );
        $('#ttpPanel')
          .css({
            top: (e.pageY + 10) + 'px',
            left:( e.pageX + 10) + 'px',
          })
          .fadeIn('fast');
      })
      .on('mouseout', function () {
        $('#ttpPanel').remove();
      })
      .on('mousemove', function (e) {
        $('#ttpPanel').css({
          top: (e.pageY + 10 )+ 'px',
          left: (e.pageX + 10) + 'px',
        });
      });
  }, []);

  return (
    <>
      <h2>ToolTip顯示說明</h2>
      <p>
        Lorem ipsum dolor sit amet,
        <a href='#'>
          consectetur
          <span className='ttpShow'>consectetur內容說明...</span>
        </a>
        fugit cum in nisi recusandae omnis dicta ipsa esse explicabo. Eum
        voluptatum mollitia quasi debitis molestias beatae vel laudantium eos
        ullam possimus veritatis in
        <a href='#'>
          123456consectetur
          <span className='ttpShow'>
            <img
              src=''
              alt=''
              style={{
                width: '100px',
              }}
            />
          </span>
        </a>
        reiciendis perferendis dolorum, aliquid et soluta ducimus voluptas atque
        qui repellendus alias, accusamus quia sed? Quasi sapiente mollitia
        quaerat assumenda impedit. Ipsa eum aliquid architecto corporis
        aspernatur inventore ipsam illum deserunt doloribus ex accusantium, et
      </p>
    </>
  );
}
