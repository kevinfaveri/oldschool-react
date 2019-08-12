export default () => {
  function workerTest(baseNumber) {
    console.log('WORKER TEST INIT:', new Date());
    let result = 0;
    // eslint-disable-next-line no-restricted-properties
    for (let i = Math.pow(baseNumber, 7); i >= 0; i -= 1) {
      result += Math.atan(i) * Math.tan(i);
    }
    console.log('WORKER TEST RESULT AT:', new Date());
    return result;
  }

  // eslint-disable-next-line no-restricted-globals
  self.addEventListener('message', (e) => {
    if (!e) return;
    const calc = workerTest(e.data);
    postMessage(calc);
  });
};
