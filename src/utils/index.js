const isLoggedIn = () => {
  const userInfo = localStorage.getItem('userInfo');

  if (userInfo !== null) {
    const localStorageLoggedIn = JSON.parse(userInfo).loggedIn;
    return localStorageLoggedIn;
  }
  return false;
};

export default isLoggedIn;
