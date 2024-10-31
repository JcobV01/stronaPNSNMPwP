'use client'

import IntentionAddDialog from '@components/management/intencje/IntentionAddDialog';
import IntentionList from '@components/management/intencje/IntentionList';
import { useEffect, useRef, useState } from 'react';

const Page = () => {
  const addRef = useRef(null)
  const [rows, setRows] = useState([])
  const [updated, setUpdated] = useState(false) // stan decydujący czy wyświetlać guzik do wysyłania intencji

  const handleOpenDialog = () => {
    addRef.current.showModal()
  }

  const handlePushChanges = async () => {
    const result = await fetch('/api/intentions/set', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ intentions: rows })
    })

    setUpdated(false)
  }

  const handleEdit = async () => {
    const result = await fetch('/api/intentions/update', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ intentions: rows })
    })

    setUpdated(false)
  }

  useEffect(() => {
    const getIntentions = async () => {
      const result = await fetch('/api/intentions/get', {method: "POST"})
      const intentions = await result.json()
      setRows(intentions.intentions.actual)
    } 
    getIntentions()
  },[])

  return (
    <section className='py-[20px] flex flex-col gap-[30px] w-full flex-1 overflow-y-scroll pr-[10px]'>
      <button className='bg-[#11161A] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light' onClick={() => handleOpenDialog()}>Dodaj nowe Intencje</button>
      {updated && 
        <nav className='flex gap-[10px]'>
          <button className='bg-[#1b2229] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light flex-1' onClick={() => handlePushChanges()}>Zatwierdź (dodaje nowe)</button>
          <button className='bg-[#1b2229] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light flex-1' onClick={() => handleEdit()}>Edytuj (edytuje aktualne)</button>
        </nav>
      }
      <IntentionList rows={rows}/>
      <IntentionAddDialog addRef={addRef} rows={rows} setRows={setRows} setUpdated={setUpdated}/>
    </section>
  );
};

export default Page;
