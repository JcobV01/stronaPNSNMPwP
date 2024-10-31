'use client'

import PostsForm from '@components/management/posts/PostsForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const nowy = () => {
    const [submitting, setsubmitting] = useState(false);
    const [currentDataTime, setCurrentDataTime] = useState('');
    const [error, setError] = useState('');
    const [post, setPost] = useState({
        title: '',
        category: '',
        contents: '',
        img: '',
    });

    const router = useRouter();
    const session = useSession();

    const createPost = async (e) => {
        setsubmitting(true);
        e.preventDefault();
        
        
        try {
            const response = await fetch('/api/post/new', {
                method: "POST",
                body: JSON.stringify({
                    title: post.title,
                    author: session.data?.user?.name,
                    date: currentDataTime,
                    category: post.category,
                    contents: post.contents,
                    img: post.img,
                }),
            })
            
            console.log(post);

            if (!post.title || !post.category ) {
                setError("Wszystkie pola muszą być wypełnione");
                return;
            }

            if (response.ok) {
                router.push('/management/panel/komunikaty');
            }
            
        } catch (error) {
            setError("Wystąpił błąd podczas tworzenia posta");
        } finally {
            setsubmitting(false);
        }
    }


    return (
        <section className='flex-center flex-col mt-[20px] w-full'>
            {error && <span className='text-red-700 font-light tracking-[2px] mb-[5px]'>{error}</span>}
            <PostsForm
                type='Utwórz'
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={createPost}
                currentDataTime={currentDataTime}
                setCurrentDataTime={setCurrentDataTime}
                error={error}
            />
        </section>
    )
}

export default nowy