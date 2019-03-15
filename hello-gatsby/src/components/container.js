import React from "react";
import styled from "styled-components"

const Container = styled.div`
  /* le container positionne le contenu */

  /* empêche une largeur exagérée du contenu (desktop)*/
  max-width: 900px;

  /* marge intérieure pour quel le contenu ne colle pas aux bords (mobile) */
  padding: 0 20px;

   /* le contenu de touche pas le haut (28px) ni le bas de la page (40px).
    centrage horizontal du contenu avec auto et auto */
  margin: 28px auto 40px auto;

`

export default ({ children }) => (
  <Container>{children}</Container>
);
