import React from 'react'
import { JSXMapSerializer } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

const richTextSerializer: JSXMapSerializer = {
  paragraph: ({children}) => {
    return (
      <p className='text-base'>
        {children}
      </p>
    )
  },
  
  heading1: ({children}) => (
    <h1 className='text-xl font-bold'>
      {children}
    </h1>
  ),
  
  heading2: ({children}) => (
    <h2 className='text-xl font-bold'>
      {children}
    </h2>
  ),
  
  heading3: ({children}) => (
    <h3 className='text-xl'>
      {children}
    </h3>
  ),
  
  heading4: ({children}) => (
    <h4 className='text-base font-bold'>
      {children}
    </h4>
  ),
  
  heading5: ({children}) => (
    <h5 className='text-base font-bold'>
      {children}
    </h5>
  ),
  
  heading6: ({children}) => (
    <h6 className='text-base font-bold'>
      {children}
    </h6>
  ),
  
  preformatted: ({children}) => (
    <pre className='bg-gray-100 p-4 rounded overflow-x-auto text-black'>
      <code>{children}</code>
    </pre>
  ),
  
  listItem: ({children}) => (
    <li className=''>
      {children}
    </li>
  ),
  
  oListItem: ({children}) => (
    <li className=''>
      {children}
    </li>
  ),
  
  list: ({children}) => (
    <ul className="list-custom-dash pl-4">
      {children}
    </ul>
  ),
  
  oList: ({children}) => (
    <ol className='list-decimal pl-4'>
      {children}
    </ol>
  ),

  strong: ({children}) => (
    <strong className='font-bold'>
      {children}
    </strong>
  ),
  
  em: ({children}) => (
    <em className='italic'>
      {children}
    </em>
  ),
  
  hyperlink: ({node, children}) => (
    <a 
      className='text-blue-600 hover:text-blue-800 underline'
      href={node.data.url}
    >
      {children}
    </a>
  ),
  
  image: ({node}) => (
    <div className='self-center p-5 border-10 border-double'>
      <PrismicNextImage
        className='max-w-full h-auto rounded'
        field={node}
        fallbackAlt=''
      />
    </div>
  ),
  
  embed: ({node}) => (
    <div className='mb-4'>
      {node.oembed.html && (
        <div 
          className='responsive-embed'
          dangerouslySetInnerHTML={{ __html: node.oembed.html }}
        />
      )}
    </div>
  ),
}

export default richTextSerializer
