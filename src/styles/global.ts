import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #0D0C1D;
    --background-secondary: #191736;
    --primary: #6F2DBD;
    --text-primary: #F9F8F8;
    --text-secondary: #D0C8C8;
  }

  body {
    margin: 0 auto;
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    color: var(--text-primary);
  }

  button {
    cursor: pointer;
  }
`;
