import React from 'react';
import ProductsPage  from './pages/Products';
import AddProductPage from './pages/AddProduct';
import { Route, Routes } from "react-router-dom";


const App: React.FC = () => {
  return (
    <Routes>
          <Route path="/" element={<ProductsPage/>} />
          <Route path="/add" element={<AddProductPage/>} />
    </Routes>
    
  );
};

export default App;

