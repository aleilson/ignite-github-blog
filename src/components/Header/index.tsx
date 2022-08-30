import { PostInfo } from '../PostInfo'
import { Profile } from '../Profile'
import { HeaderContainer, HeaderContent } from './styles'

export function Header() {
  const currentPage = window.location.pathname

  return (
    <HeaderContainer>
      <HeaderContent>
        {currentPage === '/' ? <Profile /> : <PostInfo />}
      </HeaderContent>
    </HeaderContainer>
  )
}
