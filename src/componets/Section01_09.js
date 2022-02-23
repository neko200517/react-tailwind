import React from 'react';

const Section01_09 = () => {
  return (
    <>
      {/* 線 */}
      <div className='border-2 border-red-400'>先の太さ</div>

      {/* 区切り線 */}
      <div className='mt-8 flex justify-around divide-x divide-green-500'>
        <div className='flex-grow text-center'>区切り線</div>
        <div className='flex-grow text-center'>区切り線</div>
        <div className='flex-grow text-center'>区切り線</div>
      </div>

      {/* 線を丸める */}
      <div className='mt-8 rounded-full w-24 bg-indigo-500 text-white text-center py-2'>
        rounded
      </div>
      <div className='mt-8 rounded-full w-24 bg-indigo-500 text-white text-center py-9'>
        rounded
      </div>

      {/* ring */}
      <div className='mt-8 rounded-full w-24 bg-indigo-500 text-white text-center py-9 ring-4 ring-indigo-600'>
        ring
      </div>

      {/* ring-offset */}
      <div className='mt-8 rounded-full w-24 bg-indigo-500 text-white text-center py-9 ring-4 ring-indigo-600 ring-offset-4 ring-offset-blue-300'>
        ring-offset
      </div>
    </>
  );
};

export default Section01_09;
