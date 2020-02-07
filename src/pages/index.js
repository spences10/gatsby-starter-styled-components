import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"
import { H1, P } from "../components/page-elements"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <H1>Hi people</H1>
    <P>Welcome to your new Gatsby site.</P>
    <P>Now go build something great.</P>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
