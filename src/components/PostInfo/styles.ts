import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 0.625rem;
  padding: 2rem 2.5rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    button,
    a {
      font-size: 0.75rem;
      line-height: 1.1875rem;

      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      background: none;
      border: none;

      color: ${(props) => props.theme.blue};
      border-bottom: 2px solid transparent;

      svg {
        width: 12px;
        height: 12px;
      }

      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.blue};
        transition: border-bottom 0.2s;
      }
    }
  }

  strong {
    line-height: 1.9375rem;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const PostProfile = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  list-style: none;
  margin-top: 8px;

  li {
    color: ${(props) => props.theme['base-subtitle']};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`
