import type { Metadata } from 'next'
import './globals.css'
import { PrismicPreview } from '@prismicio/next'
import { Source_Code_Pro } from 'next/font/google'
import { repositoryName } from '@/prismicio'
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'RBO Developers',
  description: 'RBO Developer Blog',
}

const pixelCode = localFont({
src: [
  { path: '../../public/fonts/PixelCode-Thin.woff2', weight: '100' },
  { path: '../../public/fonts/PixelCode-Thin-Italic.woff2', weight: '100', style: 'italic' },
  { path: '../../public/fonts/PixelCode-ExtraLight.woff2', weight: '200' },
  { path: '../../public/fonts/PixelCode-ExtraLight-Italic.woff2', weight: '200', style: 'italic' },
  { path: '../../public/fonts/PixelCode-Light.woff2', weight: '300' },
  { path: '../../public/fonts/PixelCode-Light-Italic.woff2', weight: '300', style: 'italic' },
  { path: '../../public/fonts/PixelCode.woff2', weight: '400' },
  { path: '../../public/fonts/PixelCode-Italic.woff2', weight: '400', style: 'italic' },
  { path: '../../public/fonts/PixelCode-Medium.woff2', weight: '500' },
  { path: '../../public/fonts/PixelCode-Medium-Italic.woff2', weight: '500', style: 'italic' },
  { path: '../../public/fonts/PixelCode-DemiBold.woff2', weight: '600' },
  { path: '../../public/fonts/PixelCode-DemiBold-Italic.woff2', weight: '600', style: 'italic' },
  { path: '../../public/fonts/PixelCode-Bold.woff2', weight: '700' },
  { path: '../../public/fonts/PixelCode-Bold-Italic.woff2', weight: '700', style: 'italic' },
  { path: '../../public/fonts/PixelCode-ExtraBold.woff2', weight: '800' },
  { path: '../../public/fonts/PixelCode-ExtraBold-Italic.woff2', weight: '800', style: 'italic' },
  { path: '../../public/fonts/PixelCode-Black.woff2', weight: '900' },
  { path: '../../public/fonts/PixelCode-Black-Italic.woff2', weight: '900', style: 'italic' },
  { path: '../../public/fonts/PixelCode-ExtraBlack.woff2', weight: '950' },
  { path: '../../public/fonts/PixelCode-ExtraBlack-Italic.woff2', weight: '950', style: 'italic' },
],
  variable: '--font-pixel-code',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--source-code-pro'
})

const RootLayout = ({
  children
}: {
  children: React.ReactNode
}) => (
  <html>
    <body className={pixelCode.variable}>
      <div>
        {children}
      </div>
    </body>
    <PrismicPreview repositoryName={repositoryName} />
  </html>
)

export default RootLayout

// className='flex flex-col items-left mx-[20%] py-10'
