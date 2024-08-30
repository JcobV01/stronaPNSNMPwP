import Image from 'next/image'
import React from 'react'

import moreImg from '@public/assets/icons/mamagement/more.png'

const Posts = ({ post, handleEdit, handleDelete }) => {
    return (
        <div className='flex justify-between bg-[#F4F4F4] rounded-[5px] h-[100px] items-center mt-[15px] px-[50px]'>
            <h3 className='w-[550px]'>{post.title}</h3>
            <p className='w-[150px]'>{post.author}</p>
            <p className='w-[100px]'>{post.category}</p>
            <p className='w-[150px]'>{post.date}</p>
            <Image src={moreImg} alt='Ikona trzech kropeczek - więcej'/>
            <p onClick={handleEdit}>Edytuj</p>
            <p onClick={handleDelete}>Edytuj</p>
        </div>
    )
}

export default Posts