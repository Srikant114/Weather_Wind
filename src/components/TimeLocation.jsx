import React from 'react'
import { formatToLocalTime } from '../services/weatherService'

const TimeLocation = ({weather:{dt,timezone, name,country}}) => {
  return (
    <div>
        <div className='flex items-center justify-center mt-4'>
            <p className='text-white text-l font-extralight'>
                {formatToLocalTime(dt, timezone)}
            </p>
        </div>
        <div className='flex items-center justify-center -mb-0'>
            <p className='text-white text-2xl font-normal'>
                {`${name} | ${country}`}
            </p>
        </div>
    </div>
  )
}

export default TimeLocation