import React from "react";

export default props => (
  <section id="archives">
    <small style={{ fontSize: "15px" }}>Archives...</small>
    <ul>{props.children}</ul>
  </section>
);
