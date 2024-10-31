'use client'

import PostFormHistory from '@components/management/historia/PostFormHistory';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const edytuj = () => {
  const [submitting, setsubmitting] = useState(false);
  const [error, setError] = useState();
  const [post, setPost] = useState({
    title: '',
    date: '',
    contents: '',
    img: null,
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get('id');

  useEffect(() => {
    const getPostDetails = async () => {
      const response = await fetch(`/api/history/${postId}`)
      const data = await response.json();

      setPost({
        title: data.title,
        date: data.date,
        contents: data.contents,
        img: data.img,
      })

      console.log(data);
    }

    if (postId) getPostDetails();
  }, [postId])

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

    const formData = new FormData();

    formData.append("title", post.title);
    formData.append("date", post.date);
    formData.append("contents", post.contents);
    formData.append("img", post.img);
    try {

      const response = await fetch(`/api/history/${postId}`, {
        method: "PATCH",
        body: formData,
      })

      if (!post.title || !post.contents || !post.date) {
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

  console.log(post);

  return (
    <section className='mt-[15px] w-full'>
      <h2 className='text-[22px] font-light'>Edytuj wpis do historii</h2>
      <PostFormHistory
        type="Edytuj"
        createPost={createPost}
        error={error}
        post={post}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        submitting={submitting}
      />
    </section>
  )
}

export default edytuj