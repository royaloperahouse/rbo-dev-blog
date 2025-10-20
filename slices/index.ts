import dynamic from 'next/dynamic'

// We keep the models in sync for all the slices in order to make SliceMachine work
// (if we didn't, then any changes we made from this app would delete them all!)
// but we actually only need to export the ones we might want to simulate
// in SliceMachine in this file.

export const components = {
  dev_blog_code_slice: dynamic(() => import('./DevBlogCodeSlice')),
  dev_blog_rich_text_slice: dynamic(() => import('./DevBlogRichTextSlice')),
}
