import React from 'react';

const Section03_04 = () => {
  return (
    <>
      <button className='bg-blue-500 text-white font-semibold py-2 px-8 rounded-md mr-1'>
        1番
      </button>
      <button className='text-blue-500 border border-blue-500 font-semibold py-2 px-8 rounded-md'>
        2番
      </button>
      <button className='text-blue-500 underline font-semibold py-2 px-8'>
        3番
      </button>
      <div className='mb-16'></div>
      <button className='bg-red-500 text-white font-semibold py-2 px-8 rounded-md mr-1'>
        1番
      </button>
      <button className='text-red-500 border border-red-500 font-semibold py-2 px-8 rounded-md'>
        2番
      </button>
      <button className='text-gray-500 font-semibold py-2 px-8'>3番</button>
      <div className='mb-16'></div>
      レスポンシブ対応：固定、可変
      <br />
      <button className='w-40 md:w-80 bg-blue-500 text-white font-semibold py-2 px-8 rounded-md'>
        1番
      </button>
      <div className='mb-8'></div>
      <button className='w-1/2 max-w-md bg-blue-500 border text-white font-semibold py-2 px-8 rounded-md'>
        2番
      </button>
      <div className='mb-16'></div>
      <div className='md:flex justify-center mt-16'>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          <button className='w-1/2 bg-blue-500 text-white font-semibold py-2 px-8 rounded-md mr-1'>
            1番
          </button>
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          <button className='w-1/2 text-blue-500 border border-blue-500 font-semibold py-2 px-8 rounded-md'>
            2番
          </button>
        </div>
      </div>
    </>
  );
};

export default Section03_04;
