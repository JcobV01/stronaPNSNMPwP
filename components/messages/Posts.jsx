import React from 'react'
import { Icon } from '@iconify/react';

const Posts = ({ post }) => {
    const date = new Date(post.date);

    const dayAndMonth = date.toLocaleString('pl-PL', {
        day: 'numeric',
        month: 'long',
    });

    const year = date.toLocaleString('pl-PL', {
        year: 'numeric',
    })

    return (
        <div className='flex bg-[#fff] w-[1000px] h-[250px] items-center mt-[15px] border-l-[5px] border-[#5A7889]'>
            <div className='w-[285px] flex-center flex-col relative'>
                <p className='text-[25px] font-extralight text-center after:content-[""] after:w-[2.5px] after:h-[100px] after:bg-[#5A7889] after:absolute after:right-[0px] after:top-[50%] after:translate-y-[-50%]'>{dayAndMonth}</p>
                <span className='text-[25px] text-[#5A7889] font-semibold'>{year}</span>
            </div>
            <div className='w-full h-[200px] px-[30px] font-light  relative flex flex-col justify-center'>
                <h4 className='text-[20px]'>{post.title}</h4>
                <p className='text-[#B0B0B0]'>{post.contents}</p>
                <button className='absolute bottom-0 right-[30px] flex-center gap-[5px]'>Czytaj dalej <Icon icon="icon-park-outline:double-right" width="20px" height="20px" /></button>
            </div>
        </div>
    )
}

export default Posts