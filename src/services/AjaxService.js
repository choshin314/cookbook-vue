import axios from "axios";
import LSService from "./LocalStorageService";
import store from "@/store";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
  headers: {
    Accept: "application/json"
  }
});

instance.interceptors.response.use(
  response => response,
  async err => {
    //assign original request to var for later reuse
    const originalRequest = err.config;
    if (
      err.response.status === 401 &&
      err.response.data.error === "token expired" &&
      !err.config._retry
    ) {
      //append _retry property to prevent potential infinite loop on subsequent err
      originalRequest._retry = true;
      //get refreshToken, append to body, send request to refresh route
      const refreshToken = LSService.getRefreshToken();
      return instance
        .postData("/auth/refresh", { refreshToken })
        .then(({ data: data }) => {
          LSService.setAccessToken(data);
          store.dispatch("auth/saveNewToken", data);
          originalRequest.headers.authorization = `Bearer ${data}`;
          return instance(originalRequest);
        });
      //if refreshed (i.e. response.ok && new accessToken), setAccessToken and retry original req
    }
    return Promise.reject(err);
  }
);

function authHeader() {
  const accessToken = LSService.getAccessToken();
  return accessToken ? { authorization: `Bearer ${accessToken}` } : {};
}

function getData(path) {
  return instance.get(path);
}

function getDataProtected(path) {
  return instance.get(path, { headers: authHeader() });
}

function sendData(path, data, method) {
  return instance.request({
    url: path,
    method,
    data,
    headers: {
      "Content-Type": "application/json",
      ...authHeader()
    }
  });
}

function sendMulti(path, payload, method) {
  const { data, files, filesKey } = payload;
  const formData = new FormData();
  //append file(s) to formData onto formData[filesKey]
  for (let i = 0; i < files.length; i++) {
    formData.append(filesKey, files[i]);
  }
  //stringify the non-file values as a single JSON object,
  //then append to formData on formData.formJSON key. Plays nicer with multer
  //on backend this way rather than appending each data value individually onto
  //its own key in formData
  const toStringify = {};
  for (let field in data) {
    if (field !== filesKey) toStringify[field] = data[field];
  }
  formData.append("formJSON", JSON.stringify(toStringify));
  return instance.request({
    url: path,
    method,
    data: formData,
    headers: authHeader()
  });
}

function deleteData(path, payload) {
  return instance.delete(path, {
    data: payload,
    headers: authHeader()
  });
}

export default {
  getData,
  getDataProtected,
  postData(path, data) {
    return sendData(path, data, "POST");
  },
  postMulti(path, payload) {
    return sendMulti(path, payload, "POST");
  },
  patchData(path, data) {
    return sendData(path, data, "PATCH");
  },
  patchMulti(path, payload) {
    return sendMulti(path, payload, "PATCH");
  },
  deleteData
};
