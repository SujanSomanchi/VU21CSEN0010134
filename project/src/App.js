import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetails products={products} />} />
      </Routes>
    </Router>
  );
};

export default App;
