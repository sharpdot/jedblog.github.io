import styled from "styled-components"
import theme from "../styles/theme"

const Title = styled.p`
  font-style: italic;
  font-size: 1.4444rem;
  position: relative;
  &:before {
    content: '';
    width: 3rem;
    height: 1px;
    background-color: ${theme.colors.grey};
    display: inline-block;
    position: absolute;
    top: 50%;
    left: -80px;
  }
  @media (max-width: ${theme.breakpoints.l}) {
    &:before {
      width: 1.5rem;
      left: -40px;
    }
  }
  @media (max-width: ${theme.breakpoints.m}) {
    &:before {
      width: 1.5rem;
      left: -35px;
    }
  }
`

export default Title