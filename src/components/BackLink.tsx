'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const BackLink = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'

  if (isHome) {
    return <></>
  }

  return (
    <div className='min-h-10'>
      <nav className='pt-5'>
        <Link href='/'>
          {'<< Home'}
        </Link>
      </nav>
    </div>
  )
}

export default BackLink
