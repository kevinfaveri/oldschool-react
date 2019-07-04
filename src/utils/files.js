export const importAllFiles = (filesArr) => {
  const files = {};
  // eslint-disable-next-line array-callback-return
  filesArr.keys().map((item) => {
    files[item.replace('./', '')] = filesArr(item);
  });
  return files;
};

export const getNextFile = (files, fileIndex) => {
  const filesClone = [...files];
  let auxFile;
  let auxFileIndex = null;
  fileIndex += 1;
  if (filesClone.length !== fileIndex) {
    auxFileIndex = fileIndex;
    auxFile = filesClone[auxFileIndex];
  } else {
    auxFileIndex = 0;
    auxFile = filesClone[auxFileIndex];
  }
  return { auxFile, auxFileIndex };
};

export const getPreviousFile = (files, fileIndex) => {
  const filesClone = [...files];
  let auxFile;
  let auxFileIndex = null;
  fileIndex -= 1;
  if (fileIndex >= 0) {
    auxFileIndex = fileIndex;
    auxFile = filesClone[auxFileIndex];
  } else {
    auxFileIndex = files.length - 1;
    auxFile = filesClone[auxFileIndex];
  }
  return { auxFile, auxFileIndex };
};
