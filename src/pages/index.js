import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import Image from "../components/image"
import SEO from "../components/seo"
import moment from "moment"
import styled from "styled-components"

import theme from "../styles/theme"

let greetingText = (now) => {
  if (typeof now === 'undefined') {
    now = moment()
  }
  let resp = now.format('dddd').toLowerCase() + ' '
  const currentHour = now.hour()
  if (currentHour < 12) resp += "morning"
  else if (currentHour < 18) resp += "afternoon"
  else return resp += "evening"
  return resp
}

const Hero = styled.header`
  background-color: ${theme.colors.greyGreen};
  display: flex;
  align-items: center;
`

const HeroInner = styled(Wrapper)`
  padding-top: 13rem;
  padding-bottom: 7rem;
  h1 {
    margin-bottom: 2rem;
    font-size: 2.8rem;
  }
  @media (max-width: ${theme.breakpoints.l}) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
  @media (max-width: ${theme.breakpoints.m}) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  @media (max-width: ${theme.breakpoints.s}) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`

const HeroText = styled.div`
  font-size: 1.7rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  a {
    box-shadow: 0 1px 0 0 currentColor;
    &:hover,
    &:focus {
      color: ${theme.colors.greyGreen};
      background: ${theme.colors.greyDark};
      transition: all 0.25s ease-out;
    }
  }
  .sep {
    font-style: italic;
    position: relative;
    left: 80px;
    margin-bottom: 120px;    
    &:before {
        content: "";
        width: 3rem;
        height: 1px;
        background-color: rgb(89, 92, 98);
        display: inline-block;
        position: absolute;
        top: 50%;
        left: -80px;
    }
  } 
  @media (max-width: ${theme.breakpoints.m}) {
    font-size: 1.4rem;
  }
  @media (max-width: ${theme.breakpoints.s}) {
    font-size: 1.25rem;
  }
`

const Social = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  li {
    display: inline;
    &:not([data-name='social-entry-0']) {
      margin-left: 2.5rem;
      @media (max-width: ${theme.breakpoints.s}) {
        margin-left: 1.75rem;
      }
    }
    a {
      font-style: normal;
      color: ${theme.colors.greyDark};
      font-size: 1.333rem;
      font-weight: 600;
      &:hover,
      &:focus {
        color: ${theme.colors.primary};
        text-decoration: none;
      }
      @media (max-width: ${theme.breakpoints.s}) {
        font-size: 1.2rem;
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <Hero>
      <HeroInner>
        <h1>happy {greetingText()}</h1>
        <HeroText>
          <p>Welcome to my site. I'm CTO at <a href="https://www.deelmedia.com" title="DEEL Media! is a full service digital merchandising agency. We deliver high end digital signage solutions and custom software.">DEEL Media!</a>, a technology lover and artist in Atlanta, GA. I'd like to share <a href="http://www.lynoredost.com/" title="I recently updated my wife's sculpture portfolio website to use angular 6">something new I made</a>, <a href="http://laika.org" title="18 years old! Amazingly, I found that this site I built for Planet Mouse back in 2000 is still out there on the web and still works too!">something old I made</a> and <a href="https://github.com/robbyrussell/oh-my-zsh" title="I spend a lot of my day in terminal lately and oh-my-zsh has been making that a lot more pleasant.">a great tool I've been using lately</a>.</p>
          <p>Drop me a line on social to connect.</p>
          <p class="sep">Jeremy Dost</p>
        </HeroText>
        <Social>
          <li data-name="social-entry-0" key="github">
            <a href="https://github.com/sharpdot">GitHub</a>
          </li>
          <li data-name="social-entry-1" key="linkedin">
            <a href="https://www.linkedin.com/in/jdostsharpdot/">LinkedIn</a>
          </li>
          <li data-name="social-entry-2" key="instagram">
            <a href="https://www.instagram.com/jeremydost/">Instagram</a>
          </li>
        </Social>
      </HeroInner>
    </Hero>
    

  </Layout>
)

export default IndexPage
