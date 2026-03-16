import * as React from 'react';
import dynamic from 'next/dynamic';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('python', python);

const MermaidBlock = dynamic(() => import('./MermaidBlock'), { ssr: false });

function Code(props: React.ComponentPropsWithoutRef<'code'> & { node?: unknown }) {
    const { node: _node, className, children, ...rest } = props;
    const match = /language-(\w+)/.exec(className ?? '');
    const isBlock = Boolean(match);
    const lang = match ? match[1] : 'text';
    const codeString = typeof children === 'string' ? children : String(React.Children.toArray(children).join('')).trim();

    if (!isBlock) {
    return (
        <code className={className} {...rest}>
            {children}
        </code>
    );
    }

    if (lang === 'mermaid') {
        return <MermaidBlock chart={codeString} />;
    }

    return (
        <SyntaxHighlighter language={lang} style={dark} wrapLongLines PreTag="div">
            {codeString}
        </SyntaxHighlighter>
    );
}

function Pre(props: React.ComponentPropsWithoutRef<'pre'>) {
    const { children, ...rest } = props;
    const child = React.Children.only(children) as React.ReactElement<{ className?: string }>;
    const isCodeBlock = child?.type === 'code' && child?.props?.className?.startsWith('language-');
    if (isCodeBlock) {
        return <>{children}</>;
    }
    return <pre {...rest}>{children}</pre>;
}

function ProseImg(props: React.ComponentPropsWithoutRef<'img'>) {
    const { src, alt, ...rest } = props;
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src}
            alt={alt ?? ''}
            className="max-w-full h-auto rounded"
            loading="lazy"
            {...rest}
        />
    );
}

type PostMarkdownProps = {
    content: string;
    className?: string;
};

export default function PostMarkdown({ content, className }: PostMarkdownProps) {
    return (
        <div className={className}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                    pre: Pre,
                    code: Code,
                    img: ProseImg
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
