import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componets/App';

import Section01_01 from './componets/Section01/Section01_01';
import Section01_02 from './componets/Section01/Section01_02';
import Section01_03 from './componets/Section01/Section01_03';
import Section01_04 from './componets/Section01/Section01_04';
import Section01_05 from './componets/Section01/Section01_05';
import Section01_06 from './componets/Section01/Section01_06';
import Section01_07 from './componets/Section01/Section01_07';
import Section01_08 from './componets/Section01/Section01_08';
import Section01_09 from './componets/Section01/Section01_09';
import Section01_10 from './componets/Section01/Section01_10';
import Section01_11 from './componets/Section01/Section01_11';
import Section02_01 from './componets/Section02/Section02_01';
import Section02_02 from './componets/Section02/Section02_02';
import Section02_03 from './componets/Section02/Section02_03';
import Section02_04 from './componets/Section02/Section02_04';
import Section02_05 from './componets/Section02/Section02_05';
import Section02_06 from './componets/Section02/Section02_06';
import Section02_07 from './componets/Section02/Section02_07';
import Section02_08 from './componets/Section02/Section02_08';
import Section02_09 from './componets/Section02/Section02_09';
import Section02_10 from './componets/Section02/Section02_10';
import Section02_11 from './componets/Section02/Section02_11';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path='/section01_01' element={<Section01_01 />}></Route>
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
      <Route path='/section02_01' element={<Section02_01 />}></Route>
      <Route path='/section02_02' element={<Section02_02 />}></Route>
      <Route path='/section02_03' element={<Section02_03 />}></Route>
      <Route path='/section02_04' element={<Section02_04 />}></Route>
      <Route path='/section02_05' element={<Section02_05 />}></Route>
      <Route path='/section02_06' element={<Section02_06 />}></Route>
      <Route path='/section02_07' element={<Section02_07 />}></Route>
      <Route path='/section02_08' element={<Section02_08 />}></Route>
      <Route path='/section02_09' element={<Section02_09 />}></Route>
      <Route path='/section02_10' element={<Section02_10 />}></Route>
      <Route path='/section02_11' element={<Section02_11 />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
