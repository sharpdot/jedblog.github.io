import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import moment from "moment"

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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>happy {greetingText()}</h1>
    <p>Welcome to my site. I'd like to share some of what's come across my desk, sprung from my laptop or struck my fancy.</p>
    <p><a href="#">Drop me a line sometime</a> if you want to connect.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
