import axios from 'axios'

const state = {
    reputation: {
        people: 0,
        state: 0,
        underworld: 0
    }
};

const mutations = {
    'SET_REPUTATION'(state, rep) {
        state.reputation = rep
    }
};

const getters = {
    reputations: state => {
        return state.reputation
    }
};

const actions = {
    initReputation: ({commit, getters, dispatch}) => {
        axios.post(`https://www.dragonsofmugloar.com/api/v2/${getters.game.gameId}/investigate/reputation`)
            .then(response => {
                commit('SET_REPUTATION', response.data);
                dispatch('initMessages', getters.game.gameId);
                dispatch('addTurn');
            })
    },
};


export default {
    state,
    mutations,
    actions,
    getters
}