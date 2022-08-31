import styled from 'styled-components'

export const PostDetailsContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 6.875rem auto 0;

  strong {
    display: block;
    font-size: 1rem;
    line-height: 1.5625rem;
    margin-bottom: 0.625rem;
  }
  p {
    margin-bottom: 0.625rem;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: underline;
  }

  img {
    width: 100%;
    margin: 1rem 0;
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.blue};
    margin: 0.625rem 0;
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }
`
