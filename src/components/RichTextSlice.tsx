import richTextSerializer from '@/helpers/richTextSerializer'
import { RichTextField } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'

interface RichTextSliceProps {
  field?: RichTextField | null
  className?: string
}

const RichTextSlice = ({ field, className }: RichTextSliceProps) => {
  const trimmedRichText: RichTextField | undefined = (field
    ? field.filter(node => {
        if ('text' in node) return node.text.trim().length > 0

        return true
      }) as RichTextField
    : undefined
  )

  return (
    <section className={`flex flex-col items-left gap-10${className ? ` ${className}` : ''}`}>
      <PrismicRichText
        field={trimmedRichText}
        components={richTextSerializer}
      />
    </section>
  )
}

export default RichTextSlice
