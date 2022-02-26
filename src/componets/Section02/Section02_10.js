import React from 'react';

const Section02_10 = () => {
  return (
    <>
      opacity(非表示になる。マウスの判定などはそのまま)
      <div className='mb-16 flex justify-around'>
        <div className='flex-grow border-2 border-blue-300'>A</div>
        <div className='flex-grow border-2 border-blue-300 opacity-0'>B</div>
        <div className='flex-grow border-2 border-blue-300'>C</div>
      </div>
      invisible(非表示になる)
      <div className='mb-16 flex justify-around'>
        <div className='flex-grow border-2 border-blue-300'>A</div>
        <div className='flex-grow border-2 border-blue-300 invisible'>B</div>
        <div className='flex-grow border-2 border-blue-300'>C</div>
      </div>
      hidden(存在自体を消す)
      <div className='mb-16 flex justify-around'>
        <div className='flex-grow border-2 border-blue-300'>A</div>
        <div className='flex-grow border-2 border-blue-300 hidden'>B</div>
        <div className='flex-grow border-2 border-blue-300'>C</div>
      </div>
    </>
  );
};

export default Section02_10;
