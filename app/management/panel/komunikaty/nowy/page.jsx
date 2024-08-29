'use client'

import MessagesForm from '@components/management/messages/MessagesForm';
import React, { useState } from 'react'

const page = () => {
    const [submitting, setsubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    const createPrompt = async (e) => {

    }
    return (
        <section className='mt-[20px]'>
            <MessagesForm
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={createPrompt}
            />
        </section>
    )
}

export default page