import AuthService from "@/services/AuthService";
import LocalStorageService from "@/services/LocalStorageService";
import router from "@/router";

function initState() {
  return {
    user: LocalStorageService.getUser() || null,
    accessToken: LocalStorageService.getAccessToken() || null,
    refreshToken: LocalStorageService.getRefreshToken() || null,
    loading: false,
    error: null
  };
}

export default {
  namespaced: true,
  state: initState,

  getters: {
    hasAuthData(state) => (state.user !== null && state.accessToken && state.refreshToken)
  },

  mutations: {
    LOGIN_USER: (state, payload) => {
      state.user = payload;
    },
    SET_ERROR: (state, payload) => {
      state.error = payload;
    },
    SET_TOKENS: (state, payload) => {
      state.accessToken = payload.accessToken;
      if (payload.refreshToken) {
        state.refreshToken = payload.refreshToken;
      }
    },
    RESET: state => {
      const cleared = initState();
      for (let key in cleared) {
        state[key] = cleared[key];
      }
    }
  },

  actions: {
    loginOrRegister: ({ commit }, { mode, values }) => {
      const service = () =>
        mode === "login" ? AuthService.postLogin : AuthService.postRegistration;
      commit("RESET");
      service()(values)
        .then(res => {
          const {
            data: { accessToken, refreshToken, user }
          } = res.data;
          LocalStorageService.setAccessToken(accessToken);
          LocalStorageService.setRefreshToken(refreshToken);
          LocalStorageService.setUser(user);
          commit("SET_TOKENS", { accessToken, refreshToken });
          commit("LOGIN_USER", user);
          router.push({ name: "create-recipe" });
        })
        .catch(err => {
          commit("SET_ERROR", err.response.data.error);
        });
    },
    reset: ({ commit }) => {
      LocalStorageService.clearAll();
      commit("RESET");
      router.push({ name: "auth-login" });
    }
    //logoutUser - commit reset, redirect to login screen
  }
};
//context properties: all properties/methods that the store instance has
//state (local module state)
//rootState (root state)
//commit
//dispatch (dispatch other modules' actions by string name),
