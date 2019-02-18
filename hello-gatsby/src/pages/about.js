import React from "react";
import Logo from "../components/logo";
import Footer from "../components/footer";
import Container from "../components/container";
// import { Link, graphql } from "gatsby";

export default ({ data }) => (
  <div>
    <title>About - slk333|Awew33</title>
    <meta name="description" content="A minimalist blog" />
    {/*feuille de style*/}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
    />
    

    <Container>
    <Logo/>
      <hr />
      <h2>About me</h2>
      <p>Hey, my name is Antoine W. and I'm from France. Here's what I do:</p>
      <h2>Web</h2>
      <p>
        <i>This Blog</i> , and other
        <a href="https://slk333.github.io/"> sites</a>, using HTTP, CSS, Js,
        React, Gatsby, GraphQL, MongoDB and Vapor.
      </p>
      <h2>iOS</h2>
      <p>
        <i>Review Chinese</i> , an App to review Chinese words, through the use
        of smart flash-cards.
      </p>
      <p>
        <i>Revive</i> , an App to keep track of recurring tasks and save your
        progress along the way.
      </p>
      <h2>Chinese</h2>
      <p>
        With the goal of speaking Chinese fluently, I'm almost there. HSK 6 is
        the highest level, while my current level is HSK 5.
      </p>
      <h2>Law studies</h2>
      <p>
        I studied Law at University. I majored in Corporate and Tax Law. I then
        studied Chinese Law for 1 year and did an internship in a
        Shanghai-based french Lawfirm.
      </p>
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
