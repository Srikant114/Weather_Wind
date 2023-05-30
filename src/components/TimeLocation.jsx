import React from 'react'

const TimeLocation = () => {
  return (
    <div>
        <div className='flex items-center justify-center mt-4'>
            <p className='text-white text-l font-extralight'>
                Todays Date | Todays Time
            </p>
        </div>
        <div className='flex items-center justify-center -mb-0'>
            <p className='text-white text-2xl font-normal'>
                City | Country
            </p>
        </div>
    </div>
  )
}

export default TimeLocation