import Image from 'next/image';
import React from 'react'

const HistoryPosts = ({ post, index }) => {
    const date = new Date(post.date).toLocaleString('pl-PL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const hasImage = post.img && post.img !== null;

    return (
        <article className={`w-[1500px] mt-[50px] flex flex-col justify-center 2xl:w-[1250px] xl:w-[1000px] lg:w-[90%]`}>
            <div className={`text-${index % 2 === 0 ? 'left' : 'right'}`}>
                <span className={`text-[#B0B0B0]`}>{date}</span>
                <h4 className='text-black text-[25px] font-semibold tracking-[2.5px] uppercase lg:text-[22px]'>{post.title}</h4>
            </div>
            <div className={`flex items-center gap-[100px] mt-[15px] ${index % 2 === 0 ? '' : ' flex-row-reverse'} lg:flex-col`}>
                <p className={`${hasImage ? 'w-[1000px] 2xl:w-[750px] xl:w-[600px] lg:w-full' : 'w-full'} text-${index % 2 === 0 ? 'left' : 'right'} text-[#353535] tracking-[2px] font-light sm:text-[14px]`} style={{ whiteSpace: 'pre-line' }}>{post.contents}</p>

                {hasImage && (
                    <Image src={`/assets/images/history/${post.img}`} alt={post.title} width={500} height={350} className='aspect-[10/7] max-w-[500px] max-h-[350px] object-cover shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)] xl:max-w-[400px] sm:max-w-[300px]' />
                )}
            </div>

        </article>
    )
}

export default HistoryPosts