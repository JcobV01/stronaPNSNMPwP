"use client"

import React, { useState } from 'react'
import EditorText from './EditorText'
import EditorHtml from './EditorHtml'

const EditDialog = ({ actualAnn, prevAnn, annType, dialogRef, setEditContent, update, setUpdate, setNewColor, updateAnnouncements }) => {
    const [mode, setMode] = useState('text')

    const handleChangeMode = (mode) => {
        setUpdate(true)
        setMode(mode)
    }

    return (
        <dialog ref={dialogRef} className='w-[80%] h-[80%] rounded-[10px] backdrop:bg-[#00000098] p-[50px] bg-[#f0f0f0] box-border'>
            <article className='flex flex-col gap-[20px]'>
                <article>
                    <p className='text-center text-lg font-medium text-[20px] py-[20px]'>Edycja ogłoszeń</p>

                    <div className='flex justify-center gap-[20px] py-[10px]'>
                        <p onClick={() => handleChangeMode('text')} className='cursor-pointer'>Tryb tekstowy</p>
                        <p onClick={() => handleChangeMode('html')} className='cursor-pointer'>Tryb html</p>
                    </div>

                    {mode == 'text' ?
                        <EditorText content={annType == "actual" ? actualAnn.html : prevAnn.html} onChange={(newContent) => setEditContent(newContent)} update={update} setUpdate={setUpdate} />
                        :
                        <EditorHtml content={annType == "actual" ? actualAnn.html : prevAnn.html} onChange={(newContent) => setEditContent(newContent)} update={update} setUpdate={setUpdate} />
                    }
                </article>

                <div className='h-[50px] w-full'>
                    <select name="color" onChange={(e) => setNewColor(e.target.value)} className='outline-none border-none h-[50px] rounded-[5px] pl-[20px] w-full'>
                        <option value="announcement-green" selected={annType == "actual" && actualAnn.color == "announcement-green" ? 'selected' : annType == "prev" && prevAnn.color == "announcement-green" ? 'selected' : '' }>Zielony</option>
                        <option value="announcement-red" selected={annType == "actual" && actualAnn.color == "announcement-red" ? 'selected' : annType == "prev" && prevAnn.color == "announcement-red" ? 'selected' : '' }>Czerwony</option>
                        <option value="announcement-gold" selected={annType == "actual" && actualAnn.color == "announcement-gold" ? 'selected' : annType == "prev" && prevAnn.color == "announcement-gold" ? 'selected' : '' }>Złoty</option>
                        <option value="announcement-purple" selected={annType == "actual" && actualAnn.color == "announcement-purple" ? 'selected' : annType == "prev" && prevAnn.color == "announcement-purple" ? 'selected' : '' }>Fioletowy</option>
                        <option value="announcement-pink" selected={annType == "actual" && actualAnn.color == "announcement-pink" ? 'selected' : annType == "prev" && prevAnn.color == "announcement-pink" ? 'selected' : '' }>Różowy</option>
                    </select>
                </div>

                <div className='flex gap-[10px] w-full'>
                    <button onClick={() => updateAnnouncements()} className='bg-[#0e5115] text-white py-2 px-4 rounded-md flex-1'>Zapisz</button>
                    <button onClick={() => dialogRef.current.close()} className='bg-[#8a1616] text-white py-2 px-4 rounded-md flex-1'>Anuluj</button>
                </div>
            </article>
        </dialog>
    )
}

export default EditDialog