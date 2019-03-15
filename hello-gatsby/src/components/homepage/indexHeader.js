import React from "react";
import {useState} from "react";

export default function IndexHeader(props){

  const [emoji,setEmoji] = useState("🛫");
  
  function changeEmoji(){
    if (emoji === "🛫"){
    setEmoji("🚀")}
    else {
      setEmoji("🛫")
    }
  }
  const emojiSpan = <span onClick ={changeEmoji} role="img" ariaLabel="plane take-off">{emoji}</span>
  

return(
  <div>
    {/*Blog Logo*/}
    <a href="../index.html">
      <img src="../logo.svg" alt="logo" id="logo" />
    </a>

    {/*Blog Title*/}
    <h1 style={{ letterSpacing: "1px", marginBottom: "0px" }}>
      slk333|Awew33{" "}
     {emojiSpan}
    </h1>
    <p>
      A blog about what I find out... Also a good excuse to practice my skills.
    </p>
  </div>
  )
};
