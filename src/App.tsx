import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductList from "./component/ProductList";
import ProductCreate from "./component/ProductCreate";
import ProductInfo from "./component/ProductInfo";
import ProductUpdate from "./component/ProductUpdate";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/products" element={<ProductList/>}></Route>
            <Route path="/products/create" element={<ProductCreate/>}></Route>
              <Route path={`/products/:productId`} element={<ProductInfo/>}></Route>
              <Route path={`/products/update/:productId`} element={<ProductUpdate/>}></Route>

          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
