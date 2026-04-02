'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnalyticsTracker() {
    const pathname = usePathname();

    useEffect(() => {
        const controller = new AbortController();

        fetch('/api/track', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ path: pathname || '/' }),
            signal: controller.signal,
        }).catch(() => {
            // ignorar erro de tracking
        });

        return () => controller.abort();
    }, [pathname]);

    return null;
}
