import React from 'react';

const Section01_05 = () => {
  return (
    <>
      {/* p, h1～h6, span */}
      <p className='text-base'>テキストサイズ base</p>
      <p className='text-2xl'>テキストサイズ 2xl</p>

      {/* 文字間の幅（横） */}
      <p className='mt-16 tracking-widest'>
        文字の間に幅が空きます。(横)
        <br />
        文字の間に幅が空きます。(横)
        <br />
        文字の間に幅が空きます。(横)
        <br />
      </p>

      {/* 文字間の幅（縦） */}
      <p className='mt-16 leading-10'>
        文字の間に幅が空きます。(縦)
        <br />
        文字の間に幅が空きます。(縦)
        <br />
        文字の間に幅が空きます。(縦)
        <br />
      </p>

      {/* 文字の位置 */}
      <div className='text-center'>ブロック要素内のテキストを中央揃え</div>
    </>
  );
};

export default Section01_05;
