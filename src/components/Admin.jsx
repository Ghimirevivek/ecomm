import React, { useState } from 'react';
import { categories } from '../utils/data';
import { motion } from 'framer-motion';
import { addUser, deleteUser, updateUser } from '../utils/fetchApi';
import {
  MdAttachMoney,
  MdFastfood,
  MdImage,
  MdProductionQuantityLimits,
} from 'react-icons/md';
import { FcRating } from 'react-icons/fc';
import { useStateValue } from '../context/StateProvider';

const Admin = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Select Category');
  const [imageUrl, setImageUrl] = useState('');
  const [qty, setQty] = useState('');
  const [rating, setRating] = useState('');
  const [alertStatus, setAlertStatus] = useState('danger');
  const [msg, setMsg] = useState('');

  const [fields, setFields] = useState(false);
  const {
    state: { foodItems },
    dispatch,
  } = useStateValue();

  const uploadfile = async () => {
    if (
      title === '' ||
      price === '' ||
      category === 'Select Category' ||
      imageUrl === '' ||
      qty === '' ||
      rating === ''
    ) {
      setFields(true);
      setAlertStatus('danger');
      setMsg('All fields are required');
      setTimeout(() => {
        setFields(false);
      }, 2000);

      return;
    }
    const userData = {
      title,
      price,
      category,
      imageUrl,
      qty,
      rating,
    };
    try {
      await addUser(userData);
      setFields(true);
      setAlertStatus('success');
      setMsg('User added successfully!');
    } catch (error) {
      console.error(error);
      setFields(true);
      setAlertStatus('danger');
      setMsg('Error adding user.');
    }
  };
  return (
    <div className='w-full h-screen flex items-center justify-center '>
      <div className='w-[90%] md:w-[50%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-10'>
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
              alertStatus === 'danger'
                ? 'bg-red-400 text-red-800'
                : 'bg-emerald-400 text-emerald-800'
            }`}
          >
            {msg}
          </motion.p>
        )}
        <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
          <MdFastfood className='text-xl text-gray-700' />
          <input
            type='text'
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title...'
            className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
          />
        </div>
        <div className='w-full'>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className='outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer'
            required
          >
            <option value='other' className='bg-white'>
              Select Category
            </option>
            {categories &&
              categories.map((item) => (
                <option key={item.id} value={item.urlParamName}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
          <MdImage className='text-gray-700 text-2xl' />
          <input
            type='text'
            required
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder='ImageUrl'
            className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
          />
        </div>
        <div className='w-full flex flex-col md:flex-row items-center gap-3'>
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdProductionQuantityLimits className='text-gray-700 text-2xl' />
            <input
              type='number'
              required
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              placeholder='Quantity'
              className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
            />
          </div>
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <FcRating className='text-gray-700 text-2xl' />
            <input
              type='number'
              required
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder='Rating'
              className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
            />
          </div>
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdAttachMoney className='text-gray-700 text-2xl' />
            <input
              type='number'
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder='Price'
              className='w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor'
            />
          </div>
        </div>
        <div className='flex items-center w-full'>
          <button
            onClick={uploadfile}
            type='button'
            className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold'
          >
            Create Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
