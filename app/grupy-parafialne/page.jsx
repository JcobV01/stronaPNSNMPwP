'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GroupsPage() {
    const router = useRouter();

    useEffect(() => {
        router.push('/grupy-parafialne/lso');
    }, [router]);

    return null;
}