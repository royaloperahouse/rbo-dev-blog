'use client'

import { isFilled, RichTextField, SelectField } from '@prismicio/client'
import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import c from 'highlight.js/lib/languages/c'
import cpp from 'highlight.js/lib/languages/cpp'
import css from 'highlight.js/lib/languages/css'
import go from 'highlight.js/lib/languages/go'
import xml from 'highlight.js/lib/languages/xml'
import javascript from 'highlight.js/lib/languages/javascript'
import python from 'highlight.js/lib/languages/python'
import ruby from 'highlight.js/lib/languages/ruby'
import rust from 'highlight.js/lib/languages/rust'
import typescript from 'highlight.js/lib/languages/typescript'
import 'highlight.js/styles/night-owl.css'
import { useEffect, useRef } from 'react'

interface CodeSliceProps {
  field?: RichTextField
  language?: SelectField
}

hljs.registerLanguage('bash', bash)
hljs.registerLanguage('c', c)
hljs.registerLanguage('cpp', cpp)
hljs.registerLanguage('css', css)
hljs.registerLanguage('go', go)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('ruby', ruby)
hljs.registerLanguage('rust', rust)
hljs.registerLanguage('typescript', typescript)

const CodeSlice = ({ field, language }: CodeSliceProps) => {
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current)
    }
  }, [field, language])

  if (!isFilled.richText(field)) return null

  const codeLanguage = isFilled.select(language) ? language : undefined

  if (field[0].type === 'preformatted') {
    return (
      <section className='flex flex-col gap-2'>
        {codeLanguage && <figcaption className='text-xs'>{codeLanguage}</figcaption>}
        <figure className='overflow-hidden rounded-lg'>
          <pre className='!rounded-lg m-0'>
            <code 
              ref={codeRef}
              className={codeLanguage ? `language-${codeLanguage}` : undefined}
            >
              {field[0].text}
            </code>
          </pre>
        </figure>
      </section>
    )
  }

  return null
}

export default CodeSlice
