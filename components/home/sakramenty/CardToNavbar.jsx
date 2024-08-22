import React from 'react'
import Image from 'next/image'

const CardToNavbar = ({ name, image, title, subtitle, setComponent, isActive }) => {
    // const iconColor = isActive ? '#1D4ED8' : '#EF4444';
    return (
        <button onClick={() => setComponent(name)} 
        
        className={`flex justify-between py-[15px] items-center border flex-col w-[200px] h-[150px] bg-white rounded-[10px] ${isActive ? 'border-[#5A7889] shadow-[5px_5px_10px_0px_rgba(90,120,137,1)]' : 'border-transparent shadow-[5px_5px_10px_0px_rgba(176,176,176,1)'}`}>
            <Image src={image} alt="Ikona sakramentu"></Image>
             {/* {/* <svg id="Warstwa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.71 34.13" style={{fill: iconColor}}> */}
                {/* <path d="M0,.04S0,0,.03,0c2.98,0,5.52.79,7.76.92,3.82.22,3.82.07,11.12.14,8.48.08,9.27,3.44,13.08,6.31,1.24.93.77,5.85-.5,8-2.42,4.09-5.26,7.74-6.3,12.66-.85,4.04-3.87,6.01-8.54,6.01-7.27-.01-16.65,2.38-13.2-15.99C4.65,11.62,4.08,8.28,0,.04ZM14.31,11.96c-8.19,0-10.04,1.9-10.15,10.48-.09,6.37,3.04,9.31,9.88,9.31,7.12,0,10.09-2.64,10.15-9.06.08-8.44-2.03-10.72-9.88-10.72ZM26.32,20.89l1.77-3.31c1.98-3.54,4.98-7.53,2.2-8.72-2.21-.94-2.54-.91-5.2-1.62-.91-.24-1.76.58-1.53,1.49l2.05,11.59c.08.33.37.56.7.57Z" /> */}
           
            <div className='font-medium tracking-[3px] text-[15px]'>
                <p className='text-[#B0B0B0]'>{title}</p>
                <p className=''>{subtitle}</p>
            </div>
        </button>
    )
}

export default CardToNavbar