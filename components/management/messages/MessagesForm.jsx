import React from 'react'

const MessagesForm = ({post, setPost, submitting, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className='flex-center flex-col space-y-5'>
            <input type='text' placeholder="Tytuł" title='title' required/>
            <input type='text' placeholder="Kategoria" name='category' required/>
            <input type="datetime-local" id="datetime-input"/>
        </form>
    )
}

export default MessagesForm