import React from 'react';
import logo from './logo.svg';
import './App.css';
import Situation from './Component/Situation'
import Option from './Component/Option'
import Result from './Component/Result'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Situation />
        <Option />
        <Result />
      </div>
    </div >
  );
}

export default App;
