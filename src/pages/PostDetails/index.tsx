import { Header } from '../../components/Header'
import { PostDetailsContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useContext } from 'react'
import { PostsContext } from '../../context/PostsContext'

export function PostDetails() {
  const { postDetail } = useContext(PostsContext)

  return (
    <>
      <Header />

      <PostDetailsContainer>
        <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={String(postDetail)}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  // eslint-disable-next-line react/no-children-prop
                  children={String(children).replace(/\n$/, '')}
                  style={dracula as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        />
      </PostDetailsContainer>
    </>
  )
}
