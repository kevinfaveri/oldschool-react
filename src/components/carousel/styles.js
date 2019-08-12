import styled from 'styled-components/macro';

export const CarouselStyle = styled.div`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;

  img {
    border-radius: 15px;
  }

  #current-image {
    height: 400px;
    opacity: 0.7;
  }

  #previous-image,
  #next-image {
    opacity: 0.2;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export default CarouselStyle;
