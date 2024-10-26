'use client'

import React, { useEffect, useState } from 'react'
import Posts from './Posts';
import { useRouter } from 'next/navigation';
import Pagination from '@components/messages/Pagination';

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
            <Pagination handleNextPage={handleNextPage} handlePageChange={handlePageChange} handlePrevPage={handlePrevPage} currentPage={currentPage} totalPages={totalPages} />
        </article>
    )
}

export default PostsDisplay