import React, { Component } from 'react';
import './carousel.css';

import { getNextFile } from '../../utils/files';

/* EXAMPLE IMPORT ALL FILES FROM ASSETS FOLDER AND ITS DYNAMIC PATH (NOT TESTED IN PROD)
const images = Object.values(
  importAllFiles(require.context('../../assets/', false, /\.(png|jpe?g|svg)$/)),
);
*/

class Carousel extends Component {
  state = {
    previousImg: null,
    previousImgIndex: 0,
    currentImg: null,
    currentImgIndex: 1,
    nextImg: null,
    nextImgIndex: 2,
  };

  images = [
    'super-mario-kart.png',
    'super-mario-world.jpg',
    'top-gear.jpg',
  ];

  async componentDidMount() {
    this.rollCarousel();
    this.carouselInterval = setInterval(() => {
      this.rollCarousel();
    }, 5000);
  }

  async componentWillUnmount() {
    clearInterval(this.carouselInterval);
  }


  rollCarousel() {
    const { currentImgIndex, previousImgIndex, nextImgIndex } = this.state;

    // Set Previous Img
    let auxObj = getNextFile(this.images, previousImgIndex);
    this.setState({ previousImg: auxObj.auxFile, previousImgIndex: auxObj.auxFileIndex });

    // Set Current Img
    auxObj = getNextFile(this.images, currentImgIndex);
    this.setState({ currentImg: auxObj.auxFile, currentImgIndex: auxObj.auxFileIndex });

    // Set Next Img
    auxObj = getNextFile(this.images, nextImgIndex);
    this.setState({ nextImg: auxObj.auxFile, nextImgIndex: auxObj.auxFileIndex });
  }

  render() {
    const { currentImg, previousImg, nextImg } = this.state;
    return (
      <div id="animated-carousel">
        <img
          className="previous-image"
          src={`${process.env.PUBLIC_URL}/image/${previousImg}`}
          alt="Random Game"
        />
        <img
          className="current-image"
          src={`${process.env.PUBLIC_URL}/image/${currentImg}`}
          alt="Random Game"
        />
        <img
          className="next-image"
          src={`${process.env.PUBLIC_URL}/image/${nextImg}`}
          alt="Random Game"
        />
      </div>
    );
  }
}

export default Carousel;
