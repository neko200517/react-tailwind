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
import Section03_01 from './componets/Section03/Section03_01';
import Section03_02 from './componets/Section03/Section03_02';
import Section03_03 from './componets/Section03/Section03_03';
import Section03_04 from './componets/Section03/Section03_04';
import Section03_05 from './componets/Section03/Section03_05';
import Section03_06 from './componets/Section03/Section03_06';
import Section03_07 from './componets/Section03/Section03_07';
import Section04_01 from './componets/Section04/Section04_01';
import Section04_02 from './componets/Section04/Section04_02';
import Section04_03 from './componets/Section04/Section04_03';
import Section04_04 from './componets/Section04/Section04_04';
import Section05_01 from './componets/Section05/Section05_01';
import Section05_02 from './componets/Section05/Section05_02';
import Section05_03 from './componets/Section05/Section05_03';
import Section05_04 from './componets/Section05/Section05_04';
import Section05_05 from './componets/Section05/Section05_05';
import Section06 from './componets/Section06/Section06';
import Section07_01 from './componets/Section07/Section07_01';
import Section07_02 from './componets/Section07/Section07_02';
import Section07_03 from './componets/Section07/Section07_03';
import Section07_04 from './componets/Section07/Section07_04';
import Section07_05 from './componets/Section07/Section07_05';
import Section07_06 from './componets/Section07/Section07_06';
import Section07_07 from './componets/Section07/Section07_07';

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
      <Route path='/section03_01' element={<Section03_01 />}></Route>
      <Route path='/section03_02' element={<Section03_02 />}></Route>
      <Route path='/section03_03' element={<Section03_03 />}></Route>
      <Route path='/section03_04' element={<Section03_04 />}></Route>
      <Route path='/section03_05' element={<Section03_05 />}></Route>
      <Route path='/section03_06' element={<Section03_06 />}></Route>
      <Route path='/section03_07' element={<Section03_07 />}></Route>
      <Route path='/section04_01' element={<Section04_01 />}></Route>
      <Route path='/section04_02' element={<Section04_02 />}></Route>
      <Route path='/section04_03' element={<Section04_03 />}></Route>
      <Route path='/section04_04' element={<Section04_04 />}></Route>
      <Route path='/section05_01' element={<Section05_01 />}></Route>
      <Route path='/section05_02' element={<Section05_02 />}></Route>
      <Route path='/section05_03' element={<Section05_03 />}></Route>
      <Route path='/section05_04' element={<Section05_04 />}></Route>
      <Route path='/section05_05' element={<Section05_05 />}></Route>
      <Route path='/section06/*' element={<Section06 />}></Route>
      <Route path='/section07_01' element={<Section07_01 />}></Route>
      <Route path='/section07_02' element={<Section07_02 />}></Route>
      <Route path='/section07_03' element={<Section07_03 />}></Route>
      <Route path='/section07_04' element={<Section07_04 />}></Route>
      <Route path='/section07_05' element={<Section07_05 />}></Route>
      <Route path='/section07_06' element={<Section07_06 />}></Route>
      <Route path='/section07_07' element={<Section07_07 />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
