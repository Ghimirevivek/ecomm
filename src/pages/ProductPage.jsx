import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import CartPage from './CartPage';

const ProductPage = () => {
  const params = useParams();
  const [data, setData] = useState();
  const {
    state: { cartItems, cartShow },
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  useEffect(() => {
    fetch(`http://localhost:4000/oneProduct/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <div className=' flex flex-col px-5 my-auto sm:flex-row bg-gradient-to-br from-[#c9fddf] to-[#1fb861] h-auto sm:h-screen'>
      {data ? (
        <>
          <div className='mt-20 mr-5 overflow-hidden'>
            <img
              src={data.image}
              alt={data.title}
              className='w-[70%] h-[70%] object-contain '
            />
          </div>
          <div className=' mt-0 sm:mt-40'>
            <h1 className='text-[29px] font-bold mb-2'>{data.title}</h1>
            <p className='text-[22px] font-bold mb-2 text-[#b12704]'>
              $ {data.price}
            </p>
            <div className='flex items-center my-2 '>
              <span className='flex w-[100px] h-5  items-center justify-center'>
                {Array(data.rating ? Math.floor(data.rating) : 0)
                  .fill()
                  .map((_, i) => (
                    <p className='py-2' key={i}>
                      ⭐
                    </p>
                  ))}
              </span>
              <span className='text-[18px] font-bold mx-2 '>
                {Math.floor(data.rating?.rate)}.0
              </span>
              <span className='text-[14px] ml-[5px] text-[#666]'>
                ({data.rating?.count} ratings)
              </span>
            </div>
            <div className='mb-5'>
              <h2 className='text-[20px] font-semibold mb-2'>Description</h2>
              <p className='mt-5'>{data.description}</p>
            </div>

            <div className='flex items-center justify-center'>
              <button
                onClick={() => setItems([...cartItems, data])}
                className='w-40 mx-2 bg-[#34cc9c] flex items-center justify-center shadow-lg rounded-lg text-white px-4 py-2 font-semibold hover:bg-[#198754]'
              >
                Add to cart
              </button>
              <button className='w-40 mx-2 bg-[#34cc9c] flex items-center justify-center shadow-lg rounded-lg text-white px-4 py-2 font-semibold hover:bg-[#198754]'>
                Buy now
              </button>
            </div>
          </div>
        </>
      ) : null}
      {cartShow && <CartPage />}
    </div>
  );
};

export default ProductPage;
