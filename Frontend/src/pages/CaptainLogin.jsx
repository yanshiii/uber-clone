import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import uberDriverLogo from '../images/Uber Driver Logo.svg';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {
  //Two way binding
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const { captain, setCaptain } = React.useContext(CaptainDataContext);
    const navigate = useNavigate();
  
    const submitHandler = async (e) => {
      e.preventDefault();
      const captain = ({
        email: email,
        password: password
      });

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);
      // console.log('User Data:', userData);
  
      // console.log('Email:', email);
      // console.log('Password:', password);

      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem('token', data.token);
        navigate('/captain-home');
      }
  
      // Reset the form fields after submission
      setEmail('');
      setPassword('');
    }
  return (
      <div className='px-5 py-5 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-3' src={uberDriverLogo} />
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input 
        required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='bg-[#eeeeee] mb-7 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base' 
        type="email" 
        placeholder='email@example.com' 
        />
        <h3 className='text-lg font-medium  mb-2'>Enter Password </h3>
        <input
        className='bg-[#eeeeee] mb-7 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base' 
        required type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password' />
        <button className='bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2 w-full text-lg placeholder:text-base' 
        >Login
        </button>
        <p className='text-center'>Join a fleet?
          <Link to='/captain-signup ' className='text-blue-600 '> Register as Captain
          </Link>
        </p>
      
      </form>
      </div>
      <div>
        <Link 
        to='/login'
        className='bg-green-600 flex items-center justify-center text-white font-semibold mb-5  rounded-md px-4 py-2 w-full text-lg placeholder:text-base' >
          Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
