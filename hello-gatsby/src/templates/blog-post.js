import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"
import ArticleHeader from "../components/articleHeader"
import Footer from "../components/footer"



export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Container>
      
        <ArticleHeader title={post.frontmatter.title} date={post.frontmatter.fullDate}/>

     
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr/>
      <Footer/>
    </Container>

  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        fullDate: date(formatString: "MMMM D, YYYY")
      }
    }
  }
`