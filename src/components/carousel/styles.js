import styled from 'styled-components/macro';

export const CarouselStyle = styled.div`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;

  img {
    border-radius: 15px;
  }

  #current-image {
    width: 100%;
    opacity: 0.7;
    @media (max-width: 1360px) {
      height: 280px;
    }
    @media (max-width: 1130px) {
      height: 260px;
    }
  }

  #previous-image,
  #next-image {
    width: 90%;
    opacity: 0.2;
    margin: 50px 0;
    display: visible;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export default CarouselStyle;
