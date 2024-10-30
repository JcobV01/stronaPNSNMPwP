import React from 'react'
import PostOptions from '../posts/PostOptions';

const HistoryPost = ({post, handleDelete, handleEdit}) => {
  const formattedDate = new Date(post.date).toLocaleString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <div className='flex justify-between bg-[#F4F4F4] rounded-[5px] h-[100px] items-center mt-[15px] px-[50px]'>
      <h3 className='w-[550px]'>{post.title}</h3>
      <p className='w-[150px]'>{formattedDate}</p>
      <p className='w-[150px]'>{post.author}</p>
      <PostOptions handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  )
}

export default HistoryPost