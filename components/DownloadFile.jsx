import React from 'react'

const DownloadFile = ({location, text}) => {
  return (
    <a href={location} download className='text-[#898989] text-center duration-700 hover:text-white'>Kliknij aby pobrać "{text}"</a>
  )
}

export default DownloadFile