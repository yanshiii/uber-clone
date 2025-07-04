import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import uberDriverLogo from '../images/Uber Driver Logo.svg';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';
import { set } from 'mongoose';
import { useNavigate } from 'react-router-dom';



const CaptainSignup = () => {

  const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');

    const[vehicleColor, setVehicleColor] = useState('');
    const[vehiclePlate, setVehiclePlate] = useState('');
    const[vehicleCapacity, setVehicleCapacity] = useState('');
    const[vehicleType, setVehicleType] = useState('');


    const { capain, setCaptain } = React.useContext(CaptainDataContext);
    const navigate = useNavigate();

  
    //two way binding
    const submitHandler = async (e) => {
      e.preventDefault();
  
      const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }
      
  
      setUserData(captainData);
  
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
      setVehicleColor('');
      setVehiclePlate('');
      setVehicleCapacity('');
      setVehicleType('');

    }
  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-6' src={uberDriverLogo} />
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
        placeholder='Password' 
        />


        <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
        <div className='flex gap-2 mb-6'>
        
          <input
            required
            className='bg-[#eeeeee] rounded-md w-1/2 px-4 py-2 border text-lg placeholder:text-base'
            type="text"
            placeholder='Vehicle Color'
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
          />


          <input
            required
            className='bg-[#eeeeee] rounded-md w-1/2 px-4 py-2 border text-lg placeholder:text-base'
            type="text"
            placeholder='Vehicle Plate'
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
          />


        </div>
        <div className='flex gap-2 mb-6'>
          <input
            required
            className='bg-[#eeeeee] rounded-md w-1/2 px-4 py-2 border text-lg placeholder:text-base'
            type="number"
            min="1"
            placeholder='Capacity'
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
          />
          <select
            required
            className='bg-[#eeeeee] rounded-md w-1/2 px-4 py-2 border text-lg placeholder:text-base'
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="" disabled>Select Type</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="motorcycle">Motorcycle</option>
          </select>
        </div>


        <button className='bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2 w-full text-base placeholder:text-base' 
        >Create Captain Account
        </button>
        <p className='text-center'>Already have an account?
          <Link to='/captain-login ' className='text-blue-600 '> Login here</Link>
        </p>
      
      </form>
      </div>
      <div>
        <p className='text-[10px] leading-tight'>This site is proteceted by reCAPTCHA and the Google <span className='text-blue-600'>Privacy Policy</span> and <span className='text-blue-600'>Terms of Service</span> apply.</p>
      </div>
    </div>
  )
}

export default CaptainSignup
