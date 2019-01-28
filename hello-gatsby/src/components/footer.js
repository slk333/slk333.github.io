import React from "react";

export default props => (
  <footer>
    <div style={{}}>
      <div>
        Copyright 2019 Antoine Weber
        <br />
        <br />
        <div>
          <a
            href="https://twitter.com/antoineweber?ref_src=twsrc%5Etfw"
            class="twitter-follow-button"
            data-show-count="true"
          >
            Follow @antoineweber
          </a>
        </div>
      </div>

      <div>
      
        <br />
        <a
          class="twitter-timeline"
          data-width="400"
          data-height="200"
          data-theme="dark"
          href="https://twitter.com/antoineweber?ref_src=twsrc%5Etfw"
        >
          Tweets by antoineweber
        </a>{" "}
      </div>
    </div>

    <div style={{ display: "none" }}>
      <blockquote class="twitter-tweet" data-lang="en">
        <p lang="en" dir="ltr">
          I will be in South Korea - Seoul - Gangnam in May 2019 for two weeks!
        </p>
        &mdash; AntoineWeber (@antoineweber){" "}
        <a href="https://twitter.com/antoineweber/status/1080834933902450688?ref_src=twsrc%5Etfw">
          January 3, 2019
        </a>
      </blockquote>
    </div>
  </footer>
);
