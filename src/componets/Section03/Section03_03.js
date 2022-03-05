import React from 'react';

const Section03_03 = () => {
  const getComponents = (styles) => {
    const result = styles.map((style, index) => (
      <div key={index} className={style}>
        aaa
      </div>
    ));
    return result;
  };

  const getComponents02 = () => {
    const styles = [
      'text-center border border-red-300 py-4 flex-grow md:w-3/12',
      'text-center border border-red-300 py-4 flex-grow md:w-6/12',
      'text-center border border-red-300 py-4 flex-grow md:w-3/12',
    ];
    return (
      <>
        <div className='text-center border border-red-300 py-4 flex-grow md:w-3/12'>
          A
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow md:w-6/12'>
          A
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow md:w-3/12'>
          A
        </div>
      </>
    );
  };

  return (
    <>
      スマートフォン→タブレット、PC <br />
      横3→横3
      <div className='flex justify-center mt-16'>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          aaa
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          aaa
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          aaa
        </div>
      </div>
      縦3→横3
      <div className='md:flex justify-center mt-16'>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          aaa
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          aaa
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          aaa
        </div>
      </div>
      縦3→横3 3/12, 6/12, 3/12
      <div className='md:flex justify-center mt-16'>
        <div className='text-center border border-red-300 py-4 flex-grow md:w-3/12'>
          aaa
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow md:w-6/12'>
          aaa
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow md:w-3/12'>
          aaa
        </div>
      </div>
      縦横2→横4
      <div className='flex justify-center flex-wrap mt-16'>
        <div className='text-center border border-red-300 py-4 w-1/2 md:w-1/4'>
          aaa
        </div>
        <div className='text-center border border-red-300 py-4 w-1/2 md:w-1/4'>
          aaa
        </div>
        <div className='text-center border border-red-300 py-4 w-1/2 md:w-1/4'>
          aaa
        </div>
        <div className='text-center border border-red-300 py-4 w-1/2 md:w-1/4'>
          aaa
        </div>
      </div>
      縦横2→横4 (grid)
      <div className='md:flex grid grid-cols-2 mt-16'>
        <div className='text-center border border-red-300 py-4 md:flex-grow'>
          aaa
        </div>
        <div className='text-center border border-red-300 py-4 md:flex-grow'>
          aaa
        </div>
        <div className='text-center border border-red-300 py-4 md:flex-grow'>
          aaa
        </div>
        <div className='text-center border border-red-300 py-4 md:flex-grow'>
          aaa
        </div>
      </div>
    </>
  );
};

export default Section03_03;
