'use client'


import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect, useState } from 'react'
import Toolbar from './Toolbar'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align';

const EditorText = ({ content, onChange, update, setUpdate }) => {

  const handleChange = (newContent) => {
    onChange(newContent)
  }

  const editor = useEditor({
    extensions: [StarterKit, Underline, TextAlign.configure({types: ['heading', 'paragraph'], alignments: ['left', 'right', 'center'],})],
    editorProps: {
      attributes: {
        class: "flex flex-col px-4 py-3 justify-start outline-none"
      }
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML())
    },
    content: content
  })

  useEffect(() => {
    if(editor && update && content.length > 0){
      editor.commands.setContent(content)
      setUpdate(false)
    }
  }, [content])

  return (
    <div className='bg-[#ffffff] p-[20px]'>
      <Toolbar editor={editor} content={content} />
      <EditorContent style={{ whiteSpace: "pre-line", outline: 'none', border: 'none' }} editor={editor} />
    </div>
  )

}

export default EditorText
