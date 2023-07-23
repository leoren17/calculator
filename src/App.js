import React from 'react'

import { Calculator, Author } from './components';

import './App.css';

const App = () => {
  return (
    <div id="app">
      <div>
        <Calculator />
        <Author />
      </div>        
    </div>
  )
}

export default App