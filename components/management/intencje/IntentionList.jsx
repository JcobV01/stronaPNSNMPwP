import { Icon } from '@iconify/react'
import React from 'react'

const IntentionList = () => {
  return (
    <article className='flex flex-col gap-[20px]'>
        <div className='flex justify-between items-center p-[30px] bg-white shadow-[0px_4px_4px_0px_#00000025] rounded-[5px]'>
            <h3>Aktualne intencje</h3>
            <p>21.03.2024</p>
            <Icon icon="solar:menu-dots-bold" width="40" height="40" />
        </div>

        <div className='flex justify-between items-center p-[30px] bg-white shadow-[0px_4px_4px_0px_#00000025] rounded-[5px]'>
            <h3>Poprzenie intencje</h3>
            <p>21.03.2024</p>
            <Icon icon="solar:menu-dots-bold" width="40" height="40" />
        </div>
    </article>
  )
}

export default IntentionList