import styled from "styled-components"
import theme from "../styles/theme"

const Wrapper = styled.div`
  max-width: ${theme.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
  @media (max-width: ${theme.breakpoints.m}) {
    padding: 0 1.5rem;
  }
`

export default Wrapper
