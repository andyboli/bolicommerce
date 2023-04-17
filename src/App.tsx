import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

import Navigation from "./view/navigation";

const App: React.FC = () => (
  <Fragment>
    <GlobalStyle />
    <Navigation />
  </Fragment>
);

const GlobalStyle = createGlobalStyle`
* {
  border-radius: 10px;
  color: #151515;
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  font-weight: 500;
  margin: 0;
  padding: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body {
  margin: 20px 40px;
  background-color: #f4a6b8;
  @media screen and (max-width: 480px) {
    margin: 10px 10px;
  }
}
`;
export default App;

/* 
ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-vertical ant-dropdown-menu-light css-dev-only-do-not-override-htwhyh */
