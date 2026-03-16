import classNames from 'classnames';
import dayjs from 'dayjs';
import * as React from 'react';

import { DynamicComponent } from '@/components/components-registry';
import { PageComponentProps, PostLayout } from '@/types';
import BaseLayout from '../BaseLayout';
import PostMarkdown from './PostMarkdown';
import ReadingProgress from './ReadingProgress';

type ComponentProps = PageComponentProps & PostLayout;

const Component: React.FC<ComponentProps> = (props) => {
    const { title, date, author, markdownContent, media, bottomSections = [] } = props;
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('YYYY-MM-DD');

    return (
        <BaseLayout {...props}>
            <article className="px-4 py-14 lg:py-20">
                <ReadingProgress />
                <header className="max-w-5xl mx-auto mb-10 sm:mb-14">
                    <div className="mb-6 uppercase">
                        <time dateTime={dateTimeAttr}>{formattedDate}</time>
                        {author && (
                            <>
                                {' | '}
                                {author.firstName} {author.lastName}
                            </>
                        )}
                    </div>
                    <h1 className="text-5xl sm:text-6xl">{title}</h1>
                </header>
                {media && (
                    <figure className="max-w-5xl mx-auto mb-10 sm:mb-14">
                        <PostMedia media={media} />
                    </figure>
                )}
                {markdownContent && (
                    <PostMarkdown
                        content={markdownContent}
                        className="max-w-2xl mx-auto prose prose-lg prose-ebook"
                    />
                )}
            </article>
            {bottomSections?.map((section, index) => {
                return <DynamicComponent key={index} {...section} />;
            })}
        </BaseLayout>
    );
};
export default Component;

function PostMedia({ media }) {
    return <DynamicComponent {...media} className={classNames({ 'w-full': media.type === 'ImageBlock' })} />;
}
