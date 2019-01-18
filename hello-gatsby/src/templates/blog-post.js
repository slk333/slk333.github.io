import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"
import IndexHeader from "../components/indexHeader"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Container>
        <IndexHeader/>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`