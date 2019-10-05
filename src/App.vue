<template>
    <div id="app">
        <game :messages="messages"
              :game="game"/>
        <game-footer :game="game"
                     :shop="shop"
                     :reputations="reputations">
        </game-footer>
    </div>
</template>

<script>
    import Game from "./components/Game";
    import GameFooter from "./components/GameFooter";
    import {mapGetters} from 'vuex'

    export default {
        name: 'app',
        computed: {
            ...mapGetters(['game', 'messages', 'shop', 'reputations'])
        },
        components: {
            Game,
            GameFooter
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');

    * {
        font-family: 'Nunito Sans', sans-serif;
        text-align: center;
    }

    #app {
        margin-top: 1rem;
    }

    html, body {
        background: linear-gradient(90deg, #141e30 0%, #243b55 100%);
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;;
    }

    .owl-nav {
        display: none;
    }

</style>
