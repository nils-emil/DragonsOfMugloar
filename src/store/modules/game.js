import axios from 'axios'

const state = {
    game: []
};

const mutations = {
    'INIT_GAME'(state, game) {
        state.game = game
    },
    'UPDATE_GAME'(state, game) {
        state.game = {...state.game, ...game}
    }
};

const actions = {
    initGame: async ({commit, dispatch, getters}) => {
        await axios.post('https://www.dragonsofmugloar.com/api/v2/game/start')
            .then((response) => {
                commit('INIT_GAME', response.data);
                dispatch('initMessages', getters.game.gameId);
                dispatch('initReputation', getters.game.gameId);
                dispatch('initShop', getters.game.gameId);
            })
    },

    updateGame: async ({commit}, values) => {
        commit('UPDATE_GAME', values)
    },

    endGame: async ({commit}) => {
        commit('END_GAME')
    }
};

const getters = {
    game: state => {
        return state.game
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}