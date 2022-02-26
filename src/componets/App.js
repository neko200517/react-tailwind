import React from 'react';
import Section01 from './Section01';
import Section02 from './Section02';
import Section03 from './Section03';
import Section04 from './Section04';
import Section05 from './Section05';
import Section06 from './Section06';

function App() {
  return (
    <div className='App'>
      <div className='grid grid-cols-6'>
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
        <Section06 />
      </div>
    </div>
  );
}

export default App;
