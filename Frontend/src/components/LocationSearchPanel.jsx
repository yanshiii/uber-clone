import React from 'react'

const LocationSearchPanel = (props) => {
    //sample array for locations
    const locations = [
        '24B, Near Hudson Lane, Delhi',
        'A-12, Sector 5, Noida',
        'B-34, Sector 16, Faridabad',
        'C-56, Sector 18, Gurgaon'
    ]
    return (
        <div>
            {
                locations.map(function (elem,idx) {
                    return <div key={idx} onClick={() => {
                        props.setVehiclePanelOpen(true);
                        props.setPanelOpen(false);
                    }}
                     className='flex items-center border-gray-100 active:border-black  border-2 p-3 rounded-xl my-2 gap-3 justify-start'>
                        <h2 className='bg-[#eee] w-7 h-7 my-4 flex items-center justify-center rounded-full'>
                            <i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                })
            }
            


        </div>
    )
}

export default LocationSearchPanel
