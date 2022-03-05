import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  const onToggleButton = () => {
    const collapse = document.querySelector('#navbar-collapse');
    collapse.classList.toggle('hidden');
    collapse.classList.toggle('flex');
  };

  const disableButtonClassName =
    'p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300';

  return (
    <>
      <nav className='bg-white py-2 md:py-4'>
        <div className='container px-4 mx-auto md:flex md:items-center'>
          <div className='flex justify-between items-center'>
            <a href='index.html' className='font-bold text-xl text-indigo-600'>
              TailWindCssTest
            </a>
            <button
              onClick={onToggleButton}
              className='md:hidden border border-solid border-gray-500 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>

          <div
            id='navbar-collapse'
            className='hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0'
          >
            <Link
              to='./home'
              className='p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600'
            >
              Home
            </Link>

            <Link to='./table' className={disableButtonClassName}>
              テーブル
            </Link>

            <Link to='./form' className={disableButtonClassName}>
              フォーム
            </Link>

            <Link to='./item_index' className={disableButtonClassName}>
              商品一覧
            </Link>

            <Link to='./item_detail' className={disableButtonClassName}>
              商品詳細
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
