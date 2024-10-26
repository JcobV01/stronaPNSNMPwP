'use client'

import React from 'react'
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';

const Posts = ({ post }) => {
    const date = new Date(post.date);
    const router = useRouter();

    const dayAndMonth = date.toLocaleString('pl-PL', {
        day: 'numeric',
        month: 'long',
    });

    const year = date.toLocaleString('pl-PL', {
        year: 'numeric',
    })

    const handleClick = () => {
        router.push(`komunikaty/${post._id}`);
    }


    return (
        <div className='flex bg-[#fff] w-[1000px] h-[250px] items-center mt-[15px] border-l-[5px] border-[#5A7889] lg:w-[90%] lg:mx-auto sm:flex-col'>
            <div className='w-[285px] flex-center flex-col relative sm:w-[90%]'>
                <p className='text-[25px] font-extralight text-center after:content-[""] after:w-[2.5px] after:h-[100px] after:bg-[#5A7889] after:absolute after:right-[0px] after:top-[50%] after:translate-y-[-50%] lg:text-[22.5px] sm:mt-[15px] sm:after:h-[2.5px] sm:after:w-[100px] sm:after:left-[50%] sm:after:translate-x-[-50%] sm:after:translate-y-0 sm:after:top-auto sm:after:bottom-[-15px]'>{dayAndMonth}</p>
                <span className='text-[25px] text-[#5A7889] font-semibold lg:text-[20px]'>{year}</span>
            </div>
            <div className='w-full h-[200px] px-[30px] font-light relative flex flex-col justify-center sm:px-[10px]'>
                <h4 className='text-[20px] lg:text-[18px] md:line-clamp-2'>{post.title}</h4>
                <p className='text-[#B0B0B0] line-clamp-2 lg:text-[15px]'>{post.contents}</p>
                <button onClick={handleClick} className='absolute bottom-0 right-[30px] flex-center gap-[5px] sm:bottom-[5px]'>Czytaj dalej <Icon icon="icon-park-outline:double-right" alt="Ikona strzałek w prawo" width="20px" height="20px" /></button>
            </div>
        </div>
    )
}

export default Posts