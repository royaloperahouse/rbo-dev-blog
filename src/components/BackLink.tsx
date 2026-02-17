'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { unselectedFilterStyle } from './Sidebar'

const BackLink = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'

  if (isHome) {
    return <div className='min-h-10'/>
  }

  return (
    <div className='min-h-10'>
      <nav className='pt-5'>
        <Link className={unselectedFilterStyle} href='/'>
          {'<< Home'}
        </Link>
      </nav>
    </div>
  )
}

export default BackLink
