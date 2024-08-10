/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Structure from './components/structure/structure';
import Homepage from './components/homepage/homepage';
import Nameform from './components/nameForm/Nameform';

function App() {
  const [username, setUsername] = useState('');
  return (
    <div className="">
      <Structure />
      {username === '' ? <Nameform /> : <Homepage />}
    </div>
  );
}

export default App;
