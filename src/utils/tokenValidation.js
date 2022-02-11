function TokenValidation(accessToken) {
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  const decodedJwt = parseJwt(accessToken);
  if (decodedJwt) {
    if (decodedJwt.exp * 1000 < Date.now()) {
      localStorage.clear();
    }
  }

  return null;
}

export default TokenValidation;
