'use client'

import React, { useEffect, useState } from 'react'
import Title from '@components/Title'
import HistoryPosts from '@components/history/HistoryPosts'

const historia = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/history/download`);
        const data = await response.json();

        setPosts(data.posts);
      } catch (error) {
        console.log("Błąd poczas pobierania postów:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <section className='flex-center flex-col pb-[250px] pt-[50px]'>
      <Title title="Historia" title2="" subtitle="Dzieje Parafii" />
      {posts?.map((post, index) => (
        <HistoryPosts key={post._id} post={post} index={index} className="post" />
      ))}
    </section>
  )
}

export default historia