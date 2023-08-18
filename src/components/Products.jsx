import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdShoppingBasket } from 'react-icons/md';
import { useStateValue } from '../context/StateProvider';

const Products = ({ product }) => {
  const {
    state: { cartItems },
    dispatch,
  } = useStateValue();
  const [items, setItems] = useState(cartItems);

  const addToCart = () => {
    dispatch({
      type: 'SET_CART_ITEMS',
      cartItems: items,
    });
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  useEffect(() => {
    addToCart();
  }, [items]);

  return (
    <div className='mx-10 flex flex-col items-center justify-center gap-2'>
      {product && (
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to={`oneProduct/${product._id}`} className=''>
            <span className='bg-[#ffc107] w-auto px-4 py-2 rounded-2xl text-[10px] relative top-2 left-10 font-semibold z-10'>
              Most Popular
            </span>

            <div className='backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-center'>
              <div className='flex flex-col items-center justify-center bg-white w-[250px] h-[250px] gap-2 border border-gray-400 rounded-3xl'>
                <div className='flex items-center justify-center p-4'>
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    src={product.image}
                    alt='imgurl'
                    className='w-[50%] object-contain'
                  />
                </div>
                <p className='text-lg text-headingColor font-semibold'>
                  <span className='text-sm text-red-500'>$</span>{' '}
                  {product.price}
                </p>
                <div className='flex items-center justify-center'>
                  {Array(Math.ceil(product.rating))
                    .fill()
                    .map((_, i) => (
                      <p key={i}>⭐</p>
                    ))}
                </div>

                <p className='px-4 text-[14px] text-center font-semibold'>
                  {product.title}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      )}
      <button
        onClick={() => setItems([...cartItems, product])}
        className='bg-[#34cc9c] flex items-center justify-center shadow-lg rounded-lg text-white px-4 py-2 font-semibold hover:bg-[#198754]'
      >
        <MdShoppingBasket className='text-white text-lg cursor-pointer mr-2' />{' '}
        Add to basket
      </button>
    </div>
  );
};

export default Products;
