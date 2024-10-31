'use client'

import React, { useEffect, useRef, useState } from 'react'
import Title from '@components/Title'
import HistoryPosts from '@components/history/HistoryPosts'

const historia = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(5); // Liczba początkowo widocznych postów
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef(null);
  const [page, setPage] = useState(0);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/history/download?limit=${visiblePosts}&page=${page}`); // Dodanie parametru page
        const data = await response.json();

        if (data.posts.length > 0) {
          // Dodawanie nowych postów do istniejących
          setPosts((prevPosts) => {
            const existingIds = new Set(prevPosts.map(post => post._id)); // Zbiór istniejących ID
            return [...prevPosts, ...data.posts.filter(post => !existingIds.has(post._id))]; // Dodaj tylko nowe posty
          });
        } else {
          setHasMorePosts(false);
        }
      } catch (error) {
        console.log("Błąd podczas pobierania postów:", error);
      } finally {
        setLoading(false); // Ustawienie loading na false po zakończeniu fetch
      }
    };

    fetchPosts();
  }, [visiblePosts, page]);

  const loadMorePosts = () => {
    if (!loading, hasMorePosts) {
      setPage((prev) => prev + 1);
      setVisiblePosts((prev) => prev + 5);
      setLoading(false); // Dodaj 5 kolejnych postów
    }
  };

  // Użyj Intersection Observer do obserwowania, kiedy użytkownik zbliża się do końca listy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMorePosts();
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loading, hasMorePosts]);

  return (
    <section className='flex-center flex-col pb-[250px] pt-[50px]'>
      <Title title="Historia" title2="" subtitle="Dzieje Parafii" />
      {posts.slice(0, visiblePosts).map((post, index) => (
        <HistoryPosts key={post._id} post={post} index={index} />
      ))}
      <div ref={loadMoreRef} className='mt-[50px]'>
        {loading &&
          <div className='flex flex-col items-center justify-center'>
            <div className='loader'></div>
            <span className='mt-[15px] text-[18px] tracking-[2px]'>Ładowanie postów</span>
          </div>
        }
      </div>
    </section>
  )
}

export default historia