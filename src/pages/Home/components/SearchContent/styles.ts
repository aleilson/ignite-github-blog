import styled from 'styled-components'

export const SearchContentContainer = styled.form`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;

    strong {
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-size: 0.875rem;
      line-height: 1.375rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const InputSearchContent = styled.input`
  width: 100%;
  border: none;
  border: 1px solid ${(props) => props.theme['base-border']};
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
  border-radius: 0.375rem;
  padding: 12px 16px;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
