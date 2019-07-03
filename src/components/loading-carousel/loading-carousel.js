import React, { Component } from 'react';
import { Carousel } from 'antd';
import './loading-carousel.css';

import { importAllImages } from '../../utils/files';

const images = importAllImages(require.context('../../assets', false, /\.(png|jpe?g|svg)$/));

class LoadingCarousel extends Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
  }

  async componentDidMount() {
    setInterval(() => {
      this.carouselRef.current.next();
    }, 5000);
  }

  render() {
    console.log('images', images);
    return (
      <div id="loading-carousel">
        <Carousel dots={false} ref={this.carouselRef}>
          <div>
            <img src={images['super-mario-world.jpg']} alt="Super Mario World" />
          </div>
          <div>
            <img src={images['super-mario-kart.png']} alt="Super Mario Kart" />
          </div>
          <div>
            <img src={images['top-gear.jpg']} alt="Top Gear" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default LoadingCarousel;
