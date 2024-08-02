import React from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <h1> Shopping Application</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
