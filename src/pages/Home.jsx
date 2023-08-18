import React from 'react';

const Home = () => {
  return (
    <div className='mt-20 grid grid-cols-1 md:grid-cols-2 w-full bg-[#c9fddf]'>
      <div className='p-4 flex-1 flex flex-col items-start justify-center gap-6'>
        <p className=' m-4 text-[1.5rem] lg:text-[2.5rem] font-bold tracking-wide text-headingColor'>
          We bring you healthy, fresh produce which is absolutely
          <span className='text-[#50C878] text-[2rem] lg:text-[3rem]'>
            {' '}
            Organic!
          </span>
        </p>
        <p className='text-base text-center md:text-left md:w-[80%]'>
          “If you do build a great experience, customers tell each other about
          that. Word of mouth is very powerful.” – Jeff Bezos, founder of Amazon
        </p>
        <button
          type='button'
          className='bg-[#34cc9c] flex items-center justify-center shadow-lg rounded-lg text-white px-4 py-2 font-semibold hover:bg-[#198754]'
        >
          Buy Now
        </button>
      </div>
      <div className=' flex-1 flex items-center relative'>
        <img
          src={
            'https://cdn.pnghd.pics/data/273/gambar-background-warna-hijau-2.jpg'
          }
          className=' ml-auto min-h-420 w-full xl:w-auto xl:h-650 h-full'
          alt='hero-bg'
        />
      </div>
    </div>
  );
};

export default Home;
