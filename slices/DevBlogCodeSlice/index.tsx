'use client'

import { FC } from 'react'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import CodeSlice from '@/components/CodeSlice'

/**
 * Props for `DevBlogCodeSlice`.
 */
export type DevBlogCodeSliceProps =
  SliceComponentProps<Content.DevBlogCodeSliceSlice>

/**
 * Component for 'DevBlogCodeSlice' Slices.
 */
const DevBlogCodeSlice: FC<DevBlogCodeSliceProps> = ({ slice }) => {
  return (
    <CodeSlice field={slice.primary.code} language={slice.primary.language}/>
  )
}

export default DevBlogCodeSlice
