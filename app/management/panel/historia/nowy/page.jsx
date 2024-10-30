'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import PostFormHistory from '@components/management/historia/PostFormHistory';

const page = () => {
    const [submitting, setsubmitting] = useState(false);
    const [error, setError] = useState();
    const [post, setPost] = useState({
        title: '',
        date: '',
        contents: '',
        img: null,
    });

    const router = useRouter();
    const session = useSession();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setPost((prevPost) => ({
            ...prevPost,
            img: file,
        }));
    };

    console.log(post);

    const createPost = async (e) => {
        setsubmitting(true);
        e.preventDefault();

        const formData = new FormData();

        formData.append("title", post.title);
        formData.append("date", post.date);
        formData.append("contents", post.contents);
        formData.append("img", post.img);
        formData.append("author", session.data?.user?.name);
        try {

            const response = await fetch('/api/history/new', {
                method: "POST",
                body: formData,
            })

            if (!post.title || !post.contents || !post.date) {
                setError("Wszystkie pola muszą być wypełnione");
                return;
            }

            if (response.ok) {
                router.push('/management/panel/historia');
            }

        } catch (error) {
            setError("Wystąpił błąd podczas tworzenia posta");
        } finally {
            setsubmitting(false);
        }
    }


    return (
        <section className='mt-[15px]'>
            <h2 className='text-[22px] font-light'>Dodaj nowy wpis do historii</h2>
            <PostFormHistory
                type="Dodaj"
                createPost={createPost}
                error={error}
                post={post}
                handleChange={handleChange}
                handleFileChange={handleFileChange}
                submitting={submitting} />
        </section>
    )
}

export default page