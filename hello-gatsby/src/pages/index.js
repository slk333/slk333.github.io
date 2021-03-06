import React from "react";
import IndexHeader from "../components/homepage/indexHeader";
import Latests from "../components/homepage/latests";
import ArticleDescription from "../components/homepage/articleDescription";
import Archives from "../components/homepage/archives";
import Footer from "../components/footer";
import Container from "../components/container";
import { Link, graphql } from "gatsby";

export default ({ data }) => (
  <div>
    <title>{data.site.siteMetadata.title}</title>
    <meta name="description" content="A minimalist blog" />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
    />

    <Container>
      <IndexHeader />
      <hr />

      <Latests>
        {data.allMarkdownRemark.edges.slice(0, 2).map(({ node }) => (
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
    site {
      siteMetadata {
        title
      }
    }

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
