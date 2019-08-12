import { Modal } from 'antd';
import styled from 'styled-components/macro';

export const ModalStyle = styled(Modal)`
  text-align: center;

  button:nth-child(1) {
    float: right;
    margin-right: 15px;
  }

  div:nth-child(3) {
    padding: 15px;

    > div:nth-child(1) {
      width: inherit !important;
      height: inherit !important;
    }
  }

  h1 {
    color: #ff6347;
  }
`;

export default ModalStyle;
