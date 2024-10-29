import React from 'react'
import MessagesOptions from './MessagesOptions';


const Messages = ({ messages, handleDelete, handleDetails }) => {
    const formattedDate = new Date(messages.Date).toLocaleDateString('pl-PL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className='flex justify-between bg-[#F4F4F4] rounded-[5px] h-[100px] items-center mt-[15px] px-[50px]'>
            <h3 className='w-[350px] break-words line-clamp-1'>{messages.Message}</h3>
            <p className='w-[150px]'>{messages.Name}</p>
            <p className='w-[150px] break-words'>{messages.Email}</p>
            <p className='w-[150px] break-words'>{formattedDate}</p>
            <p className='w-[125px] break-words'>{messages.Objective}</p>
            <div className='w-[30px]'></div>
            <MessagesOptions handleDelete={handleDelete} handleDetails={handleDetails} />
        </div>

    )
}

export default Messages