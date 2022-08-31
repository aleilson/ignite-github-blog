import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface IPost {
  url: string
  html_url: string
  title: string
  created_at: string
  body: string
  comments: string
  number: number
}

interface IUser {
  avatar_url: string
  login: string
  html_url: string
  followers: string
  bio: string
  name: string
}

interface PostsContextType {
  posts: IPost[]
  fetchPosts: (query?: string) => Promise<void>
  getPost: (url: string) => Promise<void>
  postDetail: IPost | undefined
  user: IUser | undefined
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<IPost[]>([])
  const [postDetail, setPostDetail] = useState<IPost>()
  const [user, setUser] = useState<IUser>()

  const getUserData = async () => {
    const response = await api.get('/users/aleilson')
    setUser(response.data)
  }

  const getPost = async (url: string) => {
    const response = await api.get(`${url}`)

    console.log(response.data)
    setPostDetail(response.data)
  }

  const fetchPosts = useCallback(async (query?: string) => {
    const response = await api.get(
      `search/issues?q=${query || ''}repo:aleilson/ignite-github-blog`,
    )

    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    fetchPosts()
    getUserData()
  }, [fetchPosts])

  return (
    <PostsContext.Provider
      value={{
        posts,
        fetchPosts,
        getPost,
        postDetail,
        user,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
