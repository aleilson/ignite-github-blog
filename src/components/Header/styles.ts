import styled from 'styled-components'

import bannerBackground from '../../assets/cover-header.png'

export const HeaderContainer = styled.div`
  background: url(${bannerBackground}) no-repeat center;
  width: 100%;
  height: 18.5625rem;
  background-size: cover;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding-top: 208px;
`
