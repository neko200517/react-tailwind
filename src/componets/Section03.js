import React from 'react';
import { Link } from 'react-router-dom';

const list = [
  {
    title: '01 表示方法 display',
    to: '/section03_01',
  },
  {
    title: '02 Flexboxサンプル1 メニュー',
    to: '/section03_02',
  },
  {
    title: '03 Flexサンプル2 横並び・交互',
    to: '/section03_03',
  },
  {
    title: '04 Gridを試してみる',
    to: '/section03_04',
  },
  {
    title: '05 Gridサンプル フッター',
    to: '/section03_05',
  },
  {
    title: '06 レスポンシブ対応を試してみる',
    to: '/section03_06',
  },
  {
    title: '07 要素を重ねる、固定する position',
    to: '/section03_07',
  },
  {
    title: '08 要素を重ねる z-index',
    to: '/section03_08',
  },
  {
    title: '09 はみ出したときの調整 overflow',
    to: '/section03_09',
  },
  {
    title: '10 表示・非表示 visibility',
    to: '/section03_10',
  },
  {
    title: '11 コンテナ container',
    to: '/section03_11',
  },
];

const Section03 = () => {
  return (
    <ul className='border-2'>
      <h1 className='font-bold uppercase'>Section03</h1>
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

export default Section03;
