import React from 'react';

const Section02_04 = () => {
  return (
    <>
      <div className='grid grid-cols-4'>
        <div className='border-2'>1</div>
        <div className='border-2 col-span-2 bg-red-100'>2</div>
        <div className='border-2 col-start-1 col-span-2 bg-blue-100'>3</div>
        <div className='border-2'>4</div>
        <div className='border-2 h-16'>5</div>
        <div className='border-2'>6</div>
        <div className='border-2'>7</div>
        <div className='border-2'>8</div>
        <div className='border-2'>9</div>
        <div className='border-2'>10</div>
      </div>

      <div className='grid grid-rows-3 grid-flow-col mt-16'>
        <div className='border-2'>1</div>
        <div className='border-2'>2</div>
        <div className='border-2'>3</div>
        <div className='border-2'>4</div>
        <div className='border-2'>5</div>
        <div className='border-2'>6</div>
        <div className='border-2'>7</div>
        <div className='border-2'>8</div>
      </div>
    </>
  );
};

export default Section02_04;
