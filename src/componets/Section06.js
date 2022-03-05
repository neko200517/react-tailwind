import React from 'react';
import Sections from './Sections';

const list = [
  {
    title: 'Webフォームサンプル',
    to: '/section06',
  },
];

const props = {
  title: 'Section06',
  list: list,
};

const Section06 = () => {
  return <Sections title={props.title} list={props.list}></Sections>;
};

export default Section06;
