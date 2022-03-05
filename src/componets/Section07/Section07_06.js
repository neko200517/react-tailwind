import React from 'react';
import { Link as Scroll } from 'react-scroll';

const Section07_06 = () => {
  const duration = 300;
  return (
    <>
      <a
        className='underline'
        href='https://tailwindcss.com/docs/scroll-behavior'
        target='_blank'
        rel='noreferrer'
      >
        Scroll Behaivor
      </a>
      <hr />
      <div className='mt-8'>
        <Scroll to='scroll1' smooth={true} duration={duration} className='btn'>
          scroll1
        </Scroll>
        <Scroll to='scroll2' smooth={true} duration={duration} className='btn'>
          scroll2
        </Scroll>
        <Scroll to='scroll3' smooth={true} duration={duration} className='btn'>
          scroll3
        </Scroll>
      </div>

      <section id='scroll1' className='my-[80rem]'>
        <h3 className='text-2xl text-bold uppercase mx-1 py-2 px-4 bg-cyan-500 text-white rounded-lg shadow-lg shadow-cyan-200/80'>
          Index 1
        </h3>
      </section>
      <section id='scroll2' className='my-[80rem]'>
        <h3 className='text-2xl text-bold uppercase mx-1 py-2 px-4 bg-pink-500 text-white rounded-lg shadow-lg shadow-pink-200/80'>
          Index 2
        </h3>
      </section>
      <section id='scroll3' className='my-[80rem]'>
        <h3 className='text-2xl text-bold uppercase mx-1 py-2 px-4 bg-indigo-500 text-white rounded-lg shadow-lg shadow-indigo-200/80'>
          Index 3
        </h3>
      </section>
    </>
  );
};

export default Section07_06;
