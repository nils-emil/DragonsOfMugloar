import axios from "axios";

const state = {
  game: []
};

const mutations = {
  INIT_GAME(state, game) {
    state.game = game;
  },
  UPDATE_GAME(state, game) {
    state.game = { ...state.game, ...game };
  },
  ADD_TURN(state) {
    state.game.turn = state.game.turn + 1;
  }
};

const actions = {
  initGame: ({ commit, dispatch, getters }) => {
    axios
      .post("https://www.dragonsofmugloar.com/api/v2/game/start")
      .then(response => {
        commit("INIT_GAME", response.data);
        dispatch("initMessages", getters.game.gameId);
        dispatch("initShop", getters.game.gameId);
      });
  },

  addTurn: ({ commit }) => {
    commit("ADD_TURN");
  },

  updateGame: ({ commit }, values) => {
    commit("UPDATE_GAME", values);
  }
};

const getters = {
  game: state => {
    return state.game;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
