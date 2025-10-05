import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    INCREMENT(state) {
      state.count++;
    },
    DECREMENT(state) {
      state.count--;
    },
    RESET(state) {
      state.count = 0;
    },
  },
  actions: {
    increment({ commit }) {
      commit("INCREMENT");
    },
    decrement({ commit }) {
      commit("DECREMENT");
    },
    reset({ commit }) {
      commit("RESET");
    },
  },
  getters: {
    count: (state) => state.count,
  },
});
