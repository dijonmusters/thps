import React from 'react';
import Skaters from './Skaters';

import './App.scss';

const App = () => (
  <div className="app">
    <Skaters />
    <Skaters useCache />
  </div>
);

export default App;
