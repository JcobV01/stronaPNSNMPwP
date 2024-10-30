import { Icon } from '@iconify/react'
import React from 'react'

const AnnList = ({ handleOpenDialog, actualDate, prevDate }) => {
    const formatDate = (date) => {
        const newDate = new Date(date)
        return newDate.toLocaleDateString('pl-PL');
    }

    return (
        <article className='flex flex-col gap-[20px]'>
            <div className='flex justify-between items-center p-[30px] bg-white shadow-[0px_4px_4px_0px_#00000025] rounded-[5px]'>
                <h3>Aktualne ogłoszenia</h3>
                <p>{formatDate(actualDate)}</p>
                <Icon icon="mynaui:edit-solid" width="30" height="30" className='text-[#11161A] hover:text-[#33414e] duration-500 cursor-pointer' onClick={() => handleOpenDialog("actual")} />
            </div>

            <div className='flex justify-between items-center p-[30px] bg-white shadow-[0px_4px_4px_0px_#00000025] rounded-[5px]'>
                <h3>Poprzenie ogłoszenia</h3>
                <p>{formatDate(prevDate)}</p>
                <Icon icon="mynaui:edit-solid" width="30" height="30" className='text-[#11161A] hover:text-[#33414e] duration-500 cursor-pointer' onClick={() => handleOpenDialog("prev")} />
            </div>
        </article>
    )
}

export default AnnList