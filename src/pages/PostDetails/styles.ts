import styled from 'styled-components'

export const PostDetailsContainer = styled.div`
  strong {
    font-size: 1rem;
    line-height: 1.5625rem;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: underline;
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;
  img {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.blue};
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  pre {
    background: ${({ theme }) => theme['base-post']};
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
      code {
        font-family: 'FiraCode', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`