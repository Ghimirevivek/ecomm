import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSearch, BiSolidCart } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { MdAdd, MdLogout } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { useStateValue } from '../context/StateProvider';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config';

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const {
    state: { user, cartItems, foodItems },
    dispatch,
  } = useStateValue();

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSearch = () => {
    // const searchItem = foodItems?.filter((item) =>
    //   item.title.toLowerCase().includes(searchValue.toLowerCase())
    // );
    // setSearchValue(searchItem);
    // console.log(searchItem);
  };
  const login = async () => {
    if (!user) {
      const response = await signInWithPopup(firebaseAuth, provider);
      const {
        user: { providerData },
      } = response;
      dispatch({
        type: 'SET_USER',
        user: providerData[0],
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    } else {
      setIsMenu((prev) => !prev);
    }
  };
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: 'SET_USER',
      user: null,
    });
  };
  const showCart = () => {
    dispatch({
      type: 'SET_CART_SHOW',
      cartShow: true,
    });
  };

  return (
    <nav className='flex items-center justify-center z-40 p-6 px-16 w-screen bg-gradient-to-br from-[#c9fddf] to-[#1fb861] fixed'>
      <div className='flex w-full h-full items-center justify-between'>
        <Link to='/'>
          <img
            alt='SN Group logo'
            src='https://sn-group.in/_next/image?url=%2Fimages%2Flogo%2Fsn-group-logo-image.png&w=128&q=75'
            className='w-100 h-100 object-cover'
          />
        </Link>

        <div className=' items-center justify-center w-[40%] hidden sm:flex'>
          <input
            type='text'
            placeholder='Search Items'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className='p-1 px-4 border-none outline-none rounded-md sm:w-60 bg-slate-100 w-20 '
          />
          <BiSearch
            onClick={handleSearch}
            className='text-xl relative right-7 cursor-pointer min-w-[14px]'
          />
        </div>
      </div>
      <BiSolidCart className='text-2xl cursor-pointer' onClick={showCart} />
      {cartItems && cartItems.length > 0 && (
        <div className='relative -top-2 -right-0 w-5 h-5 rounded-full bg-[#ad5d50] flex items-center justify-center'>
          <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
        </div>
      )}
      <div className='relative'>
        <motion.img
          whileTap={{ scale: 0.6 }}
          src={
            user
              ? user.photoURL
              : 'data:image/jpeg;base64,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'
          }
          alt='icon'
          className='relative -top-1 ml-4 w-10 bg-gray-50 shadow-xl rounded-full
          '
          onClick={login}
        />
      </div>
      {isMenu ? (
        <div className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-16 right-2 z-20'>
          <Link to={'/admin'}>
            <p
              className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
              onClick={() => setIsMenu(false)}
            >
              {' '}
              Admin <MdAdd />
            </p>
          </Link>
          <Link to={'/profile'}>
            <p
              className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'
              onClick={() => setIsMenu(false)}
            >
              {' '}
              Profile <CgProfile />
            </p>
          </Link>

          <p
            onClick={logout}
            className='m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base'
          >
            Logout <MdLogout />
          </p>
        </div>
      ) : null}
    </nav>
  );
};

export default Header;
