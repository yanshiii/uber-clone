import React from 'react'
import uberMap from '../images/uber-map.jpg';
import uberCar from '../images/uberCar.png';
import uberBike from '../images/uberBike.webp';
import uberAuto from '../images/uberAuto.webp';
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import 'remixicon/fonts/remixicon.css'

const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-home-4-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src={uberMap} />
            </div>
            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between'>
                    <img className='h-[54px]' src={uberCar} />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Sarthak</h2>
                        <h4 className='text=xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Swift</p>
                    </div>
                </div>
                <div className='flex gap-2 flex-col justify-between items-center'>
                    <div className='w-full mt-5'>
                        <div className='flex items-center gap-5 p-3 border-b-2'>
                            <i className="text-lg ri-map-pin-2-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>562/11-A</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Kankiriya Talab, Ahmedabad</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 p-3'>
                            <i className="ri-currency-line"></i>
                            <div>
                                <h3 className='text-lg font-medium'>₹193.20</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding
