'use client'

import PostsForm from '@components/management/posts/PostsForm';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const nowy = () => {
    const [submitting, setsubmitting] = useState(false);
    const [currentDataTime, setCurrentDataTime] = useState('');
    const [post, setPost] = useState({
        title: '',
        category: '',
        contents: '',
    });

    const router = useRouter();
    const session = useSession();

    const createPost = async (e) => {
        e.preventDefault();
        setsubmitting(true);

        try {
            const response = await fetch('/api/post/new', {
                method: "POST",
                body: JSON.stringify({
                    title: post.title,
                    author: session.data?.user?.name,
                    date: currentDataTime,
                    category: post.category,
                    contents: post.contents,
                }),
            })

            console.log(post.title, session.data?.user?.name, currentDataTime, post.category, post.contents)


            if (response.ok) {
                router.push('/management/panel/komunikaty');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setsubmitting(false);
        }
    }

    return (
        <section className='flex-center mt-[20px]'>
            <PostsForm
                type='Utwórz'
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={createPost}
                currentDataTime={currentDataTime}
                setCurrentDataTime={setCurrentDataTime}
            />
        </section>
    )
}

export default nowy