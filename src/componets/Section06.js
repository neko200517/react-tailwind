import React from 'react';
import { Link } from 'react-router-dom';

const list = [
  {
    title: '01 表示方法 display',
    to: '/section06_01',
  },
  {
    title: '02 Flexboxサンプル1 メニュー',
    to: '/section06_02',
  },
  {
    title: '03 Flexサンプル2 横並び・交互',
    to: '/section06_03',
  },
  {
    title: '04 Gridを試してみる',
    to: '/section06_04',
  },
  {
    title: '05 Gridサンプル フッター',
    to: '/section06_05',
  },
  {
    title: '06 レスポンシブ対応を試してみる',
    to: '/section06_06',
  },
  {
    title: '07 要素を重ねる、固定する position',
    to: '/section06_07',
  },
  {
    title: '08 要素を重ねる z-index',
    to: '/section06_08',
  },
  {
    title: '09 はみ出したときの調整 overflow',
    to: '/section06_09',
  },
  {
    title: '10 表示・非表示 visibility',
    to: '/section06_10',
  },
  {
    title: '11 コンテナ container',
    to: '/section06_11',
  },
];

const Section06 = () => {
  return (
    <ul className='border-2'>
      <h1 className='font-bold uppercase'>Section06</h1>
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

export default Section06;
