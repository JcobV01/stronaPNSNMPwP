import { Icon } from '@iconify/react'
import React from 'react'

const InfoBar = ({ year, season, cycle }) => {
    return (
        <article className='flex justify-between w-[1075px] gap-[25px] m-auto xl:w-[800px] lg:w-[100%] xl:flex-col sm:mt-[40px]'>
            <div className='flex gap-[20px] bg-[#5A7889] rounded-[5px] items-center w-[275px] p-[15px] xl:w-full xl:flex-1'>
                <Icon icon="material-symbols:bookmark" width="50" height="50" className='text-white'/>
                <p className='text-white text-[17px]'>Rok liturgiczny: <span className='font-semibold text-white'>{year}</span></p>
            </div>

            <div className='flex flex-1 gap-[20px] bg-[#5A7889] rounded-[5px] items-center p-[15px] xl:w-full xl:flex-1'>
                <Icon icon="flowbite:book-open-solid" width="50" height="50" className='text-white'/>
                <p className='text-white text-[17px]'>Okres roku liturgicznego: <span className='font-semibold text-white'>{season}</span></p>
            </div>

            <div className='flex gap-[20px] bg-[#5A7889] rounded-[5px] items-center w-[275px] p-[15px] xl:w-full xl:flex-1'>
                <Icon icon="iconoir:book-solid" width="50" height="50" className='text-white'/>
                <p className='text-white text-[17px]'>Cykl czytań: <span className='font-semibold text-white'>{cycle}</span></p>
            </div>
        </article>
    )
}

export default InfoBar