import React from 'react'
import uberCar from '../images/uberCar.png';
import uberBike from '../images/uberBike.webp';
import uberAuto from '../images/uberAuto.webp';

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 onClick={() => props.setVehiclePanelOpen(false)}
         className='p-1 text-center w-[94%] absolute top-0'><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=>{
            props.setConfirmRidePanelOpen(true)
        }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-12' src={ uberCar }/>
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <div>
            <h2 className='text-lg font-semibold'>₹193.20</h2>

          </div>
        </div>

        <div onClick={()=>{
            props.setConfirmRidePanelOpen(true)
        }}  className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-12' src={ uberBike }/>
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
          </div>
          <div>
            <h2 className='text-lg font-semibold'>₹65.17</h2>

          </div>
        </div>

        <div onClick={()=>{
            props.setConfirmRidePanelOpen(true)
        }}  className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img className='h-12' src={ uberCar }/>
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable auto rides</p>
          </div>
          <div>
            <h2 className='text-lg font-semibold'>₹118.21</h2>

          </div>
        </div>
    </div>
  )
}

export default VehiclePanel
