import { Header } from '../../components/Header'
import { PostList } from './components/PostList'
import { SearchContent } from './components/SearchContent'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <SearchContent />
        <PostList />
      </HomeContainer>
    </>
  )
}
