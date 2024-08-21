import React from 'react'
import Link from 'next/link'

const TitleCard = ({ subtitle, title, link }) => {
    return (
        <div className='bg-[rgba(0,0,0,0.50)] h-full rounded-[15px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]'>
            <div className='px-[20px] pt-[20px] flex flex-col justify-between h-full'>
                <div>
                    <p className='text-[#B0B0B0] text-[13px]'>{subtitle}</p>
                    <h4 className='pt-[5px] font-bol text-white text-[25px]'>{title}</h4>
                </div>
                <div className='bg-[#F1F1F1] rounded-[2px] mb-[30px] px-[20px] py-[5px] w-max'>
                    <Link href={link} className='text-[13px] text-[#5A7889] font-medium'>Dowiedz się więcej</Link>
                </div>
            </div>
        </div>
    )
}

export default TitleCard