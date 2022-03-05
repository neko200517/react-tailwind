import React from 'react';
import Sections from './Sections';

const list = [
  {
    title: '01 アイコン SVG Heroicons',
    to: '/section03_01',
  },
  {
    title: '02 Flexbox + レスポンシブ その1',
    to: '/section03_02',
  },
  {
    title: '03 Flexbox + レスポンシブ その2',
    to: '/section03_03',
  },
  {
    title: '04 ボタン(優先度をつける)',
    to: '/section03_04',
  },
  {
    title: '05 カード',
    to: '/section03_05',
  },
  {
    title: '06 フォーム',
    to: '/section03_06',
  },
  {
    title: '07 サンプル集',
    to: '/section03_07',
  },
];

const props = {
  title: 'Section03',
  list: list,
};

const Section03 = () => {
  return <Sections title={props.title} list={props.list}></Sections>;
};

export default Section03;
