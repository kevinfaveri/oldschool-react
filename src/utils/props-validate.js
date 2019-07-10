/* eslint-disable react/destructuring-assignment */
export const validateStringArray = (props, propName, publicFolderName, minSize) => {
  const array = props[propName];
  if (Array.isArray(array)) {
    if (array.length < minSize) {
      return new Error(
        `The ${propName} must have at least ${minSize} file(s) (in your '/public/${publicFolderName}' folder)!`,
      );
    }
    for (let index = 0; index < array.length; index += 1) {
      const element = array[index];
      if (typeof element[index] !== 'string') {
        return new Error(`The ${propName} object '${element}' is invalid (not an string)!'`);
      }
    }
  } else {
    return new Error(`The ${propName} object is invalid (not an array)!'`);
  }

  return null;
};

export const validateNumberInterval = (props, propName, minSize, maxSize) => {
  const number = props[propName];
  if (typeof number === 'number') {
    if (number < minSize || number > maxSize) {
      return new Error(
        `The ${propName} object value '${number}' is invalid (out of numbers interval [${minSize}~${maxSize}])!'`,
      );
    }
  } else {
    return new Error(`The ${propName} object is invalid (not an number)!'`);
  }

  return null;
};
