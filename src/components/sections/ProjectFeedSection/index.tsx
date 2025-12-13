import classNames from 'classnames';
import dayjs from 'dayjs';

import { Action, Link } from '@/components/atoms';
import ImageBlock from '@/components/molecules/ImageBlock';
import ArrowUpRightIcon from '@/components/svgs/arrow-up-right';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function ProjectFeedSection(props) {
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
                <ProjectList {...rest} hasTopMargin={!!(title || subtitle)} headingLevel={title ? 'h3' : 'h2'} />
            ) : (
                <ProjectGrid
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

function ProjectGrid(props) {
    const {
        variant,
        projects = [],
        showDate,
        showDescription,
        showFeaturedImage,
        showReadMoreLink,
        hasTopMargin,
        headingLevel
    } = props;
    if (projects.length === 0) {
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
            {projects.map((project, index) => (
                <CardContainer
                    key={index}
                    containerClassName="py-0 w-full"
                    className="w-full"
                >
                    <Link href={project} className="block w-full">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-full h-auto rounded-xl p-6 border hover:shadow-xl transition-shadow">
                            {showFeaturedImage && project.featuredImage && (
                                <CardItem translateZ="100" className="w-full mb-6">
                                    <div className="w-full overflow-hidden aspect-3/2 rounded-lg">
                                        <ImageBlock
                                            {...project.featuredImage}
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover/card:scale-105"
                                        />
                                    </div>
                                </CardItem>
                            )}
                            {showDate && project.date && (
                                <CardItem translateZ="40" className="mb-3">
                                    <ProjectDate date={project.date} />
                                </CardItem>
                            )}
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white mb-2"
                            >
                                <TitleTag className="text-3xl sm:text-4xl">{project.title}</TitleTag>
                            </CardItem>
                            {showDescription && project.description && (
                                <CardItem
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    <p className="mt-5 text-lg">{project.description}</p>
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

function ProjectList(props) {
    const {
        projects = [],
        showDate,
        showDescription,
        showFeaturedImage,
        showReadMoreLink,
        hasTopMargin,
        headingLevel
    } = props;
    if (projects.length === 0) {
        return null;
    }
    const TitleTag = headingLevel;
    return (
        <div
            className={classNames('grid gap-y-12', {
                'mt-12': hasTopMargin
            })}
        >
            {projects.map((project, index) => (
                <Link key={index} href={project} className="block pb-10 border-b border-current group md:pb-12 md:px-4">
                    <div className="flex flex-col gap-8 md:flex-row md:items-center">
                        {showFeaturedImage && project.featuredImage && (
                            <div className="md:shrink-0 md:self-stretch md:w-48">
                                <div className="w-full overflow-hidden aspect-3/2 md:min-h-full">
                                    <ImageBlock
                                        {...project.featuredImage}
                                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        )}
                        <div className="md:grow">
                            {showDate && project.date && (
                                <div className="mb-3">
                                    <ProjectDate date={project.date} />
                                </div>
                            )}
                            <TitleTag className="text-3xl sm:text-4xl">{project.title}</TitleTag>
                            {showDescription && project.description && (
                                <p className="mt-5 text-lg">{project.description}</p>
                            )}
                        </div>
                        {showReadMoreLink && (
                            <div className="md:mx-4">
                                <span className="inline-flex text-xl transition rounded-full p-4 border-2 border-current md:text-3xl group-hover:bottom-shadow-6 group-hover:-translate-y-1.5">
                                    <ArrowUpRightIcon className="fill-current w-icon h-icon" />
                                </span>
                            </div>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
}

function ProjectDate({ date }) {
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('YYYY-MM-DD');
    return <time dateTime={dateTimeAttr}>{formattedDate}</time>;
}
