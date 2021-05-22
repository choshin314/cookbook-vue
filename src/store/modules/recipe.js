import AjaxSvc from "@/services/AjaxService";

const state = () => ({
  recipe: {},
  updating: false
});

const getters = {};

const mutations = {
  UPDATE_RECIPE: (state, payload) => {
    const updatedCopy = { ...state.recipe, ...payload };
    // Object.keys(updatedCopy).forEach(key => {
    //   state.recipe[key] = updatedCopy[key];
    // });
    state.recipe = updatedCopy;
  },
  RESET_RECIPE: state => {
    state.recipe = {};
  }
};

const actions = {
  async fetchRecipe({ commit }, id) {
    try {
      const response = await AjaxSvc.getData(`/recipes/${id}`);
      const recipe = response.data.data;
      commit("UPDATE_RECIPE", recipe);
      return { recipe };
    } catch (err) {
      return { error: err.response.status };
    }
  },
  reset({ commit }) {
    commit("RESET_RECIPE");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
