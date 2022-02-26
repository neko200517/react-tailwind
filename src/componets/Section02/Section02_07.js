import React from 'react';

const Section02_07 = () => {
  return (
    <>
      <div>
        <img className='w-96' src='./img1.jpg' alt='img1.jpg' />
        <span>文字を重ねたい</span>
      </div>

      <div className='mt-16 relative'>
        <img className='w-96 absolute' src='./img1.jpg' alt='img1.jpg' />
        <span className='absolute top-16 left-16'>文字を重ねたい</span>
      </div>

      <div className='mt-96 relative w-96 h-60 bg-red-400'>
        <div className='absolute w-40 h-40 top-8 left-8 bg-blue-300'></div>
        <div className='absolute w-40 h-40 top-16 left-16 bg-blue-500'></div>
      </div>

      <div
        className='
          fixed
          bottom-8
          right-8
          border
          p-4
          w-32
          rounded-lg
          text-center
          shadow-lg
          text-white
          bg-slate-500
          hover:bg-slate-400
          hover:underline'
      >
        BACK
      </div>

      {/* sticky */}
      <div className='sticky top-0 p-2 bg-green-300'>Stickyヘッダー</div>

      <div className='h-96'>あああ</div>
      <div className='h-96'>あああ</div>
      <div className='h-96'>あああ</div>
    </>
  );
};

export default Section02_07;
