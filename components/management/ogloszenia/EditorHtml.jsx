import React from 'react'

const EditorHtml = ({ content, onChange, update, setUpdate }) => {

    const handleChange = (newContent) => {
        onChange(newContent)
      }


      function formatHTML(html) {
        const tagPattern = /<(ol|ul|li|p|h[1-6])( [^>]*)?>/g;

        // Dodaje nową linię przed każdym głównym tagiem HTML
        const formatted = html.replace(tagPattern, '\n$&');
        return formatted.trim();
    }

  return (
    <textarea value={formatHTML(content)} onChange={(e) => handleChange(e.target.value)} className='w-full h-[400px] resize-none outline-none'></textarea>
  )
}

export default EditorHtml