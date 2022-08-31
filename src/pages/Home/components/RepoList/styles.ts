import styled from 'styled-components'

export const RepoListContainer = styled.div`
  width: 100%;
  margin-top: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`

export const RepoCard = styled.button`
  width: 26rem;
  padding: 2rem;
  border-radius: 0.375rem;
  background: ${(props) => props.theme['base-post']};
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    transition: border 0.2s;
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  & > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    strong {
      width: 17.6875rem;
      font-size: 1.25rem;
      line-height: 2rem;
      color: ${(props) => props.theme['base-title']};
      margin-bottom: 1.25rem;
      text-align: left;
    }

    p {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
      line-height: 1.375rem;
    }
  }

  blockquote {
    text-align: left;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 1.5625rem;
    max-height: 6.875rem;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    color: ${(props) => props.theme['base-text']};
  }
`
