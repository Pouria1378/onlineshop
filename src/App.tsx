import React from 'react';
import './App.css';
import Drawer from './components/drawer/Drawer';
import Items from './components/items/Items';
import { InvoiceProvider } from './store/basket';

function App() {
  // const toggleShowBasket = () => {
  //   const width = document.getElementById("Drawer")?.style.width
  //   if (width === "0px" || width === "") {
  //     document.getElementById("Drawer")!.style.width = "300px"
  //   } else {
  //     document.getElementById("Drawer")!.style.width = "0px"
  //   }
  // }
  return (
    <div className="App">
      <InvoiceProvider>
        <header className="App-header">
          <p>shopping cart</p>
        </header>
        {/* <button
          type={"button"}
          onClick={toggleShowBasket}
        >
          <img src={"images/icons/shopping-cart.svg"} alt={"addToBasket"} />
        </button> */}
        <Drawer />
        <Items />
      </InvoiceProvider>
    </div>
  );
}

export default App;
