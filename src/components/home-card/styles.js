import styled from 'styled-components/macro';

export const HomeCardStyle = styled.div`
  padding: 20px;
  background-color: #373e49;
  border-radius: 15px;

  button {
    float: left;
    margin-left: 5px;
    margin-top: 5px;
  }

  img {
    float: right;
    margin-right: 15px;
    margin-top: 15px;
    height: 25px;
  }

  & > div:nth-child(3) {
    padding: 60px 0;
  }
`;

export default HomeCardStyle;
