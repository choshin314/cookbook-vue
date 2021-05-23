import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import recipe from "./modules/recipe";

Vue.use(Vuex);

function initState() {
  return {
    appErrors: [],
    appNotifications: []
  };
}

export default new Vuex.Store({
  modules: {
    auth,
    recipe
  },

  state: initState,

  mutations: {
    RESET: state => {
      const cleared = initState();
      for (let key in cleared) {
        state[key] = cleared[key];
      }
    }
  },

  actions: {
    resetAll: ({ dispatch, commit, state }) => {
      for (let key in state) {
        if (key !== "appErrors" && key !== "appNotifications") {
          dispatch(`${key}/reset`);
        }
      }
      commit("RESET");
    }
  }
});
