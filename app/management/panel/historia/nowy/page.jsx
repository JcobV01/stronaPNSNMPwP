'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

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

        try {
            const response = await fetch('/api/history/new', {
                method: "POST",
                body: JSON.stringify({
                    title: post.title,
                    date: post.date,
                    contents: post.contents,
                    img: post.img,
                    author: session.data?.user?.name,
                }),
            })

            if (!post.title || !post.contents) {
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
            <form onSubmit={createPost}>
                {error && <span className='text-red-700 font-semibold tracking-[2px] xl:text-[15px]'>{error}</span>}
                <div className='flex mt-[10px] gap-[10px]'>
                    <input type="text" name='title' value={post.title} onChange={handleChange} placeholder='Tytuł' className='w-[75%] p-[10px] rounded-[5px] outline-[#5A7889]' />
                    <input type="date" name='date' value={post.date} onChange={handleChange} className="w-[25%] p-[10px] rounded-[5px] outline-[#5A7889]" />
                </div>

                <textarea name='contents' placeholder="Treść" value={post.contents} onChange={handleChange} className='h-[500px] w-full mt-[15px] p-[10px] rounded-[5px] outline-[#5A7889]' style={{ resize: 'none' }}></textarea>

                <div className='mt-[15px]'>
                    <label className="text-[18px]" htmlFor="file_input">Dodaj zdjęcie (opcjonalnie)</label>
                    <input className="w-full border rounded-[5px] cursor-pointer bg-white" onChange={handleFileChange} type="file" />
                </div>

                <div className='flex justify-center mt-[35px]'>
                    <button disabled={submitting} className='bg-[#11161A] text-white w-[200px] h-[50px] rounded-[10px] text-[18px] tracking-[2px] font-light'>{submitting ? 'Przesyłanie' : 'Dodaj'}</button>
                </div>

            </form>
        </section>
    )
}

export default page