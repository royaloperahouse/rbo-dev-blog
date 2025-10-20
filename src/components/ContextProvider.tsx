'use client'

import FilterContextProvider from '@/context/filterContext'
import { ReactNode } from 'react'

const ContextProvider = ({ children }: { children: ReactNode}) => {
  return (
    <FilterContextProvider>
      {children}
    </FilterContextProvider>
  )
}

export default ContextProvider
