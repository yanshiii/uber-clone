import React, { useState } from 'react'
import uberLogo from '../images/Uber-Logo.png';
import { Link } from 'react-router-dom';
import { set } from 'mongoose';


const UserLogin = () => {
  //Two way binding
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    });
    // console.log('User Data:', userData);

    // console.log('Email:', email);
    // console.log('Password:', password);

    // Reset the form fields after submission
    setEmail('');
    setPassword('');
  }

  return (
    <div className='px-5 py-5 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-6' src={uberLogo} />
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
        <p className='text-center'>New here?
          <Link to='/signup ' className='text-blue-600 '> Create new Account
          </Link>
        </p>
      
      </form>
      </div>
      <div>
        <Link 
        to='/captain-login'
        className='bg-yellow-500 flex items-center justify-center text-white font-semibold mb-5  rounded-md px-4 py-2 w-full text-lg placeholder:text-base' >
          Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
