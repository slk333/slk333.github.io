import React from "react"

export default (props) => (


 <header>
   
   <a href="../index.html"><img src="../logo.svg" alt="logo" id="logo" /></a>

    <h1>{props.title}</h1>
   
    <div class="credit">
        <p>
            Written by Antoine - {props.date}
        </p>
    </div>
</header>
)