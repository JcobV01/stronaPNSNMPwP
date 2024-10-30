import React from 'react'

const PostFormHistory = ({type, createPost, error, post, handleChange, handleFileChange, submitting}) => {
    return (
        <form onSubmit={createPost} encType="multipart/form-data">
            {error && <span className='text-red-700 font-semibold tracking-[2px] xl:text-[15px]'>{error}</span>}
            <div className='flex mt-[10px] gap-[10px]'>
                <input type="text" name='title' value={post.title} onChange={handleChange} placeholder='Tytuł' className='w-[75%] p-[10px] rounded-[5px] outline-[#5A7889]' />
                <input type="date" name='date'  value={post.date ? post.date.split('T')[0] : ''} onChange={handleChange} className="w-[25%] p-[10px] rounded-[5px] outline-[#5A7889]" />
            </div>

            <textarea name='contents' placeholder="Treść" value={post.contents} onChange={handleChange} className='h-[500px] w-full mt-[15px] p-[10px] rounded-[5px] outline-[#5A7889]' style={{ resize: 'none' }}></textarea>

            <div className='mt-[15px]'>
                <label className="text-[18px]" htmlFor="file_input">Dodaj zdjęcie (opcjonalnie)</label>
                <input name="img" className="w-full border rounded-[5px] cursor-pointer bg-white" onChange={handleFileChange} type="file" />
            </div>

            <div className='flex justify-center mt-[35px]'>
                <button disabled={submitting} className='bg-[#11161A] text-white w-[200px] h-[50px] rounded-[10px] text-[18px] tracking-[2px] font-light'>{submitting ? 'Przesyłanie' : `${type}`}</button>
            </div>

        </form>
    )
}

export default PostFormHistory