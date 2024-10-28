import React from 'react'

const CalendarSigla = ({readings, formatTitle}) => {
    return (
        <div className='min-h-[80px] p-[15px] px-[30px] rounded-[5px] bg-[#5A7889] flex lg:flex-col'>
            <div className='flex-1'>
                {readings?.slice(0, readings?.length / 2).map((item, index) => (
                    <p className='text-white' key={index}>
                        {item.title.split(" ")[0] != "Aklamacja" && <span className='font-semibold text-white'>{formatTitle(item.title)}</span>}
                        {item.title.split(" ")[0] != "Aklamacja" && item.title.slice(item.title.indexOf("(") + 1, item.title.length - 1)}
                    </p>
                ))}
            </div>
            <div className='flex-1'>
                {readings?.slice(readings?.length / 2).map((item, index) => (
                    <p className='text-white' key={index}>
                        {item.title.split(" ")[0] != "Aklamacja" && <span className='font-semibold text-white'>{formatTitle(item.title)}</span>}
                        {item.title.split(" ")[0] != "Aklamacja" && item.title.slice(item?.title.indexOf("(") + 1, item.title.length - 1)}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default CalendarSigla