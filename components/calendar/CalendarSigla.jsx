import React from 'react'

const CalendarSigla = ({ readings, formatTitle }) => {
    return (
        <div className='min-h-[80px] p-[15px] px-[30px] rounded-[5px] bg-[#5A7889] flex lg:flex-col lg:mx-[20px]'>
            <div className='flex-1 flex flex-col gap-[10px]'>
                {readings?.slice(0, readings?.length / 2).map((item, index) => (
                    <>
                        {item.title.split(" ")[0] != "Aklamacja" &&
                            <p className='text-white' key={index}>
                                <span className='font-semibold text-white'>{formatTitle(item.title)}</span><br />
                                {item.title.slice(item.title.indexOf("(") + 1, item.title.length - 1)}
                            </p>
                        }
                    </>

                ))}
            </div>
            <div className='flex-1 flex flex-col gap-[10px]'>
                {readings?.slice(readings?.length / 2).map((item, index) => (
                    <>
                        {item.title.split(" ")[0] != "Aklamacja" &&
                            <p className='text-white' key={index}>
                                <span className='font-semibold text-white'>{formatTitle(item.title)}</span><br />
                                {item.title.slice(item.title.indexOf("(") + 1, item.title.length - 1)}
                            </p>
                        }
                    </>
                ))}
            </div>
        </div>
    )
}

export default CalendarSigla