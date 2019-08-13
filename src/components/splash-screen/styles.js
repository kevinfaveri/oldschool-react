import styled from 'styled-components/macro';

export const SplashScreenStyle = styled.div`
  margin-top: 5%;
  text-align: center;

  > * > .header-logo {
    font-size: 70px;
    color: #ff6347 !important;
  }

  > * > .header-description {
    font-size: 40px;
    color: #ff6347 !important;
    @media (max-width: 1020px) {
      display: none;
    }
  }

  #close-splash,
  #spin {
    margin-top: 15px;
  }
`;

export default SplashScreenStyle;
