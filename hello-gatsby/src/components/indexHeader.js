import React from "react";

export default props => (
  <div>
    {/*Blog Logo*/}
    <a href="../index.html">
      <img src="../logo.svg" alt="logo" id="logo" />
    </a>
    {/*Blog Title*/}
    <h1 style={{ letterSpacing: "1px", marginBottom: "0px" }}>
      slk333|Awew33{" "}
      <span role="img" aria-label="plane take-off">
        🛫
      </span>
    </h1>
    <p>
      A blog about what I find out... Also a good excuse to practice my skills.
    </p>
  </div>
);