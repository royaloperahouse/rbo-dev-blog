import type { Metadata } from 'next'
import './globals.css'
import { PrismicPreview } from '@prismicio/next'
import { Fira_Code } from 'next/font/google'
import { repositoryName } from '@/prismicio'

export const metadata: Metadata = {
  title: 'RBO Developers',
  description: 'RBO Developer Blog',
}

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code'
})

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}) => (
  <html>
    <body className={firaCode.variable}>
      <div>
        {children}
      </div>
    </body>
    <PrismicPreview repositoryName={repositoryName} />
  </html>
)

export default RootLayout

// className='flex flex-col items-left mx-[20%] py-10'
