import React from 'react';
import Sections from './Sections';

const list = [
  {
    title: '01 色と透明度',
    to: '/section07_01',
  },
  {
    title: '02 Box Shadow Color',
    to: '/section07_02',
  },
  {
    title: '03 下線の装飾',
    to: '/section07_03',
  },
  {
    title: '04 任意の値 (width, height, margin, paddingなど)',
    to: '/section07_04',
  },
  {
    title: '05 アスペクト比(縦横比)',
    to: '/section07_05',
  },
  {
    title: '06 スクロール位置調整',
    to: '/section07_06',
  },
  {
    title: '07 印刷位置の指定',
    to: '/section07_07',
  },
];

const props = {
  title: 'Section07',
  list: list,
};

const Section07 = () => {
  return <Sections title={props.title} list={props.list}></Sections>;
};

export default Section07;
