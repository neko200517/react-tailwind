import React from 'react';

const longText = `
  ブロック要素ブロック要素ブロック要素ブロック要素ブロック要素ブロック要素
  ブロック要素ブロック要素ブロック要素ブロック要素ブロック要素ブロック要素
  ブロック要素ブロック要素ブロック要素ブロック要素ブロック要素ブロック要素
  ブロック要素ブロック要素ブロック要素ブロック要素ブロック要素ブロック要素
  `;

const Section01_04 = () => {
  return (
    <>
      {/* インライン要素には適用されない */}
      <span class='border border-red-500 w-4'>インライン要素</span>
      <div class='border border-red-500 w-16'>ブロック要素</div>

      {/* 幅の固定 */}
      <div class='border border-red-500 w-96'>インライン要素</div>

      {/* 幅の可変 */}
      <div class='border border-red-500 w-full'>{longText}</div>
      <div class='mt-16 border border-blue-500 w-1/2'>{longText}</div>

      {/* 幅のmax指定 */}
      <div class='border border-blue-500 max-w-2xl'>{longText}</div>

      <div className='mt-8 flex justify-around'>
        <div class='w-1/4 border border-blue-500'>左側</div>
        <div class='w-1/4 border border-blue-500'>右側</div>
        <div class='w-1/4 border border-blue-500'>左側</div>
        <div class='w-1/4 border border-blue-500'>右側</div>
      </div>
    </>
  );
};

export default Section01_04;
