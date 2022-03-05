import React from 'react';

const Section07_05 = () => {
  return (
    <>
      <a
        className='underline'
        href='https://tailwindcss.com/docs/aspect-ratio'
        target='_blank'
        rel='noreferrer'
      >
        Aspect Ratio
      </a>
      <hr />
      <div className='mt-8 mx-w-4xl mx-auto'>
        <iframe
          className='aspect-video w-11/12 mx-auto'
          src='https://www.youtube.com/embed/00gyCtIQp8E'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default Section07_05;
