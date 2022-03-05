import React from 'react';
import Section01 from './Section01';
import Section02 from './Section02';
import Section03 from './Section03';
import Section04 from './Section04';
import Section05 from './Section05';
import Section06 from './Section06';
import Section07 from './Section07';

function App() {
  return (
    <div className='App'>
      <div
        className='
        bg-gradient-to-b from-gray-800 to-gray-800
        md:grid md:grid-cols-7 p-16 mb-8'
      >
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
        <Section07 />
      </div>
    </div>
  );
}

export default App;
