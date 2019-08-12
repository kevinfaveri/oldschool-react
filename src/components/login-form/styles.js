import styled from 'styled-components/macro';

export const LoginFormStyle = styled.div`
  > #already-logged {
    > div:nth-child(1) {
      text-align: center;
    }

    button {
      width: 100%;
    }
  }

  > #login-form {
    #submit-login,
    #register-link,
    .ant-checkbox-wrapper {
      width: 100%;
    }
  }
`;

export default LoginFormStyle;
