import React from 'react';
import Sections from './Sections';

const list = [
  {
    title: '01 HTMLのおさらい',
    to: '/section01_01',
  },
  {
    title: '02 tailwindcss',
    to: '/section01_02',
  },
  {
    title: '03 ボックスモデル margin, padding',
    to: '/section01_03',
  },
  {
    title: '04 幅と高さ width, height',
    to: '/section01_04',
  },
  {
    title: '05 フォントとテキスト font, text',
    to: '/section01_05',
  },
  {
    title: '06 色 color',
    to: '/section01_06',
  },
  {
    title: '07 疑似要素 hover, focus',
    to: '/section01_07',
  },
  {
    title: '08 透明度 opacity',
    to: '/section01_08',
  },
  {
    title: '09 線 border, divide, round, ring',
    to: '/section01_09',
  },
  {
    title: '10 画像 img, background-image',
    to: '/section01_10',
  },
  {
    title: '11 影 shadow',
    to: '/section01_11',
  },
];

const props = {
  title: 'Section01',
  list: list,
};

const Section01 = () => {
  return <Sections title={props.title} list={props.list}></Sections>;
};

export default Section01;
