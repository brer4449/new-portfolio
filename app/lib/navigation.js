import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function useHandleClick (link) {
    const router = useRouter();

    const handleClick = (link) => {
            router.push(link);
    }

    return handleClick;
};