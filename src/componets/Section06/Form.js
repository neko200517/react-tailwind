import React from 'react';

const Form = () => {
  return (
    <>
      <section className='text-gray-600 body-font relative'>
        <div className='container px-5 py-4 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              フォーム
            </h1>
          </div>
          <div className='lg:w-1/2 md:w-2/3 mx-auto'>
            <div className='-m-2'>
              <div className='p-2 md:w-1/2 mx-auto'>
                <div className='relative'>
                  <label
                    htmlFor='name'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 md:w-1/2 mx-auto'>
                <div className='relative'>
                  <label
                    htmlFor='email'
                    className='leading-7 text-sm text-gray-600'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>

              <div className='flex justify-around p-2 mt-8 w-full'>
                <button className='flex mx-auto  bg-gray-200 border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-lg'>
                  戻る
                </button>
                <button className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                  登録する
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
