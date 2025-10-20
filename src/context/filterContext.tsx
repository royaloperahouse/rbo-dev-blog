'use client'

import React, { createContext, useState } from 'react'

export type FilterContextType = {
  sortOrder: 'ascending' | 'descending'
  filterTags: string[]
  filterAuthors: string[]
  toggleSortOrder: () => void
  toggleFilterTag: (tag: string) => void
  toggleFilterAuthor: (author: string) => void
}

export const FilterContext = createContext<FilterContextType | null>(null)

const FilterContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [sortOrder, setSortOrder] = useState<FilterContextType['sortOrder']>('descending')
  const [filterTags, setFilterTags] = useState<FilterContextType['filterTags']>([])
  const [filterAuthors, setFilterAuthors] = useState<FilterContextType['filterAuthors']>([])

  const addFilterTag = (tag: string) => {
    const newTags = Array.from(new Set(filterTags?.concat(tag) ?? [tag]))

    setFilterTags(newTags)
  }

  const addFilterAuthor = (author: string) => {
    const newAuthors = Array.from(new Set(filterAuthors?.concat(author) ?? [author]))
    
    setFilterAuthors(newAuthors)
  }

  const removeFilterTag = (tag: string) => {
    const newTags = filterTags.filter((t) => t !== tag) ?? []

    setFilterTags(newTags)
  }

  const removeFilterAuthor = (author: string) => {
    const newAuthors = filterAuthors.filter((a) => a !== author) ?? []
    
    setFilterAuthors(newAuthors)
  }

  const toggleSortOrder = () => (
    sortOrder === 'ascending'
     ? setSortOrder('descending')
     : setSortOrder('ascending')
  )

  const toggleFilterTag = (tag: string) => (
    filterTags.includes(tag)
      ? removeFilterTag(tag)
      : addFilterTag(tag)
  )

  const toggleFilterAuthor = (author: string) => (
    filterAuthors.includes(author)
      ? removeFilterAuthor(author)
      : addFilterAuthor(author)
  )

  const value: FilterContextType = {
    sortOrder,
    filterTags,
    filterAuthors,
    toggleSortOrder,
    toggleFilterTag,
    toggleFilterAuthor,
  }

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterContextProvider
