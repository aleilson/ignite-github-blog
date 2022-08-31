import { useNavigate } from 'react-router-dom'
import { useContext } from 'use-context-selector'
import { PostsContext } from '../../context/PostsContext'
import { dateFormatFromNow } from '../../utils/dateFormat'
import {
  ArrowUpIcon,
  CalendarIcon,
  ChevronLeftIcon,
  CommentIcon,
  GithubIcon,
} from '../Icons'
import { PostInfoContainer, PostProfile } from './styles'

export function PostInfo() {
  const { postDetail, user } = useContext(PostsContext)
  const navigate = useNavigate()

  function handleBackHome() {
    navigate('/')
  }

  return (
    <PostInfoContainer>
      <div>
        <button onClick={handleBackHome}>
          <ChevronLeftIcon /> Voltar
        </button>
        <a href={postDetail?.html_url}>
          Ver no github <ArrowUpIcon />
        </a>
      </div>

      <strong>{postDetail?.title}</strong>

      <PostProfile>
        <li>
          <GithubIcon /> {user ? user.name : 'Aleilson'}
        </li>

        <li>
          <CalendarIcon /> {dateFormatFromNow(String(postDetail?.created_at))}
        </li>

        <li>
          <CommentIcon /> {postDetail ? postDetail.comments : '0'} comentários
        </li>
      </PostProfile>
    </PostInfoContainer>
  )
}
