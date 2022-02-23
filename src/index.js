import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componets/App';

import Section01_01 from './componets/Section01_01';
import Section01_02 from './componets/Section01_02';
import Section01_03 from './componets/Section01_03';
import Section01_04 from './componets/Section01_04';
import Section01_05 from './componets/Section01_05';
import Section01_06 from './componets/Section01_06';
import Section01_07 from './componets/Section01_07';
import Section01_08 from './componets/Section01_08';
import Section01_09 from './componets/Section01_09';
import Section01_10 from './componets/Section01_10';
import Section01_11 from './componets/Section01_11';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path='/' element={<Section01_01 />}></Route>
      <Route path='/section01_02' element={<Section01_02 />}></Route>
      <Route path='/section01_03' element={<Section01_03 />}></Route>
      <Route path='/section01_04' element={<Section01_04 />}></Route>
      <Route path='/section01_05' element={<Section01_05 />}></Route>
      <Route path='/section01_06' element={<Section01_06 />}></Route>
      <Route path='/section01_07' element={<Section01_07 />}></Route>
      <Route path='/section01_08' element={<Section01_08 />}></Route>
      <Route path='/section01_09' element={<Section01_09 />}></Route>
      <Route path='/section01_10' element={<Section01_10 />}></Route>
      <Route path='/section01_11' element={<Section01_11 />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
