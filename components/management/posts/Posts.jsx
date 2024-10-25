import React from 'react'
import PostOptions from './PostOptions'

const Posts = ({ post, handleEdit, handleDelete }) => {
    const formattedDate = new Date(post.date).toLocaleString('pl-PL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
    return (
        <div className='flex justify-between bg-[#F4F4F4] rounded-[5px] h-[100px] items-center mt-[15px] px-[50px]'>
            <h3 className='w-[550px]'>{post.title}</h3>
            <p className='w-[150px]'>{post.author}</p>
            <p className='w-[100px]'>{post.category}</p>
            <p className='w-[150px]'>{formattedDate}</p>
            <PostOptions handleEdit={handleEdit} handleDelete={handleDelete}/>
        </div>
    )
}

export default Posts