import axios from 'axios'

const state = {
    reputation: []
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
    initReputation: async ({commit}, gameId) => {
        await axios.post(`https://www.dragonsofmugloar.com/api/v2/${gameId}/investigate/reputation`)
            .then(response => commit('SET_REPUTATION', response.data))
    },
};


export default {
    state,
    mutations,
    actions,
    getters
}