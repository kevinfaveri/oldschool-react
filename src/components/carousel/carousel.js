import React, { Component } from 'react';
import './carousel.css';

import { importAllImages } from '../../utils/files';
import { getNextImage } from '../../utils/carousel';

const images = Object.values(
  importAllImages(require.context('../../assets/', false, /\.(png|jpe?g|svg)$/)),
);

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousImg: null,
      previousImgIndex: 0,
      currentImg: null,
      currentImgIndex: 1,
      nextImg: null,
      nextImgIndex: 2,
    };
    this.rollCarousel();
  }

  async componentDidMount() {
    setInterval(() => {
      this.rollCarousel();
    }, 5000);
  }

  // TODO: Fix this
  rollCarousel() {
    const { currentImgIndex, previousImgIndex, nextImgIndex } = this.state;

    // Set Previous Img
    let auxObj = getNextImage(images, nextImgIndex);
    this.setState({ nextImg: auxObj.auxImg, nextImgIndex: auxObj.auxImgIndex });

    // Set Current Img
    auxObj = getNextImage(images, currentImgIndex);
    this.setState({ currentImg: auxObj.auxImg, currentImgIndex: auxObj.auxImgIndex });

    // Set Next Img
    auxObj = getNextImage(images, previousImgIndex);
    this.setState({ previousImg: auxObj.auxImg, previousImgIndex: auxObj.auxImgIndex });

  }

  render() {
    const { currentImg, previousImg, nextImg } = this.state;
    return (
      <div id="animated-carousel">
        <img
          className="previous-image"
          src={previousImg}
          alt="Super Mario World"
        />
        <img
          className="current-image"
          src={currentImg}
          alt="Super Mario World"
        />
        <img className="next-image" src={nextImg} alt="Super Mario World" />
      </div>
    );
  }
}

export default Carousel;
