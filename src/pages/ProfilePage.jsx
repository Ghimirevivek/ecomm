import React from 'react';
import { useStateValue } from '../context/StateProvider';
import { useNavigate } from 'react-router-dom';
const ProfilePage = () => {
  const {
    state: { user },
    dispatch,
  } = useStateValue();

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/');
    dispatch({
      type: 'SET_USER',
      user: null,
    });
  };
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#c9fddf] to-[#1fb861]'>
      <div className='mt-6 min-w-[400px] bg-[#efebeb] text-white text-center rounded-lg'>
        <div className='p-4'>
          <h2 className='text-xl font-bold mx-3 text-black'>Profile Menu</h2>
          <hr className=' border-black my-3' />
          <div className='flex items-center flex-col'>
            <img
              src={user.photoURL}
              alt='ProfilePicture'
              className='w-16 h-16 rounded-full border-2 border-black-200 mt-3 shadow-xl '
            />
            <h1 className='text-black font-semibold my-2'>
              {user.displayName}
            </h1>
            <h3 className='text-black text-sm'>{user.email}</h3>
          </div>
        </div>
        <ul>
          <li
            onClick={() => navigate('/')}
            className='bg-[#4a3aff] rounded-lg py-[14px] px-6 font-bodyFont text-white m-5 font-semibold hover:bg-[#311ff4] hover:translate-y-[-1.5px] duration-300 '
          >
            Home
          </li>
          <li className='bg-[#4a3aff] rounded-lg py-[14px] px-6 font-bodyFont text-white m-5 font-semibold hover:bg-[#311ff4] hover:translate-y-[-1.5px] duration-300 '>
            Analytics
          </li>
          <li className='bg-[#4a3aff] rounded-lg py-[14px] px-6 font-bodyFont text-white m-5 font-semibold hover:bg-[#311ff4] hover:translate-y-[-1.5px] duration-300 '>
            Reports
          </li>
          <li className='bg-[#4a3aff] rounded-lg py-[14px] px-6 font-bodyFont text-white m-5 font-semibold hover:bg-[#311ff4] hover:translate-y-[-1.5px] duration-300 '>
            Settings
          </li>
          <li
            onClick={logout}
            className='bg-[#ed5d5d] rounded-lg py-[14px] px-6 font-bodyFont text-white m-5 font-semibold hover:bg-[#f41f1f] hover:translate-y-[-1.5px] duration-300 '
          >
            Log Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
