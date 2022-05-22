import { memo } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background-color: #e57373;
  padding: 2px 0;
`

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 1.75rem;
`

const Header = memo(() => {
  return (
    <StyledHeader>
      <StyledTitle>Campeonato Brasileiro</StyledTitle>
    </StyledHeader>
  )
})

Header.displayName = 'Header'
export default Header
