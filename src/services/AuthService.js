import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL + "/auth",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  transformRequest: [
    function(data) {
      return JSON.stringify(data);
    }
  ]
});

// function addRefreshWrapper(client) {
//     client.interceptors.response.use(
//         (response) => response,
//         async (error) => {
//             if (error.response.status === 403) {
//                 const tokens =
//             } else {
//                 return Promise.reject(error)
//             }
//         }
//     )
// }

export default {
  postRegistration(registrationDetails) {
    return apiClient.post("/register", registrationDetails);
  },
  postLogin(loginDetails) {
    return apiClient.post("/login", loginDetails);
  },
  postRefreshToken(refreshToken) {
    return apiClient.post("/refresh", { refreshToken });
  },
  deleteLogoutOne(refreshToken) {
    return apiClient.delete("/logout/single-location", { refreshToken });
  },
  deleteLogoutAll(refreshToken) {
    return apiClient.delete("/logout/all-locations", { refreshToken });
  }
};
