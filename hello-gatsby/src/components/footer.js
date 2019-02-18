import React from "react";
import Twitter from "./twitter.js";
import { Link } from "gatsby";

export default props => (
  <footer>
    <div className="spaceBetween">
      
     
      <div>
        {/*About Page*/}
        <Link to="./">Home</Link> - <Link to="./about/">About me</Link>
      </div>
      <br />
      <div>Copyright 2019 Antoine Weber</div>
    </div>
    <div>
    <br />
      
      <Twitter />
    </div>
  </footer>
);
