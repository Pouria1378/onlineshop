import React from 'react';
import './App.css';
import Drawer from './components/drawer/Drawer';
import Items from './components/items/Items';
import { InvoiceProvider } from './store/basket';

function App() {
  return (
    <div className="App">
      <InvoiceProvider>
        <header className="App-header">
          <p>shopping cart</p>
        </header>
        <Drawer show={true}>
        </Drawer>
        <Items />
      </InvoiceProvider>
    </div>
  );
}

export default App;
