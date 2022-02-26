import React from 'react';

const Section01_02 = () => {
  return (
    <>
      {/* 文字、線、背景 */}
      <p className='text-blue-400'>文字の色</p>
      <div className='mt-8 border border-pink-500'>線の色</div>
      <div className='mt-8 bg-green-400'>背景の色</div>

      {/* 組み合わせて使う */}
      <button className='bg-indigo-600 text-white font-bold w-32 py-4'>
        ボタン
      </button>
    </>
  );
};

export default Section01_02;
