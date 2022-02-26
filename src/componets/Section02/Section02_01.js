import React from 'react';

const Section02_01 = () => {
  return (
    <>
      <span className='block border border-red-400'>
        spanタグのようなインライン要素をブロック要素にかえる
      </span>
      <span>ブロックすると改行される</span>
      <span className='ml-2'>本来のインライン要素は横並びになる</span>
    </>
  );
};

export default Section02_01;
