import React, { useRef, useState } from 'react'
import uberMap from '../images/uber-map.jpg';
import uberCar from '../images/uberCar.png';
import uberBike from '../images/uberBike.webp';
import uberAuto from '../images/uberAuto.webp';
import { Link } from 'react-router-dom'
import uberLogo from '../images/Uber-Logo.png';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {

  const [ridePopUpPanel,setRidePopUpPanel] = useState(true);
  const ridePopUpPanelRef = useRef(null)
  const [confirmRidePopUpPanel,setConfirmRidePopUpPanel] = useState(false);
  const confirmRidePopUpPanelRef = useRef(null)

  useGSAP(() => {
  if (ridePopUpPanelRef.current) {
    gsap.to(ridePopUpPanelRef.current, {
      transform: ridePopUpPanel ? 'translateY(0)' : 'translateY(100%)',
    });
  }
}, [ridePopUpPanel]);


  useGSAP(() => {
  if (confirmRidePopUpPanelRef.current) {
    gsap.to(confirmRidePopUpPanelRef.current, {
      transform: confirmRidePopUpPanel ? 'translateY(0)' : 'translateY(100%)',
    });
  }
}, [confirmRidePopUpPanel]);


  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
        <img className='w-16' src={uberLogo} />
        <Link to='/captain-login' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src={uberMap} />
      </div>
      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>
      <div ref={ridePopUpPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
      </div>
      <div ref={confirmRidePopUpPanelRef} className='fixed h-screen w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white'>
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel}/>
      </div>
    </div>
  )
}

export default CaptainHome
