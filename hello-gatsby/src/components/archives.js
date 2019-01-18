import React from "react"

export default (props) => (


    <section id="archives">
      <small style={{fontSize: '15px'}}>Archives...</small>
      <ul>
        <li>
          <div>
            {/*ACTUAL ARTICLE CONTENT STARTS HERE*/}
            {/*Article 2*/}
            {/*Article Title*/}
            <h2>
              Write posts with Markdown
            </h2>
            {/*Article Description*/}
            <p>
              It's cumbersome to write html by hand. When you write a post, you want to focus on what
              you write, and not on the html structure. But you still need to format your text.
            </p>
            {/*Article Link*/}
            <a href="Using-Markdown-to-write-posts.html">Continue Reading</a>
            {/*ACTUAL ARTICLE CONTENT ENDS HERE*/}
          </div>
        </li>
        <li>
          <div>
            {/*ACTUAL ARTICLE CONTENT STARTS HERE*/}
            {/*Article 1*/}
            {/*Article Title*/}
            <h2>
              Why I'm making a custom blog
            </h2>
            {/*Article Description*/}
            <p>
              Why I'm making a custom blog instead of using ready-to-use solutions like Blogger, Medium
              or
              Wordpress.
            </p>
            {/*Article Link*/}
            <a href="Why-I'm-making-a-custom-blog.html">Continue Reading</a>
            {/*ACTUAL ARTICLE CONTENT ENDS HERE*/}
          </div>
        </li>
      </ul>
    </section>

)
