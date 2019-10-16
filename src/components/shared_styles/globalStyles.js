import { createGlobalStyle } from "styled-components"

export const GlobalTextStyle = createGlobalStyle`
body{
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap");
  font-family: 'Poppins', sans-serif !important;
}
 
p, h1, h2, h3, h4, h5, span,button,  li{
    color: ${props => props.theme.font_main};
}

h1{
  font-size: 2.2rem;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
}

h3{
  font-size: 1.6rem;
  @media (max-width: 600px) {
    font-size: 1.4rem;

      }
}

p {
    font-size: 1.2rem;
    @media (max-width: 800px) {
      font-size: 1rem;
    }
}
`
