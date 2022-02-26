import React from 'react';
import { Link } from 'react-router-dom';

const list = [
  {
    title: '01 表示方法 display',
    to: '/section02_01',
  },
  {
    title: '02 Flexboxサンプル1 メニュー',
    to: '/section02_02',
  },
  {
    title: '03 Flexサンプル2 横並び・交互',
    to: '/section02_03',
  },
  {
    title: '04 Gridを試してみる',
    to: '/section02_04',
  },
  {
    title: '05 Gridサンプル フッター',
    to: '/section02_05',
  },
  {
    title: '06 レスポンシブ対応を試してみる',
    to: '/section02_06',
  },
  {
    title: '07 要素を重ねる、固定する position',
    to: '/section02_07',
  },
  {
    title: '08 要素を重ねる z-index',
    to: '/section02_08',
  },
  {
    title: '09 はみ出したときの調整 overflow',
    to: '/section02_09',
  },
  {
    title: '10 表示・非表示 visibility',
    to: '/section02_10',
  },
  {
    title: '11 コンテナ container',
    to: '/section02_11',
  },
];

const Section02 = () => {
  return (
    <ul className='border-2'>
      <h1 className='font-bold uppercase'>Section02</h1>
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

export default Section02;
