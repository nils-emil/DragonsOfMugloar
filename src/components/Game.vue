<template>
    <div>
        <button class="btn btn-secondary btn-init mr-3" v-on:click="initNewGame()">
            Start a new game
        </button>
        <button class="btn btn-secondary btn-init" v-on:click="updateReputation()">
            Run an investigation on your reputation
        </button>
        <div class="container container-fluid container-quest">
            <quests :messages="messages"></quests>
        </div>
        <game-footer :game="game"
                     :shop="shop"
                     :reputations="reputations">
        </game-footer>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Quests from "./Quests";
    import GameFooter from "./GameFooter";

    export default {
        name: 'HelloWorld',
        components: {GameFooter, Quests},
        computed: {
            ...mapGetters(['game', 'messages', 'shop', 'reputations'])
        },
        created() {
            this.$store.dispatch('initGame');
        },
        methods: {
            solveMessage: function (questId) {
                this.$store.dispatch('solveMessage', questId)
            },

            initNewGame: function () {
                this.$store.dispatch('initGame')
            },
            updateReputation: function () {
                this.$store.dispatch('initReputation')
            }
        }
    }
</script>
<style scoped>
    .btn-init {
        margin-bottom: 1rem;
        background: linear-gradient(90deg, #4ca1af 0%, #141e30 100%);
        -webkit-box-shadow: 0px 1px 11px 10px rgba(20, 30, 48, 1);
        -moz-box-shadow: 0px 1px 11px 10px rgba(20, 30, 48, 1);
        box-shadow: 0px 1px 11px 10px rgba(20, 30, 48, 1);
    }

    .container-quest {
        margin-bottom: 30vh
    }
</style>
