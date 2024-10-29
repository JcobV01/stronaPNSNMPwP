'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import Pagination from '@components/messages/Pagination';
import Messages from './Messages';

const PostsDisplay = () => {
    const [messages, setMessages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalMessages, setTotalMessages] = useState(0);

    const router = useRouter();
    const postsPerPage = 5;

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch(`/api/contact/download?page=${currentPage}&limit=${postsPerPage}`);
                const data = await response.json();

                console.log('Fetched data:', data);

                setMessages(data.messages);
                setTotalMessages(data.totalMessages);
            } catch (error) {
                console.log("Błąd poczas pobierania wiadomości:", error);
            }
        }

        fetchMessages();
    }, [currentPage]);

    const totalPages = Math.ceil(totalMessages / postsPerPage);

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

    const handleDetails = (message) => {
        router.push(`wiadomosci/szczegoly?id=${message._id}`);
    }

    const handleDelete = async (message) => {
        const hasConfirmed = confirm("Czy jesteś pewny, że chcesz usunąć wiadomość?")

        if (hasConfirmed) {
            try {
                await fetch(`/api/contact/${message._id.toString()}`, {
                    method: 'DELETE'
                });

                const filteredMessages = messages.filter((m) => m._id !== message._id);

                setMessages(filteredMessages);
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
        }
    }

    console.log(messages);


    return (
        <article>
            {messages?.map((message) => (
                <Messages
                    key={message._id}
                    messages={message}
                    handleDelete={() => handleDelete && handleDelete(message)}
                    handleDetails={() => handleDetails && handleDetails(message)}
                />
            ))}
            <Pagination handleNextPage={handleNextPage} handlePageChange={handlePageChange} handlePrevPage={handlePrevPage} currentPage={currentPage} totalPages={totalPages} />
        </article>
    )
}

export default PostsDisplay