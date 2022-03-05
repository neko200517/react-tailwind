import React from 'react';

const Section07_02 = () => {
  return (
    <>
      <a
        className='underline'
        href='https://tailwindcss.com/docs/box-shadow-color'
        target='_blank'
        rel='noreferrer'
      >
        Box Shadow Color
      </a>
      <hr />
      <div className='flex justify-around mt-8'>
        <button class='bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white py-2 px-4 rounded-lg hover:bg-cyan-600'>
          Subscribe
        </button>
        <button class='bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-2 px-4 rounded-lg hover:bg-blue-600'>
          Subscribe
        </button>
        <button class='bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white py-2 px-4 rounded-lg hover:bg-indigo-600'>
          Subscribe
        </button>
      </div>
    </>
  );
};

export default Section07_02;
