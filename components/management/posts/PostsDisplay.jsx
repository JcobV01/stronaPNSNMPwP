'use client'

import React, { useEffect, useState } from 'react'
import Posts from './Posts';
import { useRouter } from 'next/navigation';

const PostsDisplay = () => {
    const [posts, setPosts] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/post');
            const data = await response.json();

            setPosts(data);

        }
        
        fetchPosts();
    }, []);

    const handleEdit = (post) => {
        router.push(`komunikaty/edytuj?id=${post._id}`)
    }

    const handleDelete = async (post) => {
        const hasConfirmed = confirm("Czy jesteś pewny, że chcesz usunąć post?")

        if(hasConfirmed){
            try {
                await fetch(`/api/post/${post._id.toString()}`, {
                    method: 'DELETE'
                });

                const filteredPosts = posts.filter((p) => p._id !== post._id);

                setPosts(filteredPosts)
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
        </article>
    )
}

export default PostsDisplay