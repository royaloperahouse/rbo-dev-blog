import React from 'react'
import { createClient } from '@/prismicio'
import {
  ArticleList,
  ContextProvider,
  Header,
  RichTextSlice,
  Sidebar
} from '@/components'
import { RboAsciiLogo } from '@/components/LogoASCII'
import { literalsArray  } from '@/assets/ascii-literals'

const Home = async () => {
  const client = createClient()
  const page = await client.getSingle('dev_blog_home_page')
  const posts = await client.getAllByType('dev_blog_article')

  return (
    // <ContextProvider>
    //   <div className='flex flex-col gap-3 disable-ligatures'>
    //       <RboAsciiLogo literals={literalsArray} /> 
    //     <div className='mx-[25%]'>
    //       <Header title={page.data.title} subtitle={page.data.subtitle}/>
    //     </div>
    //     <div className='flex flex-row'>
    //       <div className='w-[25%]'>
    //         <Sidebar posts={posts}/>
    //       </div>
    //       <div>
    //         <RichTextSlice className='mb-6' field={page.data.intro}/>
    //         <ArticleList posts={posts}/>
    //       </div>
    //     </div>
    //   </div>
    // </ContextProvider>
    <ContextProvider>
      <div className='flex flex-col gap-3 disable-ligatures'>
          <RboAsciiLogo literals={literalsArray} /> 
        <div className='flex flex-row mt-10'>
          <div className='w-[25%]'>
            <Sidebar posts={posts}/>
          </div>
          <div className='w-[50%]'>
            <Header title={page.data.title} subtitle={page.data.subtitle}/>
            <RichTextSlice className='mb-6' field={page.data.intro}/>
            <ArticleList posts={posts}/>
          </div>
        </div>
      </div>
    </ContextProvider>
  )
}

export default Home
