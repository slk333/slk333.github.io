import React from "react";


export default props => (
  <section id="latest">
   <small style={{ fontSize: "15px" }}>This Week...</small>
  <div>{props.children}</div>
  </section>
);
