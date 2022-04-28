import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeaturedItems from './FeaturedItems';
import About from './About';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import EditProduct from './EditProduct';
import NewProduct from './NewProduct';
import Search from './Search';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<FeaturedItems/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='products/add' element={<NewProduct/>}/>
          <Route path='products/:productId/edit' element={<EditProduct/>}/>
          <Route path='products/:productId' element={<ProductDetails/>}/>
          <Route path='products' element={<ProductList/>}/>
          <Route path=":search/searchfilter" element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
