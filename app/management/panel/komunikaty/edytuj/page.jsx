'use client'

import PostsForm from '@components/management/posts/PostsForm';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react'

const EditContent = () => {
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
    const searchParams = useSearchParams();
    const postId = searchParams.get('id');

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

            console.log(data);
        }

        if (postId) getPostDetails();
    }, [postId])

    const updatePost = async (e) => {
        e.preventDefault();
        setsubmitting(true);

        if (!postId) return alert('Nie znaleziono ID postu');

        try {
            const response = await fetch(`/api/post/${postId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    title: post.title,
                    date: post.date,
                    category: post.category,
                    contents: post.contents,
                    img: post.img,
                }),
            });

            if (!post.title || !post.category ) {
                setError("Wszystkie pola muszą być wypełnione");
                return;
            }

            if (response.ok) {
                router.push('/management/panel/komunikaty');
            }
        } catch (error) {
            setError("Wystąpił błąd podczas edycji posta");
        } finally {
            console.log(post)
            setsubmitting(false);
        }
    }

    return (
        <section className='flex-center mt-[20px] w-full'>
            {error && <span className='text-red-700 font-light tracking-[2px] mb-[5px]'>{error}</span>}
            <PostsForm
                type='Edytuj'
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={updatePost}
                currentDataTime={currentDataTime}
                setCurrentDataTime={setCurrentDataTime}
            />
        </section>
    )
}

const page = () => {
    return (
        <Suspense fallback="Ładowanie...">
            <EditContent/>
        </Suspense>
    )
}

export default page