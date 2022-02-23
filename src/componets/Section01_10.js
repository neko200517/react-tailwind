import React from 'react';
import '../css/style-img.css';

const Section01_10 = () => {
  return (
    <>
      background-image
      <div className='mb-16 h-24 w-40 bg-image'></div>
      background-image bg-contain
      <div className='mb-16 h-96 w-96 bg-contain bg-center bg-no-repeat bg-image'></div>
      imgタグ 幅指定
      <img className='mb-16 w-96' src='./img1.jpg' alt='img1.jpg' />
      imgタグ 幅と高さ指定
      <img className='mb-16 w-96 h-24' src='./img1.jpg' alt='img1.jpg' />
      imgタグ 幅と高さ objct-colver指定
      <img
        className='mb-16 w-96 h-24 object-cover'
        src='./img1.jpg'
        alt='img1.jpg'
      />
    </>
  );
};

export default Section01_10;
