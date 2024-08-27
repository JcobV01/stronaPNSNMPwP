import React from 'react'

const GropusAKHistoryPost = ({color, date, title, desc}) => {
    return (
        <div className={`rounded-[7px] py-[20px] px-[40px] w-[400px] flex flex-col gap-[20px] lg:w-[350px] sm:w-[80%] fold:w-[90%]`} style={{ backgroundColor: color }}>
            <p className='text-white text-[15px] tracking-[2px] text-center lg:text-[13px]'>{date}</p>
            <h5 className='text-white text-[23px] font-medium text-center lg:text-[20px]'>{title}</h5>
            <p className='text-white text-center text-[15px] font-light lg:text-[13px]'>{desc}</p>
        </div>
    )
}

export default GropusAKHistoryPost