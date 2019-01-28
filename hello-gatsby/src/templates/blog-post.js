import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"
import ArticleHeader from "../components/articleHeader"



export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Container>
      
        <ArticleHeader title={post.frontmatter.title}/>

     
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      
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