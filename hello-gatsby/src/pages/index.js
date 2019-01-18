import React from "react"
import IndexHeader from "../components/indexHeader"
import Latests from "../components/latests"
import Archives from "../components/archives"
import Footer from "../components/footer"
import Container from "../components/container"
export default () => (

<div>


  <title>Minimalist Blog</title>
  <meta name="description" content="A minimalist blog" />
  {/*feuille de style*/}
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css" />




  <Container>
    <IndexHeader/>
    <hr />
    <Latests/>
    <hr />
    <Archives/>
    <hr />
    <Footer/>
  </Container>

</div>
)
