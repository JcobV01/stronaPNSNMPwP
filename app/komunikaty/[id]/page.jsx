'use client'

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';

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
        <Link href="/komunikaty" className='flex items-center gap-[5px]'>
          <Icon icon="icon-park-outline:double-left" alt="Ikona strzałek w lewo" width="20px" height="20px" />
          <span>Powrót do strony głównej</span>
        </Link>
        <span className='flex w-full justify-end text-[18px] font-semibold text-[#5A7889]'>{formattedDate}</span>
        <h3 className='mt-[15px] text-[25px] font-semibold tracking-[3px]'>{post.title}</h3>
        {post.contents && post.contents.length > 0 && (
          <p className='mt-[15px] text-[18px] tracking-[1px]' style={{ whiteSpace: 'pre-line' }}>{post.contents}</p>
        )}
        {post.img && post.img.length > 0 && (
          <div className='mt-[30px] flex-center'>
            <Image src={`/assets/images/posts/${post.img}`} width={500} height={500} alt="Zdjęcie związane z wpisem" />
          </div>
        )}
      </article>
    </section>
  )
}

export default komunikat