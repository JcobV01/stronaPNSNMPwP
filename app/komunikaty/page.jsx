'use client'

import React, { useEffect, useState } from 'react'
import Posts from '@components/messages/Posts'
import Title from '@components/Title'
import { Icon } from '@iconify/react'
import Pagination from '@components/messages/Pagination'

const komunikaty = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/post?page=${currentPage}&limit=${postsPerPage}&search=${searchTerm}`);
        const data = await response.json();

        console.log('Fetched data:', data);

        setPosts(data.posts);
        setTotalPosts(data.totalPosts);
      } catch (error) {
        console.log("Błąd poczas pobierania postów:", error);
      }
    }

    fetchPosts();
  }, [currentPage, searchTerm]);

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <section className='flex-center flex-col pb-[250px]'>
      <div className='relative top-[-30px]'>
        <input type="search" value={searchTerm} onChange={handleSearchChange} placeholder="Wyszukaj po tytule" className='w-[815px] h-[60px] rounded-[30px] pl-[55px] pr-[65px] outline-none lg:w-[600px] sm:w-[100%]' />
        <Icon icon="stash:search" width="40px" height="40px" className='text-[#5A7889] absolute top-[10px] right-[25px]' />
      </div>
      <Title title="Komunikaty" title2="" subtitle="Najnowsze posty" />
      <article className='mt-[50px]'>
        {posts?.map((post) => (
          <Posts key={post._id} post={post} />
        ))}
      </article>
      {totalPages > 1 && (
        <Pagination handleNextPage={handleNextPage} handlePageChange={handlePageChange} handlePrevPage={handlePrevPage} currentPage={currentPage} totalPages={totalPages} />
      )}
    </section>
  )
}

export default komunikaty