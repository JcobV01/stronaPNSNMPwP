import React from 'react'

const GroupsLSOList = ({ height, team, title, children }) => {
    return (
        <div className={`bg-[#35353580] backdrop-blur-[17.5px] w-[400px] text-center py-[20px] h-[${height}px] 2xl:w-[350px] xl:w-[300px] lg:w-[400px] sm:w-[80%] fold:w-[90%]`}>
            <h5 className='text-white text-[30px] tracking-[4px] font-extralight xl:text-[25px] fold:text-[20px]'>{title}</h5>
            <div className='h-[2px] w-[50%] bg-[#D9D9D9] m-auto mb-[25px] mt-[5px]'></div>
            {team.map((person,index) => (
                <p className='text-white text-[18px] tracking-[2.3px] font-light xl:text-[16px] fold:text-[13px]' key={index}>{person}</p>
            ))}
            {children}
        </div>
    )
}

export default GroupsLSOList