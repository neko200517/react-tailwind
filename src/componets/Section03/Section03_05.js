import React from 'react';

const Section03_05 = () => {
  const getCard = () => {
    return (
      <>
        <div className='w-11/12 md:max-w-md mx-auto my-4 shadow-xl rounded-lg overflow-hidden'>
          <img className='h-48 w-full object-cover' src='./pizza1.jpg' alt='' />
          <div className='p-4'>
            <div className='text-sm text-gray-500'>ナポリピザの定番</div>
            <div className='text-2xl text-bold text-gray-700 mb-2'>
              マルゲリータ
            </div>
            <ul className='text-sm text-gray-500'>
              <li class='inline-block mr-1'>・フレッシュモッツァレラ</li>
              <li class='inline-block mr-1'>・グラナパダーノ</li>
              <li class='inline-block mr-1'>・バジル</li>
              <li class='inline-block mr-1'>・トマトソース</li>
            </ul>
            <div className='my-4 text-center'>
              M
              <span className='text-xl text-gray-700 text-semibold'>980円</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className='md:flex justify-center mt-16'>
        <div className='py-4'>{getCard()}</div>
        <div className='py-4'>{getCard()}</div>
        <div className='py-4'>{getCard()}</div>
      </div>
    </>
  );
};

export default Section03_05;
