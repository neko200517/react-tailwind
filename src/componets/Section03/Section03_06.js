import React from 'react';

const Section03_06 = () => {
  const getInputForm = (label, id, placeholder = '') => {
    return (
      <div className='mb-8'>
        <label htmlFor={id} className='text-sm block'>
          {label}
        </label>
        <input
          type='text'
          id={id}
          className='border-b w-full py-2 focus:outline-none focus:border-b-2 focus:border-blue-500 placeholder-gray-500 placeholder-opacity-50'
          placeholder={placeholder}
        />
      </div>
    );
  };

  const getForms = () => {
    return (
      <div className='w-10/12 mx-auto md:max-w-md'>
        <form>
          {getInputForm('お名前', 'your_name', '山田　太郎')}
          {getInputForm('メールアドレス', 'email', 'test@example.com')}
          <button className='bg-blue-500 text-white font-semibold py-2 px-8 rounded-md mr-1 focus:outline-none'>
            登録する
          </button>
        </form>
      </div>
    );
  };

  return (
    <>
      <div className='md:flex justify-center'>
        <div className='text-center py-4 md:w-1/2'>
          フォームに必要事項を入力してください。
        </div>
        <div className='py-4 md:w-1/2'>{getForms()}</div>
      </div>
    </>
  );
};

export default Section03_06;
