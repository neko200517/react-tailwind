import React from 'react';

const Section05_01 = () => {
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
      <br />
      tailwind.config.js
      <div class='border border-sky-300 shadow rounded-md p-4 max-w-sm w-full mx-auto'>
        <div class='animate-pulse flex space-x-4'>
          <div class='rounded-full bg-sky-200 h-10 w-10'></div>
          <div class='flex-1 space-y-6 py-1'>
            <div class='h-2 bg-sky-200 rounded'></div>
            <div class='space-y-3'>
              <div class='grid grid-cols-3 gap-4'>
                <div class='h-2 bg-sky-200 rounded col-span-2'></div>
                <div class='h-2 bg-sky-200 rounded col-span-1'></div>
              </div>
              <div class='h-2 bg-sky-200 rounded'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section05_01;
