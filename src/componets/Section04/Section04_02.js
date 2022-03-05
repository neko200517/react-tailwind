import React from 'react';

const Section04_02 = () => {
  return (
    <>
      <a
        className='underline'
        href='https://tailwindcss.com/docs/transition-property'
        target='_blank'
        rel='noreferrer'
      >
        Transitions
      </a>
      <div className='mb-16'>
        <button className='transition duration-1000 hover:bg-blue-300 bg-blue-500 text-white font-semibold py-2 px-8 rounded-md mr-1'>
          durationあり
        </button>
        <button className='hover:bg-blue-300 bg-blue-500 text-white font-semibold py-2 px-8 rounded-md mr-1'>
          durationなし
        </button>
      </div>
      <div className='mb-16'>
        <button className='ease-in transition duration-1000 hover:bg-blue-300 bg-blue-500 text-white font-semibold py-2 px-8 rounded-md mr-1'>
          ease-in(ゆっくり開始)
        </button>
        <button className='ease-out transition duration-1000 hover:bg-blue-300 bg-blue-500 text-white font-semibold py-2 px-8 rounded-md mr-1'>
          ease-out(ゆっくり終了)
        </button>
      </div>
      <div className='mb-16'>
        <button className='delay-1000 hover:bg-blue-300 bg-blue-500 text-white font-semibold py-2 px-8 rounded-md mr-1'>
          delayあり
        </button>
        <button className='hover:bg-blue-300 bg-blue-500 text-white font-semibold py-2 px-8 rounded-md mr-1'>
          delayなし
        </button>
      </div>
    </>
  );
};

export default Section04_02;
