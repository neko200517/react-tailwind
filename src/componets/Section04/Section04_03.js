import React from 'react';

const Section04_03 = () => {
  return (
    <>
      <a
        className='underline'
        href='https://tailwindcss.com/docs/scale'
        target='_blank'
        rel='noreferrer'
      >
        Transform
      </a>
      <hr />
      rotete
      <img
        class='transtion duration-1000 transform hover:rotate-45 w-60 mb-16'
        src='./pizza1.jpg'
        alt=''
      />
      scale
      <img
        class='transtion duration-1000 transform hover:scale-150 w-60 mb-16'
        src='./pizza1.jpg'
        alt=''
      />
      translate
      <img
        class='transtion duration-1000 transform hover:translate-x-40 w-60 mb-16'
        src='./pizza1.jpg'
        alt=''
      />
      skew
      <img
        class='transtion duration-1000 transform hover:skew-x-12 w-60 mb-16'
        src='./pizza1.jpg'
        alt=''
      />
      translate(ease-in)
      <img
        class='transtion duration-1000 transform ease-in hover:translate-x-40 w-60 mb-16'
        src='./pizza1.jpg'
        alt=''
      />
      translate(ease-out)
      <img
        class='transtion duration-1000 transform ease-out hover:translate-x-40 w-60 mb-16'
        src='./pizza1.jpg'
        alt=''
      />
    </>
  );
};

export default Section04_03;
