import React from 'react';
import './App.css';
import Drawer from './components/drawer/Drawer';
import Items from './components/items/Items';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>shopping cart</p>
      </header>
      <Drawer show={false}>
      </Drawer>
      <Items />
    </div>
  );
}

export default App;
