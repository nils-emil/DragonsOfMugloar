<template>
    <footer class="game-footer">
        <div class="footer--block game-footer--stats">
            <h5 class="card-title"> Gold: <b>{{game.gold}}</b></h5>
            <h5 class="card-title">Lives: <b>{{game.lives}}</b></h5>
            <h5 class="card-title">Score: <b>{{game.score}}</b></h5>
            <h5 class="card-title">Turn: <b>{{game.turn}}</b></h5>
        </div>
        <div class="footer--block game-footer--rep ">
            <h5 class="card-title">People:<b> {{reputations.people}}</b></h5>
            <h5 class="card-title">State: <b>{{reputations.state}}</b></h5>
            <h5 class="card-title">Underworld: <b>{{reputations.underworld}} </b></h5>
            <h5 class="card-title">High score: <b>{{game.highScore}}</b></h5>
        </div>
        <div class="game-footer--store">
            <carousel v-if="shop && shop.length > 0">
                <div v-for="item in shop" :key="item.adId">
                    <div class="footer--block">
                        <button v-on:click="buyItem(item.id)"
                                type="button"
                                class="btn btn-dark">
                            Buy <b>{{item.name}}</b> for {{item.cost}} gold
                        </button>
                    </div>
                </div>
            </carousel>
        </div>
    </footer>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        components: {carousel},
        props: ['game', 'reputations', 'shop'],
        name: 'GameFooter',
        methods: {
            buyItem: function (itemId) {
                this.$store.dispatch('buyItem', itemId)
            }
        }
    }
</script>
<style scoped>
    .game-footer {
        padding: 1rem 0 1rem 0;
        font-size: 0.75rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
    }

    .game-footer--stats {
        order: 1;
        width: 20%;
    }

    .game-footer--rep {
        order: -1;
        width: 20%;
    }

    .game-footer--store {
        width: 60%;
    }

    @media only screen and (max-width: 900px) {
        .game-footer {
            display: flex;
        }

        .game-footer--stats {
            width: 50%;
            order: -1;
        }

        .game-footer--rep {
            width: 50%;
            order: -1;
        }

        .game-footer--store {
            width: 100%;
        }
    }

    .game-footer {
        position: fixed;
        bottom: 0;
        background: linear-gradient(90deg, #4ca1af 0%, #141e30 100%);
        -webkit-box-shadow: 0 1px 11px 10px rgba(20, 30, 48, 1);
        -moz-box-shadow: 0 1px 11px 10px rgba(20, 30, 48, 1);
        box-shadow: 0 1px 11px 10px rgba(20, 30, 48, 1);
    }

    .footer--block {
        color: white;
    }
    button {
        height: 100%;
        margin: 0.5rem;
    }


    @media only screen and (max-width: 1000px) {
        button {
            padding: 0.25rem;
            max-width: 90%;
            font-size: 0.75rem;
        }

    }
</style>
