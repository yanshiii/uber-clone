import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import uberLogo from '../images/Uber-Logo.png';
import uberMap from '../images/uber-map.jpg';
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import FinishRide from '../components/FinishRide';
import LiveTracking from '../components/LiveTracking';

const CaptainRiding = () => {

    const [finishRidePanel,setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)
    const location = useLocation()
    const rideData = location.state?.ride

    useGSAP(() => {
        if (finishRidePanelRef.current) {
            gsap.to(finishRidePanelRef.current, {
                transform: finishRidePanel ? 'translateY(0)' : 'translateY(100%)',
            });
        }
    }, [finishRidePanel]);

    return (
        <div className='h-screen relative'>
            <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
                
                <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-medium ri-home-4-line"></i>
                </Link>
            </div>
            <div className='h-4/5'>
                <LiveTracking />
            </div>
            <div onClick={()=>{
                setFinishRidePanel(true)
            }} className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400'>
                <h5 className='p-1 text-center w-[90%] absolute top-0' onClick={() => {

                }}><i className="text-3xl text-gray-900 ri-arrow-up-wide-line"></i></h5>
                <h4 className='text-xl font-semibold'>4 KM Away</h4>
                <button className='mt-1 bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>
            <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
                <FinishRide 
                    ride={rideData}
                    setFinishRidePanel={setFinishRidePanel}/>
            </div>

        </div>
    )
}

export default CaptainRiding
