export const getActiveMenuItem = (routePath) => {
  switch (routePath) {
    case '/dashboard':
      return ['1'];
    case '/library':
      return ['2'];
    case '/favs':
      return ['3'];
    case '/about':
      return ['4'];
    default:
      return ['1'];
  }
};
