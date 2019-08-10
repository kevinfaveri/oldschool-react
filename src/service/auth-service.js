export const registerUser = (registerForm) =>
  new Promise((resolve) => {
    const userInfo = { ...registerForm, lastAccess: new Date().toString() };
    delete userInfo.confirm;
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    setTimeout(() => {
      resolve(true);
    }, 5000);
  });

export const isUserLogged = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (
    userInfo
    && userInfo.lastAccess
    && (new Date().getTime() - new Date(userInfo.lastAccess).getTime()) / 1000
      < 300
  ) {
    return true;
  }
  return false;
};

export const loginUser = (loginForm) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (
        userInfo
        && (userInfo.username === loginForm.username
          || userInfo.email === loginForm.username)
        && userInfo.password === loginForm.password
      ) {
        userInfo.lastAccess = new Date().toString();
        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        if (loginForm.remember) {
          localStorage.setItem('rememberMe', loginForm.username);
        } else {
          localStorage.removeItem('rememberMe');
        }
        resolve(true);
      }
      resolve(false);
    }, 5000);
  });

export const getRememberMe = () => {
  const rememberMe = localStorage.getItem('rememberMe');
  if (rememberMe) {
    return rememberMe;
  }
  return '';
};

export const logoutUser = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (userInfo) {
        delete userInfo.lastAccess;
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
      }
      resolve(true);
    }, 3000);
  });
