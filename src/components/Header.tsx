import { isFilled, KeyTextField, RichTextField } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import BackLink from './BackLink'
import { fullDate } from '@/helpers/dateFormat'

interface HeaderProps {
  title?: KeyTextField
  subtitle?: RichTextField
  author?: KeyTextField
  firstPublished?: Date
  lastPublished?: Date
}

const Title = ({title}: HeaderProps) => (
  !!title && isFilled.keyText(title)
    ? (
      <h1 className='text-6xl'>
        {title}
      </h1>
    )
    : null
)

const Subtitle = ({subtitle}: HeaderProps) => (
  !!subtitle && isFilled.richText(subtitle)
    ? (
      <div className='text-2xl'>
        <PrismicRichText field={subtitle}/>
      </div>
    )
    : null
)

const Author = ({author}: HeaderProps) => (
  !!author && isFilled.keyText(author)
    ? (
      <p className='text-xl'>
        {'by '}
        <span className='italic'>
          {author}
        </span>
      </p>
    )
    : null
)

const PublicationDate = ({date, type}: {type: 'created' | 'updated', date?: Date}) => (
  !!date
    ? (
      <p className='text-l text-gray-600 dark:text-gray-400'>
        <span>
          {`${type === 'created' ? 'First Published: ' : 'Updated: '}`}
        </span>
        <span>
          {fullDate.format(date)}
        </span>
      </p>
    )
    : null
)

const PublicationDates = ({firstPublished, lastPublished}: HeaderProps) => {
  if (!firstPublished && !lastPublished) return null

  return (
    <div>
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
      <Title title={title}/>
      <Subtitle subtitle={subtitle}/>
      <Author author={author}/>
      <PublicationDates firstPublished={firstPublished} lastPublished={lastPublished}/>
    </header>
  )
}

export default Header
