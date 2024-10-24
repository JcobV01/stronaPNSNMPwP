import React from 'react'
import { Bold, Strikethrouth, Italic, List, ListOrdered, Heading2, Heading3, Underline, Quote, Undo, Redo, Code, AlignCenter, AlignLeft, AlignRight, sinkListItem } from 'lucide-react'


const Toolbar = ({ content, editor }) => {
    if (!editor) {
        return null
    }

    return (
        <div className='py-[30px] border-b-[1px] border-[#d7d7d7]'>
            <div className='flex justify-center items-center gap-5 w-full'>
                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBold().run()
                    }}
                    className={
                        `${editor.isActive("bold") ? 'bg-[#ebebeb]' : 'bg-white'} p-[5px] rounded-[2px]`
                    }
                    >
                    <Bold/>
                </button>

                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleItalic().run()
                    }}
                    className={
                        `${editor.isActive("italic") ? 'bg-[#ebebeb]' : 'bg-white'} p-[5px] rounded-[2px]`
                    }>
                    <Italic/>
                </button>

                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleUnderline().run()
                    }}
                    className={
                        `${editor.isActive("underline") ? 'bg-[#ebebeb]' : 'bg-white'} p-[5px] rounded-[2px]`
                    }>
                    <Underline/>
                </button>


                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().setTextAlign('left').run()
                    }}
                    className={
                        `${editor.isActive({textAlign: 'left'}) ? 'bg-[#ebebeb]' : 'bg-white'} p-[5px] rounded-[2px]`
                    }>
                    <AlignLeft/>
                </button>

                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().setTextAlign('center').run()
                    }}
                    className={
                        `${editor.isActive({textAlign: 'center'}) ? 'bg-[#ebebeb]' : 'bg-white'} p-[5px] rounded-[2px]`
                    }>
                    <AlignCenter/>
                </button>
                
                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().setTextAlign('right').run()
                    }}
                    className={
                        `${editor.isActive({textAlign: 'right'}) ? 'bg-[#ebebeb]' : 'bg-white'} p-[5px] rounded-[2px]`
                    }>
                    <AlignRight/>
                </button>

                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().setHeading({level: 2}).run()
                    }}
                    className={
                        `${editor.isActive('heading', {level: 2}) ? 'bg-[#ebebeb]' : 'bg-white'} p-[5px] rounded-[2px]`
                    }>
                    <Heading2/>
                </button>

                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().setHeading({level: 3}).run()
                    }}
                    className={
                        `${editor.isActive('heading', {level: 3}) ? 'bg-[#ebebeb]' : 'bg-white'} p-[5px] rounded-[2px]`
                    }>
                    <Heading3/>
                </button>

                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleOrderedList().run()
                    }}
                    className={
                        `${editor.isActive("orderedList") ? 'bg-[#ebebeb]' : 'bg-white'} p-[5px] rounded-[2px]`
                    }>
                    <ListOrdered/>
                </button>

                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBulletList().run()
                    }}
                    className={
                        `${editor.isActive("bulletList") ? 'bg-[#ebebeb]' : 'bg-white'} p-[5px] rounded-[2px]`
                    }>
                    <List/>
                </button>

                <button 
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().sinkListItem('listItem').run()
                    }}>
                    <p>Wciel do listy</p>
                </button>

            </div>
        </div>
    )
}

export default Toolbar