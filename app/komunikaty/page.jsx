'use client'

import React, { useEffect, useState } from 'react'
import Posts from '@components/messages/Posts'
import Title from '@components/Title'
import { Icon } from '@iconify/react'

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
        <input type="search" value={searchTerm} onChange={handleSearchChange} placeholder="Wyszukaj po tytule" className='w-[815px] h-[60px] rounded-[30px] pl-[55px] pr-[25px] outline-none' />
        <Icon icon="stash:search" width="40px" height="40px" className='text-[#5A7889] absolute top-[10px] right-[25px]' />
      </div>
      <Title title="Komunikaty" title2="" subtitle="Najnowsze posty" />
      <article className='mt-[50px]'>
        {posts?.map((post) => (
          <Posts key={post._id} post={post} />
        ))}
      </article>
      {totalPages > 1 && (
        <div className='flex items-center justify-end mt-[20px] gap-2'>
          <button onClick={() => handlePageChange(1)} disabled={currentPage === 1} className='text-[24.5px] font-light'>&laquo;</button>
          <button onClick={handlePrevPage} disabled={currentPage === 1} className='text-[20px] font-light'>&lt;</button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
            <button key={page} onClick={() => handlePageChange(page)} className={currentPage === page ? 'font-medium text-[25px]' : 'font-light text-[20px]'}>{page}</button>
          ))}
          <button onClick={handleNextPage} disabled={currentPage === totalPages} className='text-[20px] font-light'>&gt;</button>
          <button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} className='text-[24.5px] font-light'>&raquo;</button>
        </div>
      )}
    </section>
  )
}

export default komunikaty