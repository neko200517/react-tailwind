import React from 'react';

const Section02_03 = () => {
  return (
    <>
      {/* 横並び */}
      <section className='mt-16'>
        <h2 className='text-center mb-8'>横並びのサンプル</h2>
        <div className='flex justify-center space-x-16'>
          <div className='w-1/4 border text-center'>
            <h3 className='p-2'>タイトル</h3>
            <p className='p-4'>
              ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。
            </p>
          </div>
          <div className='w-1/4 border text-center'>
            <h3 className='p-2'>タイトル</h3>
            <p className='p-4'>
              ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。
            </p>
          </div>
          <div className='w-1/4 border text-center'>
            <h3 className='p-2'>タイトル</h3>
            <p className='p-4'>
              ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。
            </p>
          </div>
        </div>
      </section>

      {/* 画像と文字を左右を入れ替えて表示 */}
      <section className='mt-16'>
        <h2 className='text-center mb-8'>入れ替えテスト</h2>
        <div class='flex items-center'>
          <div class='w-1/2 p-16'>
            ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。
          </div>
          <img src='img1.jpg' width='50%' />
        </div>
        <div class='flex items-center flex-row-reverse'>
          <div class='w-1/2 p-16'>
            ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。
          </div>
          <img src='img1.jpg' width='50%' />
        </div>
        <div class='flex items-center'>
          <div class='w-1/2 p-16'>
            ここに文章が入ります。ここに文章が入ります。ここに文章が入ります。
          </div>
          <img src='img1.jpg' width='50%' />
        </div>
      </section>
    </>
  );
};

export default Section02_03;
