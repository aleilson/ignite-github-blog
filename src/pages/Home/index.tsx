import { Header } from '../../components/Header'
import { RepoList } from './components/RepoList'
import { SearchContent } from './components/SearchContent'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <SearchContent />
        <RepoList />
      </HomeContainer>
    </>
  )
}
