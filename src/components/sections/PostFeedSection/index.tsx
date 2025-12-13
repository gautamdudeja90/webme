import classNames from 'classnames';
import dayjs from 'dayjs';

import { Action, Link } from '@/components/atoms';
import ImageBlock from '@/components/molecules/ImageBlock';
import ArrowUpRightIcon from '@/components/svgs/arrow-up-right';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function PostFeedSection(props) {
    const { elementId, colors, variant = 'variant-a', title, subtitle, actions = [], styles = {}, ...rest } = props;
    const sectionAlign = styles.self?.textAlign ?? 'left';
    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            {title && (
                <h2 className={classNames('text-4xl sm:text-5xl', mapStyles({ textAlign: sectionAlign }))}>{title}</h2>
            )}
            {subtitle && (
                <p
                    className={classNames('text-lg sm:text-xl', mapStyles({ textAlign: sectionAlign }), {
                        'mt-6': title
                    })}
                >
                    {subtitle}
                </p>
            )}
            {variant === 'variant-d' ? (
                <PostList {...rest} hasTopMargin={!!(title || subtitle)} headingLevel={title ? 'h3' : 'h2'} />
            ) : (
                <PostGrid
                    {...rest}
                    variant={variant}
                    hasTopMargin={!!(title || subtitle)}
                    headingLevel={title ? 'h3' : 'h2'}
                />
            )}
            {actions?.length > 0 && (
                <div
                    className={classNames(
                        'flex flex-wrap items-center gap-4 mt-10',
                        sectionAlign === 'center' ? 'justify-center' : 'justify-end'
                    )}
                >
                    {actions.map((action, index) => (
                        <Action key={index} {...action} />
                    ))}
                </div>
            )}
        </Section>
    );
}

function PostGrid(props) {
    const {
        variant,
        posts = [],
        showDate,
        showAuthor,
        showExcerpt,
        showFeaturedImage,
        showReadMoreLink,
        hasTopMargin,
        headingLevel
    } = props;
    if (posts.length === 0) {
        return null;
    }
    const TitleTag = headingLevel;
    return (
        <div
            className={classNames('grid gap-y-12', {
                'md:grid-cols-2': variant === 'variant-a',
                'md:grid-cols-3': variant === 'variant-b',
                'justify-center': variant === 'variant-c',
                'gap-x-6 lg:gap-x-8': variant !== 'variant-c',
                'mt-12': hasTopMargin
            })}
        >
            {posts.map((post, index) => (
                <CardContainer
                    key={index}
                    containerClassName="py-0 w-full"
                    className="w-full"
                >
                    <Link href={post} className="block w-full">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-full h-auto rounded-xl p-6 border hover:shadow-xl transition-shadow">
                            {showFeaturedImage && post.featuredImage && (
                                <CardItem translateZ="100" className="w-full mb-6">
                                    <div className="w-full overflow-hidden aspect-3/2 rounded-lg">
                                        <ImageBlock
                                            {...post.featuredImage}
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover/card:scale-105"
                                        />
                                    </div>
                                </CardItem>
                            )}
                            <CardItem translateZ="40" className="mb-3">
                                <PostAttribution
                                    showDate={showDate}
                                    showAuthor={showAuthor}
                                    date={post.date}
                                    author={post.author}
                                />
                            </CardItem>
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white mb-2"
                            >
                                <TitleTag>{post.title}</TitleTag>
                            </CardItem>
                            {showExcerpt && post.excerpt && (
                                <CardItem
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    <p>{post.excerpt}</p>
                                </CardItem>
                            )}
                            {showReadMoreLink && (
                                <CardItem
                                    translateZ={20}
                                    className="mt-6 flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-300"
                                >
                                    Read more
                                    <ArrowUpRightIcon className="fill-current w-4 h-4" />
                                </CardItem>
                            )}
                        </CardBody>
                    </Link>
                </CardContainer>
            ))}
        </div>
    );
}

function PostList(props) {
    const {
        posts = [],
        showDate,
        showAuthor,
        showExcerpt,
        showFeaturedImage,
        showReadMoreLink,
        hasTopMargin,
        headingLevel
    } = props;
    if (posts.length === 0) {
        return null;
    }
    const TitleTag = headingLevel;
    return (
        <div
            className={classNames('grid gap-y-12', {
                'mt-12': hasTopMargin
            })}
        >
            {posts.map((post, index) => (
                <CardContainer
                    key={index}
                    containerClassName="py-0 w-full"
                    className="w-full"
                >
                    <Link href={post} className="block w-full">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-full h-auto rounded-xl p-6 border hover:shadow-xl transition-shadow md:pb-12 md:px-4">
                            <div className="flex flex-col gap-8 md:flex-row md:items-center">
                                {showFeaturedImage && post.featuredImage && (
                                    <CardItem translateZ="100" className="md:shrink-0 md:self-stretch md:w-48">
                                        <div className="w-full overflow-hidden aspect-3/2 md:min-h-full rounded-lg">
                                            <ImageBlock
                                                {...post.featuredImage}
                                                className="object-cover w-full h-full transition-transform duration-500 group-hover/card:scale-105"
                                            />
                                        </div>
                                    </CardItem>
                                )}
                                <div className="md:grow">
                                    <CardItem translateZ="40" className="mb-3">
                                        <PostAttribution
                                            showDate={showDate}
                                            showAuthor={showAuthor}
                                            date={post.date}
                                            author={post.author}
                                        />
                                    </CardItem>
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold text-neutral-600 dark:text-white mb-2"
                                    >
                                        <TitleTag className="text-3xl sm:text-4xl">{post.title}</TitleTag>
                                    </CardItem>
                                    {showExcerpt && post.excerpt && (
                                        <CardItem
                                            translateZ="60"
                                            className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
                                        >
                                            <p className="mt-5 text-lg">{post.excerpt}</p>
                                        </CardItem>
                                    )}
                                </div>
                                {showReadMoreLink && (
                                    <CardItem
                                        translateZ={20}
                                        className="md:mx-4 flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-300"
                                    >
                                        <span className="inline-flex text-xl transition rounded-full p-4 border-2 border-current md:text-3xl group-hover/card:bottom-shadow-6 group-hover/card:-translate-y-1.5">
                                            <ArrowUpRightIcon className="fill-current w-icon h-icon" />
                                        </span>
                                    </CardItem>
                                )}
                            </div>
                        </CardBody>
                    </Link>
                </CardContainer>
            ))}
        </div>
    );
}

function PostAttribution({ showDate, showAuthor, date, author, className = '' }) {
    if (!showDate && !(showAuthor && author)) {
        return null;
    }
    return (
        <div className={className}>
            {showDate && (
                <time dateTime={dayjs(date).format('YYYY-MM-DD HH:mm:ss')}>{dayjs(date).format('YYYY-MM-DD')}</time>
            )}
            {showAuthor && author && (
                <>
                    {showDate && ' | '}
                    {author.firstName} {author.lastName}
                </>
            )}
        </div>
    );
}
