'use client'


import { getCurrentDataTime } from '@utils/datatime';
import Link from 'next/link';
import React, { useEffect } from 'react'

const PostsForm = ({ type, post, setPost, submitting, handleSubmit, currentDataTime, setCurrentDataTime }) => {

    useEffect(() => {
        const dataTime = getCurrentDataTime();
        setCurrentDataTime(dataTime);
    }, [post.date, setCurrentDataTime]);

    const formatDateForInput = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const formattedDate = date.toISOString().slice(0, 16); // Usuwa sekundy i milisekundy
        return formattedDate;
    };

    return (
        <form onSubmit={handleSubmit} className='flex-center flex-col space-y-5'>
            <input type='text' placeholder="Tytuł" name='title' value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} required className="text-[#353535] bg-gray-50 py-[10px] px-[10px] w-[750px] tracking-[0.5px] border-2 border-gray-300 rounded-[5px]" />
            <input type='text' placeholder="Kategoria" name='category' value={post.category} onChange={(e) => setPost({ ...post, category: e.target.value })} className="text-[#353535] bg-gray-50 py-[10px] px-[10px] w-[750px] tracking-[0.5px] border-2 border-gray-300 rounded-[5px]" required />
            <input type="datetime-local" name='date' value={formatDateForInput(post.date) || currentDataTime} onChange={(e) => setPost({ ...post, date: e.target.value })} className="text-[#353535] bg-gray-50 py-[10px] px-[10px] w-[750px] tracking-[0.5px] border-2 border-gray-300 rounded-[5px]" />
            <textarea placeholder="Treść" value={post.contents} onChange={(e) => setPost({ ...post, contents: e.target.value })} style={{ resize: "none" }} required className="text-[#353535] bg-gray-50 py-[10px] px-[10px] w-[750px] h-[500px] tracking-[0.5px] border-2 border-gray-300 rounded-[5px]" />
            <div className='flex justify-between w-[750px] text-white text-[20px]'>
                <Link href="/management/panel/komunikaty" className='bg-red-500 px-[50px] py-[10px] rounded-[5px]'>Anuluj</Link>
                <button type="submit" disabled={submitting} className='bg-[#11161A] px-[50px] py-[10px] rounded-[5px]'>{type} wpis</button>
            </div>
        </form>
    )
}

export default PostsForm