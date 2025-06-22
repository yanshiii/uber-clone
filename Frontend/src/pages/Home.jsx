import React from 'react'
import uberLogo from '../images/Uber-Logo.png';
import trafficLight from '../images/traffic-lights.avif';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-bottom h-screen pt-7 w-full flex justify-between flex-col' 
      style={{ backgroundImage: `url(${trafficLight})` }}>
        <img className='w-16 ml-7' src={uberLogo} />
        <div className='bg-white pb-7 py-4 px-4'>
          <h2 className='text-[30px] font-bold'>Get Started with Uber</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
