import { useNavigate } from 'react-router-dom'
import { useContext } from 'use-context-selector'
import { PostsContext } from '../../../../context/PostsContext'
import { dateFormatFromNow } from '../../../../utils/dateFormat'
import { RepoCard, RepoListContainer } from './styles'
import ReactMarkdown from 'react-markdown'

export function RepoList() {
  const { posts, getPost } = useContext(PostsContext)
  const navigate = useNavigate()

  async function handleGetPostDetail(postId: string) {
    await getPost(`/repos/aleilson/ignite-github-blog/issues/${postId}`)

    navigate(`/post/${postId}`)
  }

  return (
    <RepoListContainer>
      {posts ? (
        posts.map((post) => {
          return (
            <RepoCard
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
            </RepoCard>
          )
        })
      ) : (
        <strong>Nenhum post para listar </strong>
      )}
    </RepoListContainer>
  )
}
