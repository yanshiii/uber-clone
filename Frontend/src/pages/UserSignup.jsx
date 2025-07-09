import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import uberLogo from '../images/Uber-Logo.png';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';


const UserSignup = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const[userData, setUserData] = useState({})

  const navigate = useNavigate();
  const { setUser } = useContext(UserDataContext);

  //two way binding
  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
    fullname: {
      firstname: firstName,
      lastname: lastName
    },
    email: email,
    password: password
  };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

    if(response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    } 
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }
  return (
    <div className='px-5 py-5 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-6' src={uberLogo} />
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>
        <h3 className='text-lg font-medium mb-2'>What's your name</h3>
        <div className='flex gap-2 mb-6'>
          <input 
        required 
        className='bg-[#eeeeee] rounded-md w-1/2 px-4 py-2 border text-lg placeholder:text-base' 
        type="text" 
        placeholder='First Name' 
        value={firstName}
        onChange={(e)=>{
          setFirstName(e.target.value)
        }}
        />
        <input 
        required 
        className='bg-[#eeeeee] w-1/2 rounded-md px-4 py-2 border text-lg placeholder:text-base' 
        type="text" 
        placeholder='Last Name' 
        value={lastName}
        onChange={(e)=>{
          setLastName(e.target.value)
        }}
        />
        </div>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input 
        required
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        className='bg-[#eeeeee] mb-6 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base' 
        type="email" 
        placeholder='email@example.com' 
        />
        <h3 className='text-lg font-medium  mb-2'>Enter Password </h3>
        <input
        className='bg-[#eeeeee] mb-6 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base' 
        required type="password"
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        placeholder='Password' />
        <button className='bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2 w-full text-base placeholder:text-base' 
        >Create Account
        </button>
        <p className='text-center'>Already have an account?
          <Link to='/login ' className='text-blue-600 '> Login here</Link>
        </p>
      
      </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is proteceted by reCAPTCHA and the Google <span className='text-blue-600'>Privacy Policy</span> and <span className='text-blue-600'>Terms of Service</span> apply.</p>
      </div>
    </div>
  )
}

export default UserSignup

// dummy change to trigger deploy
