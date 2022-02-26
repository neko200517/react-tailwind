import React from 'react';
import { Link } from 'react-router-dom';

const list = [
  {
    title: '01 表示方法 display',
    to: '/section05_01',
  },
  {
    title: '02 Flexboxサンプル1 メニュー',
    to: '/section05_02',
  },
  {
    title: '03 Flexサンプル2 横並び・交互',
    to: '/section05_03',
  },
  {
    title: '04 Gridを試してみる',
    to: '/section05_04',
  },
  {
    title: '05 Gridサンプル フッター',
    to: '/section05_05',
  },
  {
    title: '06 レスポンシブ対応を試してみる',
    to: '/section05_06',
  },
  {
    title: '07 要素を重ねる、固定する position',
    to: '/section05_07',
  },
  {
    title: '08 要素を重ねる z-index',
    to: '/section05_08',
  },
  {
    title: '09 はみ出したときの調整 overflow',
    to: '/section05_09',
  },
  {
    title: '10 表示・非表示 visibility',
    to: '/section05_10',
  },
  {
    title: '11 コンテナ container',
    to: '/section05_11',
  },
];

const Section05 = () => {
  return (
    <ul className='border-2'>
      <h1 className='font-bold uppercase'>Section05</h1>
      {list.map((item, index) => {
        return (
          <>
            <li
              key={index}
              className='text-blue-700 border-b-2 hover:underline'
            >
              <Link to={item.to}>{item.title}</Link>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default Section05;
