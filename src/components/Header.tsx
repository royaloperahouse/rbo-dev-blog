import { isFilled, KeyTextField, RichTextField } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import BackLink from './BackLink'
import { shortDateOnly } from '@/helpers/dateFormat'

interface HeaderProps {
  title?: KeyTextField
  subtitle?: RichTextField
  author?: KeyTextField
  firstPublished?: Date
  lastPublished?: Date
}

const TitleBlock = ({title, subtitle}: HeaderProps) => {
  const hasTitle = !!title && isFilled.keyText(title)
  const hasSubtitle = !!subtitle && isFilled.richText(subtitle)

  if (!hasTitle && !hasSubtitle) return null

  return (
    <div className='title-block'>
      <div className='py-5'>
      {hasTitle ? (
        <h1 className='text-xl font-bold '>
          {title}
        </h1>
      ) : null}
      {hasSubtitle ? (
        <div className='text-xl'>
          <PrismicRichText field={subtitle}/>
        </div>
      ) : null}
      </div>
    </div>
  )
}

const Author = ({author}: HeaderProps) => (
  !!author && isFilled.keyText(author)
    ? (
      <p>
        {'> By '} {author}
      </p>
    )
    : null
)

const PublicationDate = ({date, type}: {type: 'created' | 'updated', date?: Date}) => (
  !!date
    ? (
      <p className='text-gray-600 dark:text-[var(--foreground-dim)]'>
        <span>
          {`${type === 'created' ? '> Published: ' : '> Updated: '}`}
        </span>
        <span>
          {shortDateOnly.format(date)}
        </span>
      </p>
    )
    : null
)

const FrontMatter = ({firstPublished, lastPublished, author}: HeaderProps) => {
  if (!firstPublished && !lastPublished) return null

  return (
    <div className='text-base'>
      <Author author={author} />
      <PublicationDate type={'created'} date={firstPublished}/>
      <PublicationDate type={'updated'} date={lastPublished}/>
    </div>
  )
}

const Header = ({title, subtitle, author, firstPublished, lastPublished}: HeaderProps) => {
  if (!title && !subtitle && !author) return null

  return (
    <header className='flex flex-col gap-6 mb-8'>
      <BackLink/>
      <TitleBlock title={title} subtitle={subtitle}/>
      <FrontMatter firstPublished={firstPublished} lastPublished={lastPublished} author={author}/>
    </header>
  )
}

export default Header
