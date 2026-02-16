'use client'

import { isFilled } from '@prismicio/client'
import { DevBlogArticleDocument } from '../../prismicio-types'
import { PrismicNextLink } from '@prismicio/next'
import { useContext } from 'react'
import { FilterContext, FilterContextType } from '@/context/filterContext'

interface ArticleListProps {
  posts?: DevBlogArticleDocument[]
}

const ArticleList = ({posts}: ArticleListProps) => {
  const {sortOrder, filterTags, filterAuthors} = useContext(FilterContext) as FilterContextType
  
  if (!posts || posts.length === 0) return null

  const filteredPosts = posts.filter((post) => (
    (filterTags.length === 0 || post.tags.some((tag) => filterTags.includes(tag)))
    && (filterAuthors.length === 0 || filterAuthors.some((author) => author === post.data.author))
  ))

  const postsDescending = filteredPosts.toSorted((a, b) => (
    new Date(b.first_publication_date).valueOf() - new Date(a.first_publication_date).valueOf()
  ))

  const sortedPosts = (sortOrder === 'descending')
    ? postsDescending
    : postsDescending.toReversed()

  return (
    <nav>
      <ul className='flex flex-col gap-4 list-none text-base truncate'>
        {sortedPosts.map((post, index) => {
          const postDate = new Date(post.first_publication_date).toLocaleDateString('en-GB')
          const postTitle = isFilled.keyText(post.data.title) ? post.data.title : 'Untitled'

          return (
            <li key={`post-${index}`}>
              <PrismicNextLink key={post.uid} document={post}>
                {`> ${postDate} -- ${postTitle}`}
              </PrismicNextLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default ArticleList