export const getNextImage = (images, imageIndex) => {
  const imagesClone = [...images];
  let auxImg;
  let auxImgIndex = null;
  if (imagesClone.length !== imageIndex) {
    auxImgIndex = imageIndex + 1;
    auxImg = imagesClone[auxImgIndex];
  } else {
    auxImgIndex = 0;
    auxImg = imagesClone[auxImgIndex];
  }
  return { auxImg, auxImgIndex };
};
