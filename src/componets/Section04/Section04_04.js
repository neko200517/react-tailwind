import React from 'react';

const Section04_04 = () => {
  return (
    <>
      <a
        className='underline'
        href='https://tailwindcss.com/docs/animation'
        target='_blank'
        rel='noreferrer'
      >
        Animation
      </a>
      <hr />
      <h1 className='my-4 text-center text-lg font-bold text-gray-600 uppercase'>
        pulse
      </h1>
      <div class='border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto'>
        <div class='animate-pulse flex space-x-4'>
          <div class='rounded-full bg-slate-200 h-10 w-10'></div>
          <div class='flex-1 space-y-6 py-1'>
            <div class='h-2 bg-slate-200 rounded'></div>
            <div class='space-y-3'>
              <div class='grid grid-cols-3 gap-4'>
                <div class='h-2 bg-slate-200 rounded col-span-2'></div>
                <div class='h-2 bg-slate-200 rounded col-span-1'></div>
              </div>
              <div class='h-2 bg-slate-200 rounded'></div>
            </div>
          </div>
        </div>
      </div>
      <h1 className='mt-8 mb-4 text-center text-lg font-bold text-gray-600 uppercase'>
        bounse
      </h1>
      <div className='flex justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='animate-bounce w-16 text-gray-400'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z'
          />
        </svg>
      </div>
      <h1 className='mt-8 mb-4 text-center text-lg font-bold text-gray-600 uppercase'>
        spin
      </h1>
      <div className='flex justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='animate-spin w-16 text-gray-400'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
          />
        </svg>
      </div>
    </>
  );
};

export default Section04_04;
