import React, {
  memo, useEffect, useState, useCallback,
} from 'react';
import './carousel.css';
import { getNextFile } from '../../utils/files';
import { validateStringArray, validateNumberInterval } from '../../utils/props-validate';

const Carousel = ({ imageArray, intervalSeconds }) => {
  const [
    {
      previousImg, previousImgIndex, currentImg, currentImgIndex, nextImg, nextImgIndex,
    },
    setState,
  ] = useState({
    previousImg: 'super-mario-kart.png',
    previousImgIndex: 0,
    currentImg: 'super-mario-world.jpg',
    currentImgIndex: 1,
    nextImg: 'top-gear.jpg',
    nextImgIndex: 2,
  });

  const rollCarousel = useCallback(() => {
    const auxPrevious = getNextFile(imageArray, previousImgIndex);
    const auxCurrent = getNextFile(imageArray, currentImgIndex);
    const auxNext = getNextFile(imageArray, nextImgIndex);
    const newState = {
      previousImg: auxPrevious.auxFile,
      previousImgIndex: auxPrevious.auxFileIndex,
      currentImg: auxCurrent.auxFile,
      currentImgIndex: auxCurrent.auxFileIndex,
      nextImg: auxNext.auxFile,
      nextImgIndex: auxNext.auxFileIndex,
    };
    setState(() => ({ ...newState }));
  }, [currentImgIndex, nextImgIndex, previousImgIndex, imageArray]);

  useEffect(() => {
    const carouselTimeout = setTimeout(() => {
      rollCarousel();
    }, intervalSeconds * 1000);

    return () => {
      clearTimeout(carouselTimeout);
    };
  }, [intervalSeconds, rollCarousel]);

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
};

Carousel.defaultProps = {
  imageArray: ['super-mario-kart.png', 'super-mario-world.jpg', 'top-gear.jpg'],
  intervalSeconds: 5,
};

Carousel.propTypes = {
  imageArray: (props, propName) => validateStringArray(props, propName, 'image', 3),
  intervalSeconds: (props, propName) => validateNumberInterval(props, propName, 1, 10),
};

export default memo(Carousel);
