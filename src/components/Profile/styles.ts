import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 0.625rem;
  padding: 2rem 2.5rem;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 0.5rem;
  }
`

export const ProfileContent = styled.div`
  margin-left: 2rem;
  width: 100%;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    a {
      font-size: 0.75rem;
      line-height: 1.1875rem;

      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;

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

  span {
    line-height: 1.5625rem;
    margin-bottom: 24px;
    display: block;
  }
`

export const ProfileName = styled.strong`
  color: ${(props) => props.theme['base-title']};
  font-size: 1.5rem;
  line-height: 1.9375rem;
`

export const ProfileInfo = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;
  list-style: none;

  li {
    color: ${(props) => props.theme['base-subtitle']};

    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`
