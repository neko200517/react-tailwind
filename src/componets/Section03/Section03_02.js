import React from 'react';

const Section03_02 = () => {
  return (
    <>
      スマートフォン→タブレット、PC <br />
      横2→横2
      <div className='flex justify-center mt-16'>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          aaa
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          aaa
        </div>
      </div>
      縦2→横2
      <div className='md:flex justify-center mt-16'>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          aaa
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          aaa
        </div>
      </div>
      縦2→横2 幅 5/12, 7/12
      <div className='md:flex justify-center mt-16'>
        <div className='text-center border border-red-300 py-4 flex-grow md:w-5/12'>
          aaa
        </div>
        <div className='text-center border border-red-300 py-4 flex-grow md:w-7/12'>
          aaa
        </div>
      </div>
      縦2→横2(逆順)
      <div className='md:flex justify-center mt-16 flex-row-reverse'>
        <div className='text-center border border-red-300 py-4 flex-grow'>
          aaa
        </div>
        <div className='text-center border border-blue-300 py-4 flex-grow'>
          bbb
        </div>
      </div>
    </>
  );
};

export default Section03_02;
