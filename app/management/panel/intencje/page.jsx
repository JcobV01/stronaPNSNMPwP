'use client'

import IntentionList from '@components/management/intencje/IntentionList';
import AnnList from '@components/management/ogloszenia/AnnList';

const Page = () => {
  return (
    <section className='py-[20px] flex flex-col gap-[30px]'>
      <button className='bg-[#11161A] py-[10px] px-[50px] rounded-[5px] text-white text-[20px] font-light'>Dodaj nowe Intencje</button>
      <IntentionList/>

    </section>
  );
};

export default Page;
