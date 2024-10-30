'use client'

import IntentionAddDialog from '@components/management/intencje/IntentionAddDialog';
import IntentionList from '@components/management/intencje/IntentionList';
import { useRef, useState } from 'react';

const Page = () => {
  const addRef = useRef(null)
  const [rows, setRows] = useState([])

  const handleOpenDialog = () => {
    addRef.current.showModal()
  }

  return (
    <section className='py-[20px] flex flex-col gap-[30px]'>
      <button className='bg-[#11161A] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light' onClick={() => handleOpenDialog()}>Dodaj nowe Intencje</button>
      <IntentionList rows={rows}/>
      <IntentionAddDialog addRef={addRef} rows={rows} setRows={setRows}/>
    </section>
  );
};

export default Page;
