import React from 'react';

const Section01_08 = () => {
  return (
    <>
      {/* 文字、線、背景 */}
      <p className='text-blue-400'>文字の色</p>
      <div className='mt-8 border border-pink-500'>線の色</div>
      <div className='mt-8 bg-green-400'>背景の色</div>

      {/* 透明度 */}
      <p className='text-blue-400 text-opacity-50 hover:text-opacity-100'>
        文字の色
      </p>
      <div className='mt-8 border border-pink-500 border-opacity-50 hover:border-opacity-100'>
        線の色
      </div>
      <div className='mt-8 bg-green-400 bg-opacity-50 hover:bg-opacity-100'>
        背景の色
      </div>
    </>
  );
};

export default Section01_08;
