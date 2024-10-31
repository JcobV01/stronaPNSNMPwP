'use client'

import IntentionAddDialog from '@components/management/intencje/IntentionAddDialog';
import IntentionList from '@components/management/intencje/IntentionList';
import { useRef, useState } from 'react';

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

  return (
    <section className='py-[20px] flex flex-col gap-[30px]'>
      <button className='bg-[#11161A] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light' onClick={() => handleOpenDialog()}>Dodaj nowe Intencje</button>
      {updated && <button className='bg-[#1b2229] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light' onClick={() => handlePushChanges()}>Zatwierdź</button> }
      <IntentionList rows={rows}/>
      <IntentionAddDialog addRef={addRef} rows={rows} setRows={setRows} setUpdated={setUpdated}/>
    </section>
  );
};

export default Page;
