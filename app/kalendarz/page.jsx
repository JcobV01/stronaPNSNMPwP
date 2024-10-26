"use client"

import { getDateToday } from '@utils/date';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const kalendarz = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/kalendarz/${getDateToday()}`);
  }, [router]);

  return null
}

export default kalendarz