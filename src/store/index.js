import Vue from 'vue'
import Vuex from 'vuex'
import game from './modules/game'
import messages from './modules/messages'
import reputations from './modules/reputation'
import errors from './modules/error'
import shop from './modules/shop'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        game,
        messages,
        shop,
        errors,
        reputations
    }
})