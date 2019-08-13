import styled from 'styled-components/macro';

export const GameCardStyle = styled.div`
  outline: none;
  background-color: #373e49;
  color: #ff6347;
  border-radius: 15px;
  height: inherit;
  padding: 10px;
  margin: 10px;
  text-align: center;

  &:hover {
    background-color: #2c313a;
    cursor: pointer;
  }

  div:nth-child(1) {
    div:nth-child(1) {
      width: inherit !important;
      height: 250px !important;
    }
  }

  div:nth-child(2) > span,
  div:nth-child(3) > span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  & > div:nth-child(4) > span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`;

export default GameCardStyle;
