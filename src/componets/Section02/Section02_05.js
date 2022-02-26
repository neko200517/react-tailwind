import React from 'react';

const Section02_05 = () => {
  return (
    <>
      <footer className='bg-gray-200'>
        <div className='p-8 grid grid-cols-4 gap-8'>
          <div>
            <p className='mb-8'>ロゴ</p>
            <address>〒123-456 東京都 豊島区 ○○</address>
          </div>
          <div>
            <div className='mb-8'>最新の記事</div>
            <ul>
              <li>記事1</li>
              <li>記事2</li>
              <li>記事3</li>
            </ul>
          </div>
          <div>
            <div className='mb-8'>カテゴリ</div>
            <ul>
              <li>カテゴリ1</li>
              <li>カテゴリ2</li>
              <li>カテゴリ3</li>
            </ul>
          </div>
          <div>
            <div className='mb-8'>人気の記事</div>
            <ul>
              <li>人気の記事1</li>
              <li>人気の記事2</li>
              <li>人気の記事3</li>
            </ul>
          </div>
          <div className='col-span-4 justify-self-center'>
            Copyright all rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Section02_05;
