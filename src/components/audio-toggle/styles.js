import styled from 'styled-components/macro';

export const AudioToggleStyle = styled.div`
  text-align: center;

  h4 {
    color: #ff6347;
    ${({ inlineMode }) => inlineMode && `
      display: inline;
      margin-right: 10px;
    `}
  }

  button:nth-child(2) {
    margin-right: 10px;
  }

  button:nth-child(4) {
    margin-left: 10px;
  }
`;

export default AudioToggleStyle;
