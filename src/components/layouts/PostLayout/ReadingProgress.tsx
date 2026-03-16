'use client';

import * as React from 'react';

export default function ReadingProgress() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const article = document.querySelector('article');
        if (!article) return;

        const onScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            const total = scrollHeight - clientHeight;
            setProgress(total > 0 ? (scrollTop / total) * 100 : 0);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            className="fixed left-0 top-0 z-50 h-0.5 bg-current opacity-30"
            style={{ width: `${progress}%` }}
            aria-hidden
        />
    );
}
