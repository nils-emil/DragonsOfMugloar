import axios from 'axios'

const state = {
    shopItems: []
};

const mutations = {
    'SET_SHOP'(state, shopItems) {
        state.shopItems = shopItems
    }
};

const getters = {
    shop: state => {
        return state.shopItems
    }
};

const actions = {
    initShop: ({commit}, gameId) => {
        axios.get(`https://www.dragonsofmugloar.com/api/v2/${gameId}/shop`)
            .then(response => commit('SET_SHOP', response.data))
    },

    buyItem: ({dispatch, getters}, itemId) => {
        let gameId = getters.game.gameId;
        axios.post(`https://www.dragonsofmugloar.com/api/v2/${gameId}/shop/buy/${itemId}`)
            .then(response => {
                    dispatch('initShop', gameId);
                    dispatch('initMessages', gameId);
                    dispatch('updateGame', response.data);
                    if (!response.data.shoppingSuccess) {
                        dispatch('handleError', {"error": "Failed to buy item!"});
                    } else {
                        dispatch('handleSuccessfulAction', "Purchase successful");
                    }
                },
                error => dispatch('handleError', error.response.data));
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}