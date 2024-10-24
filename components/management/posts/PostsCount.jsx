'use client'
import React, { useEffect, useState } from 'react'

const PostsCount = () => {
    const [postCount, setPostCount] = useState(0);

    useEffect(() => {
        const fetchPostCount = async () => {
            try {
                const response = await fetch('/api/post/count');
                if(response.ok){
                    const data = await response.json();
                    setPostCount(data.count);
                } else {
                    console.log('Błąd podczas pobierania liczby postów');
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchPostCount();
    }, []);

    return (
        <span>{postCount}</span>
    )
}

export default PostsCount