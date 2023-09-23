import React from 'react';
import './App.css';
import DynamicComponentRenderer from './DynamicComponentRenderer';
import config from './data.json';

function App() {
  return (
    <div className="App">
      <DynamicComponentRenderer config={config} />
    </div>
  );
}

export default App;
