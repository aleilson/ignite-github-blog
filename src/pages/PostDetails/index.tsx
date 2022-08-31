import { Header } from '../../components/Header'
import { PostDetailsContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import { PostsContext } from '../../context/PostsContext'
import { useContext } from 'use-context-selector'

export function PostDetails() {
  const { postDetail } = useContext(PostsContext)

  return (
    <>
      <Header />

      <PostDetailsContainer>
        <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={String(postDetail?.body)}
        />
      </PostDetailsContainer>
    </>
  )
}
