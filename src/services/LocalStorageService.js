export default {
  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  },
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
  setAccessToken(token) {
    localStorage.setItem("accessToken", token);
  },
  setRefreshToken(token) {
    localStorage.setItem("refreshToken", token);
  },
  getAccessToken() {
    return localStorage.getItem("accessToken");
  },
  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  },
  clearAuth() {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
  clearAll() {
    localStorage.clear();
  }
};
