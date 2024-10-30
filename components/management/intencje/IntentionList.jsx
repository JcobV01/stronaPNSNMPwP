import { Icon } from '@iconify/react'
import React from 'react'

const IntentionList = ({ rows }) => {
  return (
    <article className='flex flex-col gap-[20px]'>
      {rows.map((row, index) => (
        <div className='bg-white shadow-[0px_4px_4px_0px_#00000025] rounded-[5px] p-[20px]' key={index}>
          <h3 className='text-[18px] font-semibold'>{row.day}</h3>
          <h4 className='text-[13px] font-light mb-[20px]'>{row.date}2024</h4>

          <div className='flex flex-col gap-[10px]'>
            {row.times.map((time, index2) => (
              <div className='flex gap-[30px]' key={index2 * 10}>
                  <p>{time}</p>

                
                  <p>{row.intentions[index2]}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </article>
  )
}

export default IntentionList