import axios from 'axios'

const state = {
    messages: []
};

const mutations = {
    'SET_MESSAGES'(state, messages) {
        state.messages = messages
    }
};

const getters = {
    messages: state => {
        return state.messages
    }
};

const actions = {
    initMessages: async ({commit}, gameId) => {
        await axios.get(`https://www.dragonsofmugloar.com/api/v2/${gameId}/messages`)
            .then(response => response.data)
            .then(messages =>
                commit('SET_MESSAGES', messages)
            )

    },
    solveMessage: async ({dispatch, getters}, messageId) => {
        let gameId = getters.game.gameId;
        await axios.post(`https://www.dragonsofmugloar.com/api/v2/${gameId}/solve/${messageId}`)
            .then(response => {
                    dispatch('initShop', gameId);
                    dispatch('initMessages', gameId);
                    dispatch('initReputation', gameId);
                    dispatch('updateGame', response.data);
                    if (!response.data.success) {
                        dispatch('handleError', {"error": "Quest failed!"})
                    } else {
                        dispatch('handleSuccessfulAction', "Quest successful");
                    }
                },
                error => dispatch('handleError', error.response.data))
    }
};


export default {
    state,
    mutations,
    actions,
    getters
}