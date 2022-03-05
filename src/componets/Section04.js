import React from 'react';
import Sections from './Sections';

const list = [
  {
    title: '01 グラデーション',
    to: '/section04_01',
  },
  {
    title: '02 トランジション(時間的変化)',
    to: '/section04_02',
  },
  {
    title: '03 トランスフォーム(変形)',
    to: '/section04_03',
  },
  {
    title: '04 アニメーション',
    to: '/section04_04',
  },
];

const props = {
  title: 'Section04',
  list: list,
};

const Section04 = () => {
  return <Sections title={props.title} list={props.list}></Sections>;
};

export default Section04;
