import { createStore } from "vuex";

export default createStore({
  state: {
    searchedMeals: [],
  },
  getters: {},
  mutations: {
    setSearchMeals(state, meals) {
      state.searchedMeals = meals;
    },
  },
  actions: {
    searchMeals(context, keyword) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then((res) => res.json())
        .then((data) => context.commit("setSearchMeals", data.meals));
    },
  },
  modules: {},
});
