import React, { Component } from 'react';
import './carousel.css';
import { getNextFile } from '../../utils/files';
import { validateStringArray, validateNumberInterval } from '../../utils/props-validate';

class Carousel extends Component {
  state = {
    previousImg: null,
    previousImgIndex: 0,
    currentImg: null,
    currentImgIndex: 1,
    nextImg: null,
    nextImgIndex: 2,
  };

  constructor(props) {
    super(props);
    this.rollCarousel = this.rollCarousel.bind(this);
  }

  async componentDidMount() {
    const { intervalSeconds } = this.props;
    this.rollCarousel();
    this.carouselInterval = setInterval(() => {
      this.rollCarousel();
    }, intervalSeconds * 1000);
  }

  async componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }

  rollCarousel() {
    const { imageArray } = this.props;
    const { currentImgIndex, previousImgIndex, nextImgIndex } = this.state;

    // Set Previous Img
    let auxObj = getNextFile(imageArray, previousImgIndex);
    this.setState({ previousImg: auxObj.auxFile, previousImgIndex: auxObj.auxFileIndex });

    // Set Current Img
    auxObj = getNextFile(imageArray, currentImgIndex);
    this.setState({ currentImg: auxObj.auxFile, currentImgIndex: auxObj.auxFileIndex });

    // Set Next Img
    auxObj = getNextFile(imageArray, nextImgIndex);
    this.setState({ nextImg: auxObj.auxFile, nextImgIndex: auxObj.auxFileIndex });
  }

  render() {
    const { currentImg, previousImg, nextImg } = this.state;
    return (
      <div id="animated-carousel">
        <img
          id="previous-image"
          src={`${process.env.PUBLIC_URL}/image/${previousImg}`}
          alt="Random Game"
        />
        <img
          id="current-image"
          src={`${process.env.PUBLIC_URL}/image/${currentImg}`}
          alt="Random Game"
        />
        <img id="next-image" src={`${process.env.PUBLIC_URL}/image/${nextImg}`} alt="Random Game" />
      </div>
    );
  }
}

Carousel.defaultProps = {
  imageArray: ['super-mario-kart.png', 'super-mario-world.jpg', 'top-gear.jpg'],
  intervalSeconds: 5,
};

Carousel.propTypes = {
  imageArray: (props, propName) => validateStringArray(props, propName, 'image', 3),
  intervalSeconds: (props, propName) => validateNumberInterval(props, propName, 1, 10),
};

export default Carousel;
