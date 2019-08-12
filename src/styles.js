import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
      "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    background-color: #424a57 !important;
    color: #ff6347 !important;
    overflow: hidden;
  }

  /* Text */
  .text-center {
    text-align: center;
  }

  .text-primary {
    color: #ff6347 !important;
  }

  .text-big {
    font-size: 3vh !important;
  }

  .text-baf {
    font-size: 30vh !important;
  }

  .display-inline {
    display: inline;
  }

  /* Buttons */
  .btn-secondary {
    color: #ff6347 !important;
    background-color: #586274 !important;
    border: none !important;
  }

  .btn-secondary:hover {
    color: #ff6347 !important;
    background-color: #424a57 !important;
    border: none !important;
  }

  /* Dividers and Borders */
  .divider-primary {
    background-color: #ff6347 !important;
  }

  /* Margins */
  .bl {
    border-left: #ff6347 solid 1px !important;
  }

  /* Backgrounds */
  .clean-input {
    border: none !important;
    border-radius: 0px !important;
    width: 100% !important;
    color: #fafafa !important;
    background-color: #586274 !important;
    box-shadow: none !important;
  }

  .clean-input:focus {
    color: #424a57 !important;
    background-color: #e6e6e6 !important;
  }

  .clean-card {
    background-color: #373e49;
  }

  /* Ant Design Fixes*/
  .ant-input-prefix {
    background-color: transparent !important;
  }
`;

export default GlobalStyle;
