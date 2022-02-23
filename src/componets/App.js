import React from 'react';
import { Link } from 'react-router-dom';

const list = [
  {
    title: '01 HTMLのおさらい',
    to: '/',
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

function App() {
  return (
    <div className='App'>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.to}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
