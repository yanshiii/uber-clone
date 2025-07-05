import React from 'react'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

const FinishRide = (props) => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setFinishRidePanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Finish this Ride</h3>
            <div className='flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 rounded-full object-cover w-12' src="https://www.zoes-place.org.uk/app/uploads/2023/02/Amaan-Yasin-1-scaled-768x1024-c-center.jpg" />
                    <h2 className='text-lg font-medium'>Sandeep Mishra</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahmedabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahmedabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹198.20</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                <div className='mt-10 w-full'>
                    <Link to='/captain-home' className='w-full flex justify-center mt-5 text-lg bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride</Link>
                    <p className='text-red-500 text-xs mt-10 px-3'>Click 'Finish Ride' once the payment has been completed.</p>
                </div>
            </div>
        </div>
    )
}

export default FinishRide
