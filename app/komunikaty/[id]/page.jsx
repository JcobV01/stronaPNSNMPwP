'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

const komunikat = ({ params }) => {
  const router = useRouter();
  const postId = params.id;
  const [post, setPost] = useState({
    date: '',
    title: '',
    category: '',
    contents: '',
    img: '',
  });

  useEffect(() => {
    const getPostDetails = async () => {
      const response = await fetch(`/api/post/${postId}`)
      const data = await response.json();

      setPost({
        title: data.title,
        date: data.date,
        category: data.category,
        contents: data.contents,
        img: data.img,
      })

    }

    if (postId) getPostDetails();
  }, [postId])

  const formattedDate = post.date ? new Date(post.date).toLocaleString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }) : '';
  
  return (
    <section className='py-[50px] flex-center'>
      <article className='w-[1000px] p-[25px]'>
        <span className='flex w-full justify-end text-[18px] font-semibold text-[#5A7889]'>{formattedDate}</span>
        <h3 className='mt-[15px] text-[25px] font-semibold tracking-[3px]'>{post.title}</h3>
        <p className='mt-[15px] text-[18px] tracking-[1px]' style={{ whiteSpace: 'pre-line' }}>{post.contents}</p>
        {post.img && post.img.length > 0 && (
          <Image src={`/assets/images/posts/${post.img}`} width={500} height={500} alt="Zdjęcie związane z wpisem" />
        )}
      </article>
    </section>
  )
}

export default komunikat