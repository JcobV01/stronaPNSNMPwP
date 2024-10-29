'use client'

import React, { useRef, useState } from 'react';
import mammoth from 'mammoth';
import EditorText from '@components/management/ogloszenia/EditorText';
import EditorHtml from '@components/management/ogloszenia/EditorHtml';

const Page = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [color, setColor] = useState("announcement-green");
  const dialogRef = useRef(null);

  const [update, setUpdate] = useState(true)

  const [mode, setMode] = useState('text')

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setUpdate(true)
    } else {
      setFileName('');
      console.error('Niepoprawny format pliku');
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const selectedFile = event.dataTransfer.files[0];
    if (selectedFile && selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    } else {
      setFileName('');
      console.error('Niepoprawny format pliku');
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleConvert = async () => {
    if (!file) {
      alert('Proszę wybrać plik .docx');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const arrayBuffer = event.target.result;

      try {
        const result = await mammoth.convertToHtml({ arrayBuffer });
        
        setHtmlContent(result.value);
      } catch (error) {
        console.error('Błąd konwersji pliku na HTML:', error);
      }
    };
    
    reader.readAsArrayBuffer(file);
  };

  const handleShowModal = () => {
    dialogRef.current.showModal();
  };

  const handleChangeMode = (mode) => {
    setUpdate(true)
    setMode(mode)
  }

  const handlePush = async () => {
    try {
      const response = await fetch('/api/announcements/set', {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({html: htmlContent, color: color})
      })
    }
    catch(err){
      console.error("Błąd: " + err);
    }
  }

  
  return (
    <section className='py-[20px]'>
      <button onClick={handleShowModal} className='bg-[#11161A] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light'>
        Dodaj ogłoszenia
      </button>

      <dialog ref={dialogRef} className='w-[80%] h-[80%] rounded-[10px] backdrop:bg-[#00000098] p-[50px] bg-[#f0f0f0] box-border'>
        <div className='w-full flex flex-col gap-[30px]'>
          <p className='text-center text-[20px]'>Dodaj nowe ogłoszenia</p>

          <p className='text-center text-sm text-gray-600 mt-2'>Wybrany plik: {fileName ? fileName : 'Nie wybrano pliku'}</p>
          <div
            className='flex items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <label htmlFor="dropzone-file" className='flex flex-col items-center justify-center w-full h-full'>
              <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                <svg className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 16'>
                  <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2' />
                </svg>
                <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'><span className='font-semibold'>Naciśnij</span> lub przeciągnij, aby załadować plik</p>
                <p className='text-xs text-gray-500 dark:text-gray-400'>Obsługiwane formaty: DOCX</p>
              </div>
              <input id="dropzone-file" type="file" className='hidden' onChange={handleFileChange} />
            </label>
          </div>


          <button onClick={handleConvert} className='bg-[#11161A] text-white py-2 px-4 rounded-md'>
            Konwertuj
          </button>

          <article>
            <p className='text-center text-lg font-medium text-[20px] py-[20px]'>Wygenerowane ogłoszenia</p>

            <div className='flex justify-center gap-[20px] py-[10px]'>
              <p onClick={() => handleChangeMode('text')} className='cursor-pointer'>Tryb tekstowy</p>
              <p onClick={() => handleChangeMode('html')} className='cursor-pointer'>Tryb html</p>
            </div>

            {mode == 'text' ? 
              <EditorText content={htmlContent} onChange={(newContent) => setHtmlContent(newContent)} update={update} setUpdate={setUpdate}/>
              :
              <EditorHtml content={htmlContent} onChange={(newContent) => setHtmlContent(newContent)} update={update} setUpdate={setUpdate}/>
            }
          </article>

          <select name="color" onChange={(e) => setColor(e.target.value)} className='outline-none border-none h-[50px] rounded-[5px] pl-[20px]'>
            <option value="announcement-green" className=''>Zielony</option>
            <option value="announcement-red">Czerwony</option>
            <option value="announcement-gold">Złoty</option>
            <option value="announcement-purple">Fioletowy</option>
            <option value="announcement-pink">Różowy</option>
          </select>

          <div className='flex gap-[10px] w-full'>
            <button onClick={() => handlePush()} className='bg-[#0e5115] text-white py-2 px-4 rounded-md flex-1'>Zapisz</button>
            <button onClick={() => dialogRef.current.close()} className='bg-[#8a1616] text-white py-2 px-4 rounded-md flex-1'>Anuluj</button>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Page;
