import React from "react";
import { Link } from "gatsby";
import ArticleDescription from "./articleDescription";

export default props => (
  <section id="latest">
    <small style={{ fontSize: "15px" }}>This Week...</small>

    <ArticleDescription
      title="Embed and stylize code in a webpage"
      hook="If you want to embed some code in your article, and want it to look nice, there is a simple and quick
        way to do it. You can use Prettify by Google."
    />
    <Link to="article">Continue Reading</Link>
    {/* <a href="Embedding-code-in-html.html">Continue Reading</a> */}

    <ArticleDescription
      title="Why would you learn programming"
      hook="So you can talk to the computer.
      But it's more than that. It's more like to use the computer as an
      extension of your brain, just like we use the machines to extend our body
      limited capabilities. So what does a computer have to offer that we don't
      have already ?"/>
    <Link to="article">Continue Reading</Link>
    {/* <a href="Why-is-it-worth-learn-programming.html">Continue Reading</a> */}
   
  </section>
);
