"use client"
import React, { useRef } from 'react'

const IntentionsAcordeon = ({ hour, intention, id }) => {
    const contentRef = useRef(null)
    const handleOpen = (e) => {
        const elements = document.querySelectorAll('.acordeon-content')
        elements.forEach((el) => el.style.maxHeight = '0px')

        if (contentRef.current.style.maxHeight !== '0px') {
            contentRef.current.style.maxHeight = '0';
        } else {
            contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
        }
    }

    return (
        <>
            <div class="border-b border-slate-200">
                <button onClick={() => handleOpen()} class="w-full flex justify-between items-center py-[10px] text-slate-800">
                    <span className='text-[#5A7889]  text-[16px] tracking-[5px] font-semibold'>{hour}</span>
                    <span class="text-slate-800 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                        </svg>
                    </span>
                </button>
                <div ref={contentRef} class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out acordeon-content">
                    <div class="pb-5 text-sm text-[#353535]">{intention}</div>
                </div>
            </div>
        </>

    )
}

export default IntentionsAcordeon