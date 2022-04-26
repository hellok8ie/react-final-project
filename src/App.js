import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeaturedItems from './FeaturedItems';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<FeaturedItems/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
