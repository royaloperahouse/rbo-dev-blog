'use client'

import { useContext } from 'react'
import { DevBlogArticleDocument } from '../../prismicio-types'
import { FilterContext, FilterContextType } from '@/context/filterContext'

interface SidebarProps {
  posts: DevBlogArticleDocument[]
}

const Sidebar = ({posts}: SidebarProps) => {
  const {
    sortOrder,
    filterTags,
    filterAuthors,
    toggleFilterTag,
    toggleFilterAuthor,
    toggleSortOrder
  } = useContext(FilterContext) as FilterContextType

  if (posts.length === 0) return null

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)))
  const allAuthors = Array.from(new Set(posts.flatMap((post) => post.data.author ?? [])))
  const buttonStyle = 'transition-colors duration-200'
  const selectedFilterStyle = 'border-green-400 text-green-400'
  const unselectedFilterStyle = 'border-gray-300 hover:border-green-300 hover:text-green-400'

  return (
    <div className='flex flex-col gap-4 mx-8'>
      <h4 className='text-base font-bold'>
        *** Sort by date *** 
      </h4>
      <ul className='flex flex-wrap gap-5 truncate text-base'>
        <li>
          <button
            className={`${buttonStyle} ${
              sortOrder === 'descending' 
                ? selectedFilterStyle
                : unselectedFilterStyle
            }`}
            onClick={() => toggleSortOrder()}        
          >
            [newest first]
          </button>
        </li>
        <li>
          <button
            className={`${buttonStyle} ${
              sortOrder === 'ascending' 
                ? selectedFilterStyle
                : unselectedFilterStyle
            }`}
            onClick={() => toggleSortOrder()}        
          >
            [oldest first]
          </button>
        </li>
      </ul>
      <h4 className='text-base font-bold mt-5'>
        *** Filter by tags ***
      </h4>
      {allTags.length > 0 && (
        <ul className='flex flex-wrap gap-5 truncate text-base'>
         {allTags.map(((tag, index) => (
          <li key={`tag-${index}`}>
            <button
              className={`${buttonStyle} ${
                filterTags?.includes(tag) 
                  ? selectedFilterStyle
                  : unselectedFilterStyle
              }`}
              onClick={() => toggleFilterTag(tag)}
            >
             [#{tag}]
            </button>
          </li>
         )))}
        </ul>
      )}
      <h4 className='text-base truncate font-bold mt-5'>
        *** Filter by authors ***
      </h4>
      {allAuthors.length > 0 && (
        <ul className='flex flex-wrap gap-5 truncate text-base'>
         {allAuthors.map(((author, index) => (
          <li key={`author-${index}`}>
            <button
              className={`${buttonStyle} ${
                filterAuthors?.includes(author) 
                  ? selectedFilterStyle
                  : unselectedFilterStyle
              }`}
              onClick={() => toggleFilterAuthor(author)}
            >
              [{author}]
            </button>
          </li>
         )))}
        </ul>
      )}
    </div>
  )
}

export default Sidebar
