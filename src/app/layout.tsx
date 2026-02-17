import type { Metadata } from 'next'
import './globals.css'
import { PrismicPreview } from '@prismicio/next'
import { Tomorrow } from 'next/font/google'
import { repositoryName } from '@/prismicio'

export const metadata: Metadata = {
  title: 'RBO Developers',
  description: 'RBO Developer Blog',
}

const tomorrow = Tomorrow({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-tomorrow'
})

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}) => (
  <html>
    <body className={tomorrow.className}>
      <div>
        {children}
      </div>
    </body>
    <PrismicPreview repositoryName={repositoryName} />
  </html>
)

export default RootLayout

// className='flex flex-col items-left mx-[20%] py-10'
