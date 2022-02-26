import React from 'react';

const Section01_03 = () => {
  return (
    <>
      {/* インライン要素 */}
      {/* m-4 1rem 1文字分 */}
      <span className='border border-red-500 m-8'>spanタグです。</span>
      <span className='border border-red-500 p-12'>インライン要素です。</span>

      {/* ブロック要素 */}
      <p className='border border-blue-500 mt-16'>
        パラグラフの略で文章のひとまとりのことです。
      </p>
      <p className='border border-blue-500 m-8 p-8'>
        パラグラフの略で文章のひとまとりのことです。
      </p>
      <p className='border border-blue-500 mx-16'>
        パラグラフの略で文章のひとまとりのことです。
      </p>

      {/* ブロック要素の中にインライン要素 */}
      <p className='border border-green-500 mt-16'>
        pはパラグラフの略です。
        <span className='border border-green-500 m-8'>
          pはパラグラフの略です。
        </span>
        <span className='border border-green-500 p-12'>
          pはパラグラフの略です。
        </span>
      </p>

      {/* ブロック要素の中にブロック要素 */}
      {/* ブロック要素を横に並べる Flexbox, Grid */}
      <div className='border border-pink-500 mt-20 flex justify-around'>
        親ブロック
        <div className='border border-pink-500'>小ブロック1</div>
        <div className='border border-pink-500 m-12'>小ブロック2</div>
      </div>
    </>
  );
};

export default Section01_03;
