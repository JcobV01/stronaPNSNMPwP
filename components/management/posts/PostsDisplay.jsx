'use client'

import React, { useEffect, useState } from 'react'
import Posts from './Posts';
import { useRouter } from 'next/navigation';

const PostsDisplay = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);

    const router = useRouter();
    const postsPerPage = 4;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`/api/post?page=${currentPage}&limit=${postsPerPage}`);
                const data = await response.json();

                console.log('Fetched data:', data);

                setPosts(data.posts);
                setTotalPosts(data.totalPosts);
            } catch (error) {
                console.log("Błąd poczas pobierania postów:", error);
            }
        }

        fetchPosts();
    }, [currentPage]);

    const totalPages = Math.ceil(totalPosts / postsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const handleEdit = (post) => {
        router.push(`komunikaty/edytuj?id=${post._id}`)
    }

    const handleDelete = async (post) => {
        const hasConfirmed = confirm("Czy jesteś pewny, że chcesz usunąć post?")

        if (hasConfirmed) {
            try {
                await fetch(`/api/post/${post._id.toString()}`, {
                    method: 'DELETE'
                });

                const filteredPosts = posts.filter((p) => p._id !== post._id);

                setPosts(filteredPosts);
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <article>
            {posts?.map((post) => (
                <Posts
                    key={post._id}
                    post={post}
                    handleEdit={() => handleEdit && handleEdit(post)}
                    handleDelete={() => handleDelete && handleDelete(post)}
                />
            ))}
            <div className='flex items-center justify-end mt-[20px] gap-2'>
                <button onClick={() => handlePageChange(1)} disabled={currentPage === 1} className='text-[24.5px] font-light'>&laquo;</button>
                <button onClick={handlePrevPage} disabled={currentPage === 1} className='text-[20px] font-light'>&lt;</button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
                    <button key={page} onClick={() => handlePageChange(page)} className={currentPage === page ? 'font-medium text-[25px]': 'font-light text-[20px]'}>{page}</button>
                ))}
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className='text-[20px] font-light'>&gt;</button>
                <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} className='text-[24.5px] font-light'>&raquo;</button>
            </div>
        </article>
    )
}

export default PostsDisplay