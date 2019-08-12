import { Layout } from 'antd';
import styled from 'styled-components/macro';

const { Header } = Layout;

export const LayoutHeaderStyle = styled(Header)`
  text-align: center;
  padding: 0 5px !important;

  & > div:nth-child(1) {
    float: left;
  }

  & > div:nth-child(2) {
    float: right;
  }

  & > div:nth-child(3) {
    float: right;
    margin-right: 35px;
  }

  img {
    width: 120px;
    margin-left: 15px;
    margin-right: 30px;
  }
`;

export default LayoutHeaderStyle;
