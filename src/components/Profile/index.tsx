import { useContext } from 'use-context-selector'
import { PostsContext } from '../../context/PostsContext'
import { ArrowUpIcon, BuildingIcon, GithubIcon, UsersIcon } from '../Icons'
import {
  ProfileContainer,
  ProfileContent,
  ProfileInfo,
  ProfileName,
} from './styles'

export function Profile() {
  const { user } = useContext(PostsContext)

  return (
    <ProfileContainer>
      <img
        src={user ? user.avatar_url : 'https://github.com/aleilson.png'}
        alt=""
      />

      <ProfileContent>
        <div>
          <ProfileName>{user ? user.name : 'Aleilson'}</ProfileName>
          <a href={user?.html_url}>
            Github
            <ArrowUpIcon />
          </a>
        </div>

        <span>
          {user
            ? user.bio
            : 'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.'}
        </span>

        <ProfileInfo>
          <li>
            <GithubIcon /> {user ? user.login : 'Não informado'}
          </li>

          <li>
            <BuildingIcon /> Compass.uol
          </li>

          <li>
            <UsersIcon />
            {user ? `${user.followers} seguidores` : 'Não informado'}
          </li>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
