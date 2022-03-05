import React from 'react';
import Sections from './Sections';

const list = [
  {
    title: '01 色の追加(カラーパレット)',
    to: '/section05_01',
  },
  {
    title: '02 色の追加(オリジナル)',
    to: '/section05_02',
  },
  {
    title: '03 フォントのカスタマイズ',
    to: '/section05_03',
  },
  {
    title: '04 @apply',
    to: '/section05_04',
  },
  {
    title: '05 @layer',
    to: '/section05_05',
  },
];

const props = {
  title: 'Section05',
  list: list,
};

const Section05 = () => {
  return <Sections title={props.title} list={props.list}></Sections>;
};

export default Section05;
