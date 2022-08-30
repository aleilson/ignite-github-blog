import { InputSearchContent, SearchContentContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../../../context/PostsContext'
import { useForm } from 'react-hook-form'

const searchContentSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchContentSchema>

export function SearchContent() {
  const { posts } = useContext(PostsContext)

  const fetchPost = useContextSelector(PostsContext, (context) => {
    return context.fetchPosts
  })

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchContentSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await fetchPost(data.query)
  }

  return (
    <SearchContentContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <strong>Publicações</strong>
        <p>{posts ? posts.length : '0'} publicações</p>
      </div>

      <InputSearchContent
        type="text"
        placeholder="Busque conteúdo"
        {...register('query')}
      />
    </SearchContentContainer>
  )
}
