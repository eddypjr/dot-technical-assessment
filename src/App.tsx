import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '../global.styles';
import Home from './pages/home/home';
import Cart from './pages/cart/cart';
import Layout from './components/layout/layout';
import Product from './pages/product/product';



const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/*" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
