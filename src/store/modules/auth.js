import ajax from "@/services/AjaxService";
import LSS from "@/services/LocalStorageService";
import router from "@/router";

function initState() {
  return {
    user: LSS.getUser() || null,
    accessToken: LSS.getAccessToken() || null,
    refreshToken: LSS.getRefreshToken() || null,
    loading: false,
    error: null
  };
}

export default {
  namespaced: true,
  state: initState,

  getters: {
    hasAuthData(state) {
      return state.user !== null && state.accessToken && state.refreshToken;
    }
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
      commit("RESET");
      ajax
        .postData(`/auth/${mode}`, values)
        .then(res => {
          const {
            data: { accessToken, refreshToken, user }
          } = res.data;
          LSS.setAccessToken(accessToken);
          LSS.setRefreshToken(refreshToken);
          LSS.setUser(user);
          commit("SET_TOKENS", { accessToken, refreshToken });
          commit("LOGIN_USER", user);
          router.push({ name: "create-recipe" });
        })
        .catch(err => {
          commit("SET_ERROR", err.response.data.error);
        });
    },
    saveNewAccessToken: ({ commit }, newToken) => {
      commit("SET_TOKENS", { accessToken: newToken });
    },
    reset: ({ commit }) => {
      LSS.clearAll();
      commit("RESET");
      router.push({ name: "auth", params: { authMode: "login" } });
    },
    logout: async ({ dispatch }) => {
      try {
        const refreshToken = LSS.getRefreshToken();
        console.log(refreshToken);
        dispatch("resetAll", null, { root: true });
        await ajax.deleteData("/auth/logout/single-location", { refreshToken });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
//context properties: all properties/methods that the store instance has
//state (local module state)
//rootState (root state)
//commit
//dispatch (dispatch other modules' actions by string name),
