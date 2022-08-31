import { useNavigate } from 'react-router-dom'
import { useContext } from 'use-context-selector'
import { PostsContext } from '../../../../context/PostsContext'
import { dateFormatFromNow } from '../../../../utils/dateFormat'
import { PostListContainer, PostCard } from './styles'
import ReactMarkdown from 'react-markdown'

export function PostList() {
  const { posts, getPost } = useContext(PostsContext)
  const navigate = useNavigate()

  async function handleGetPostDetail(postId: string) {
    await getPost(`/repos/aleilson/ignite-github-blog/issues/${postId}`)

    navigate(`/post/${postId}`)
  }

  return (
    <PostListContainer>
      {posts ? (
        posts.map((post) => {
          return (
            <PostCard
              key={post.title}
              onClick={() => handleGetPostDetail(String(post.number))}
            >
              <div>
                <strong>{post.title}</strong>
                <p>{dateFormatFromNow(post.created_at)}</p>
              </div>

              <ReactMarkdown
                // eslint-disable-next-line react/no-children-prop
                children={String(post.body)}
              />
            </PostCard>
          )
        })
      ) : (
        <strong>Nenhum post para listar </strong>
      )}
    </PostListContainer>
  )
}
