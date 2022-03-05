import React from 'react';

const Section05_03 = () => {
  return (
    <>
      <a
        className='underline'
        href='https://fonts.google.com/'
        target='_blank'
        rel='noreferrer'
      >
        Google Fonts
      </a>
      <hr />
      フォントのテスト
      <div className='font-noto'>Noto Sans フォント</div>
      <div className='font-noto font-extralight'>
        Noto Sans フォント extralight
      </div>
      <div className='font-noto font-light'>Noto Sans フォント light</div>
      <div className='font-noto font-semibold'>Noto Sans フォント semibold</div>
      <div className='font-noto font-bold'>Noto Sans フォント bold</div>
    </>
  );
};

export default Section05_03;
