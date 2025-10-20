import { isFilled, SliceZone } from '@prismicio/client'
import { DevBlogArticleDocumentDataSlicesSlice } from '../../prismicio-types'
import RichTextSlice from './RichTextSlice'
import CodeSlice from './CodeSlice'

interface ArticleSlicesProps {
  slices?: SliceZone<DevBlogArticleDocumentDataSlicesSlice> 
}

const ArticleSlices = ({ slices }: ArticleSlicesProps) => {
  if (!slices) return null

  return (
    <article className='flex flex-col gap-10'>
      {
        slices.map((slice, index) => {
          if (
            slice.slice_type === 'dev_blog_rich_text_slice'
            && isFilled.richText(slice.primary.content)
          ) {
            return (
              <RichTextSlice
                key={`slice-${index}`}
                field={slice.primary.content}
              />
            )
          }

          if (
            slice.slice_type === 'dev_blog_code_slice'
            && isFilled.richText(slice.primary.code)
          ) {
            return (
              <CodeSlice
                key={`slice-${index}`}
                field={slice.primary.code}
                language={slice.primary.language}
              />
            )
          }
        })
      }
    </article>
  )

}

export default ArticleSlices
