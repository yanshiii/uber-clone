import React from 'react'

const CaptainDetails = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://www.shutterstock.com/image-photo/photograph-portrait-style-man-narrow-600nw-2450790487.jpg" alt="" />
                    <h4 className='text-lg font-medium'>Raj Kumar</h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>₹257.80</h4>
                    <p className='text-sm text-gray-600'>Earned</p>
                </div>
            </div>
            <div className='flex mt-8 bg-gray-100 rounded-xl p-3 justify-center gap-5 items-start'>
                <div className='text-center'>
                    <i className="text-2xl font-thin ri-timer-2-line"></i>
                    <h5 className='text-3xl mb-2 font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-2xl font-thin ri-speed-up-line"></i>
                    <h5 className='text-3xl mb-2 font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-2xl font-thin ri-sticky-note-add-line"></i>
                    <h5 className='text-3xl mb-2 font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails
