import { ArticleSlices, Header } from '@/components'
import { createClient } from '@/prismicio'
import { notFound } from 'next/navigation'

interface PostParams {
  uid: string
}

const Post = async ({ params }: { params: Promise<PostParams> }) => {
  const { uid } = await params
  const client = createClient()
  const post = await client.getByUID('dev_blog_article', uid).catch(() => notFound())

  return (
    <div className='mx-[25%] mb-10'>
      <Header
        title={post.data.title}
        subtitle={post.data.subtitle}
        author={post.data.author}
        firstPublished={new Date(post.first_publication_date)}
        lastPublished={new Date(post.last_publication_date)}
      />
      <ArticleSlices slices={post.data.slices}/>
    </div>
  )
}

export default Post
