import React from 'react';

const Section07_01 = () => {
  return (
    <>
      <a
        className='underline'
        href='https://tailwindcss.com/docs/customizing-colors'
        target='_blank'
        rel='noreferrer'
      >
        Costomizing-colors
      </a>
      <hr />
      <div className='text-cyan-300'>text-cyan-300 : シアン</div>
      <div className='bg-lime-500'>bg-lime-500 : ライム</div>
      <div className='bg-lime-500/80'>bg-lime-500/80 : 透明度</div>
    </>
  );
};

export default Section07_01;
