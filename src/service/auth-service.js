export const registerUser = (registerForm) => {
  const userInfo = { ...registerForm, lastAccess: new Date().toString() };
  delete userInfo.confirm;
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
};

export const isUserLogged = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (userInfo && userInfo.lastAccess && (new Date().getTime() - new Date(userInfo.lastAccess).getTime()) / 1000 < 300) {
    return true;
  }
  return false;
};

export const loginUser = (loginForm) => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (
    userInfo
    && (userInfo.username === loginForm.username || userInfo.email === loginForm.username)
    && userInfo.password === loginForm.password
  ) {
    userInfo.lastAccess = new Date().toString();
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    if (loginForm.remember) {
      localStorage.setItem('rememberMe', loginForm.username);
    } else {
      localStorage.removeItem('rememberMe');
    }
    return true;
  }
  return false;
};

export const getRememberMe = () => {
  const rememberMe = localStorage.getItem('rememberMe');
  if (rememberMe) {
    return rememberMe;
  }
  return '';
};

export const logoutUser = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  delete userInfo.lastAccess;
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
};
