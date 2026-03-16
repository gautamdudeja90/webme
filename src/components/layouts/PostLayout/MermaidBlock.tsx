'use client';

import * as React from 'react';
import mermaid from 'mermaid';

type MermaidBlockProps = {
    chart: string;
};

export default function MermaidBlock({ chart }: MermaidBlockProps) {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [svg, setSvg] = React.useState<string | null>(null);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (!chart || !containerRef.current) return;

        mermaid.initialize({
            startOnLoad: false,
            theme: 'dark',
            securityLevel: 'loose'
        });

        const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
        mermaid
            .render(id, chart)
            .then(({ svg: result }) => setSvg(result))
            .catch((err) => setError(err?.message ?? 'Mermaid render failed'));
    }, [chart]);

    if (error) {
        return (
            <pre className="my-4 p-4 rounded bg-red-950/30 text-red-300 text-sm overflow-x-auto">
                {error}
            </pre>
        );
    }

    if (!svg) {
        return <div ref={containerRef} className="my-4 min-h-[80px] animate-pulse bg-white/5 rounded" />;
    }

    return (
        <div
            className="my-6 flex justify-center prose-ebook-mermaid"
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}
