// Dans le fichier store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    lb:'',
    hMax: '',
    hMin: '',
    load: '',
    mt: '',
    mc: '',
    fg: '',
    he: '',
    tn: '',
    un: '',
    vm: '',
    wm: '',
    xgt:'',
    xgc:''
  },
  mutations: {
    updatelb(state, value) {
      state.lb = value;
    },
    updateHMax(state, value) {
      state.hMax = value;
    },
    updateHMin(state, value) {
      state.hMin = value;
    },
    updateLoad(state, value) {
      state.load = value;
    },
    updateMt(state, value) {
      state.mt = value;
    },
    updateMc(state, value) {
      state.mc = value;
    },
    updateFg(state, value) {
      state.fg = value;
    },
    updateHe(state, value) {
      state.he = value;
    },
    updatetn(state, value) {
      state.tn = value;
    },
    updateun(state, value) {
      state.un = value;
    },
    updatevm(state, value) {
      state.vm = value;
    },
    updatewm(state, value) {
      state.wm = value;
    },
    updatexgt(state, value) {
      state.xgt = value;
    },
    updatexgc(state, value) {
      state.xgc = value;
    },
  },
  actions: {
    updateInputs({ commit }, payload) {
      commit('updatelb', payload.lb);
      commit('updateHMax', payload.hMax);
      commit('updateHMin', payload.hMin);
      commit('updateLoad', payload.load);
      commit('updateMt', payload.mt);
      commit('updateMc', payload.mc);
      commit('updateFg', payload.fg);
      commit('updateHe', payload.he);
      commit('updatetn', payload.tn);
      commit('updateun', payload.un);
      commit('updatevm', payload.vm);
      commit('updatewm', payload.wm);
      commit('updatexgt', payload.xgt);
      commit('updatexgc', payload.xgc);
    },
  },
  getters: {
    getlb: (state) => state.lb,
    getHMax: (state) => state.hMax,
    getHMin: (state) => state.hMin,
    getLoad: (state) => state.load,
    getMt: (state) => state.mt,
    getMc: (state) => state.mc,
    getFg: (state) => state.fg,
    getHe: (state) => state.he,
    getTn: (state) => state.tn,
    getUn: (state) => state.un,
    getVm: (state) => state.vm,
    getWm: (state) => state.wm,
    getxgt: (state) => state.xgt,
    getxgc: (state) => state.xgc,
  },
});

export default store;