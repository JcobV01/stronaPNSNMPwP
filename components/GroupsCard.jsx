import Image from 'next/image'
import React from 'react'

const GroupsCard = ({icon, name, desc}) => {
  return (
    <div>
        <div className='w-[56px] h-[56px] rounded-full bg-white flex flex-center'>
            <Image src={icon} width={40} height={40} />
        </div>

        <div className='text-white'>
            <h4>{name}</h4>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default GroupsCard