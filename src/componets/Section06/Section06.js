import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Table from './Table';
import Form from './Form';
import ItemIndex from './ItemIndex';
import ItemDetail from './ItemDetail';

const Section06 = () => {
  return (
    <>
      <div className='min-h-screen bg-gray-100'>
        <Navbar />
        <div className='py-12'>
          <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
            <div className='white overflow-hidden shadow-sm sm:rounded-lg'>
              <div className='p-6 bg-white border-b border-gray-200'>
                <Routes>
                  <Route path='/home' element={<Home />}></Route>
                  <Route path='/table' element={<Table />}></Route>
                  <Route path='/form' element={<Form />}></Route>
                  <Route path='/item_index' element={<ItemIndex />}></Route>
                  <Route path='/item_detail' element={<ItemDetail />}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section06;
