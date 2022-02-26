import React from 'react';

const Section01_07 = () => {
  return (
    <>
      {/* マウスを重ねる */}
      <button className='bg-indigo-600 hover:bg-indigo-500 text-white font-bold w-32 py-4'>
        ボタン
      </button>

      {/* フォーカスを当てる */}
      <input
        type='text'
        className='border-2 p-2 ml-2 focus:outline-none focus:border-red-500'
      />
    </>
  );
};

export default Section01_07;
