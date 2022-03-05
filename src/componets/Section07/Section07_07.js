import React from 'react';

const Section07_07 = () => {
  return (
    <>
      <a
        className='underline'
        href='https://tailwindcss.com/docs/hover-focus-and-other-states#print-styles'
        target='_blank'
        rel='noreferrer'
      >
        Print Styles
      </a>
      <hr />
      <div className='print:hidden'>印刷対象外</div>
      <div className='hidden print:block'>印刷時だけ表示</div>
      <div>印刷対象</div>
    </>
  );
};

export default Section07_07;
