import React, { useEffect, useState } from 'react';
import { categories } from '../utils/data';
import { motion } from 'framer-motion';
import { IoFastFood } from 'react-icons/io5';
import Products from './Products';
import { useStateValue } from '../context/StateProvider';

const MenuContainer = () => {
  const [filter, setFilter] = useState('laptops');
  const {
    state: { foodItems },
    dispatch,
  } = useStateValue();

  useEffect(() => {
    fetch('http://localhost:4000/allusers')
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'SET_FOOD_ITEMS',
          foodItems: data,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className='w-full bg-slate-100'>
      <div className='w-full flex flex-col items-center justify-center '>
        <p className='text-2xl font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-[130px] before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-br from-[#c9fddf] to-[#1fb861] transition-all ease-in-out duration-100 text-center'>
          Our Products
        </p>
        <div className='w-full flex items-center justify-center gap-8 py-6 overflow-x-scroll scrollbar-none'>
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                onClick={() => setFilter(category.urlParamName)}
                className={`group ${
                  filter === category.urlParamName
                    ? 'bg-[#1fb861]'
                    : 'bg-[rgba(256,256,256,0.8)]'
                }  w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-[#1fb861]`}
              >
                <div
                  className={`${
                    filter === category.urlParamName
                      ? 'bg-white'
                      : 'bg-[#1fb861]'
                  } w-10 h-10 rounded-full shadow-lg group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      filter === category.urlParamName
                        ? 'text-[#1fb861]'
                        : 'text-white'
                    } group-hover:text-gray-600 text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlParamName
                      ? 'text-white'
                      : 'text-textColor'
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className='w-full'>
          <div className='w-screen flex items-center justify-center flex-wrap p-4 bg-[#c9fddf]'>
            {foodItems && foodItems.length > 0 ? (
              <>
                {foodItems
                  .filter((item) => item.category === filter)
                  .map((item) => (
                    <Products key={item._id} product={item} />
                  ))}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
