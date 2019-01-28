import React from "react";
import IndexHeader from "../components/indexHeader";
import Latests from "../components/latests";
import ArticleDescription from "../components/articleDescription";
import Archives from "../components/archives";
import Footer from "../components/footer";
import Container from "../components/container";
import { Link, graphql } from "gatsby";

export default ({ data }) => (
  <div>
    <title>Minimalist Blog</title>
    <meta name="description" content="A minimalist blog" />
    {/*feuille de style*/}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
    />

    <Container>
      <IndexHeader />
      <hr />
      
      <Latests>
      
        {data.allMarkdownRemark.edges.slice(0,2).map(({ node }) => (
          <div key={node.id}>
            <ArticleDescription
              title={node.frontmatter.title}
              hook={node.excerpt}
            />
            <Link to={node.fields.slug}>Continue Reading</Link>
          </div>
        ))}
      </Latests>
      <hr />
      <Archives>
      
        {data.allMarkdownRemark.edges.slice(2).map(({ node }) => (
       <li>
          <div key={node.id}>
            <ArticleDescription
              title={node.frontmatter.title}
              hook={node.excerpt}
            />
            <Link to={node.fields.slug}>Continue Reading</Link>
          </div>
          </li>
        ))}

      </Archives>


      <hr />
      <Footer />

    
      
    </Container>
  </div>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
