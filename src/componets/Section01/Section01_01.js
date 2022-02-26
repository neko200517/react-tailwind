import React from 'react';

const Section01_01 = () => {
  return (
    <>
      {/* ブロック要素 */}
      <h1>Section01</h1>
      <p>aaaa</p>
      <p>iii</p>
      <p>uuu</p>

      {/* インライン要素 */}
      <span>aaa</span>
      <span>iii</span>
      <span>uuu</span>

      {/* html4 */}
      <div id='header'></div>
      <div id='main'></div>
      <div id='footer'></div>

      {/* html5 */}
      <header className='hader-content'></header>
      <main></main>
      <footer></footer>
    </>
  );
};

export default Section01_01;
