import React from 'react';
import Home from './Home';
import FilterProducts from '../components/FilterProducts';
import { useStateValue } from '../context/StateProvider';
import CartPage from './CartPage';

const MainContainer = () => {
  const {
    state: { foodItems, cartShow },
  } = useStateValue();

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center '>
      <Home />
      <FilterProducts />
      {cartShow && <CartPage />}
    </div>
  );
};

export default MainContainer;
