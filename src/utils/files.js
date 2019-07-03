export const importAllImages = (imgArr) => {
  const images = {};
  // eslint-disable-next-line array-callback-return
  imgArr.keys().map((item) => {
    images[item.replace('./', '')] = imgArr(item);
  });
  return images;
};
