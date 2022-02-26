import React from 'react';

const Section02_02 = () => {
  return (
    <>
      {/* メニュー */}
      <header className='flex justify-between border shadow-lg p-2'>
        <h1 className='pl-8'>ロゴ</h1>
        <nav>
          <ul className='flex justify-end space-x-16 pr-8'>
            <li>Home</li>
            <li>Information</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      {/* mdで一定のサイズ以下はflexが無効になる */}
      <header className='md:flex justify-between mt-16 border shadow-lg p-2'>
        <h1 className='pl-8'>ロゴ</h1>
        <nav>
          <ul className='md:flex justify-end md:space-x-16 pr-8'>
            <li>Home</li>
            <li>Information</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Section02_02;
