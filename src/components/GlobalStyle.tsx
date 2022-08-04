import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{margin:0;padding:0;color:inherit; font-family: 'Arial'}
  * ::-webkit-scrollbar {display: none;}
  *,:after, :before {box-sizing:border-box;flex-shrink:0;}
  :root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;-moz-tab-size:4;tab-size:4}
  html {width: 100%; height:100%;}
  body { max-width: 400px; height: 100%; margin: 0 auto; color: black; background: white; box-shadow: 0 0 20px 0 #d7d7d7}
  img {display: block;max-width:100%;};
  li {list-style: none};
  p {margin: 0};
  button {background:none;border:0;cursor:pointer;}
  a {text-decoration:none}
`;

export default GlobalStyle;
