<template>
    <div class="game-footer">
        <div class="row">
            <div class="col-md-3 col-sm-12">
                <div class="row">
                    <div class="footer--block col-6 col-sm-6">
                        <h5 class="card-title"> Gold: <b>{{game.gold}}</b></h5>
                        <h5 class="card-title">Lives: <b>{{game.lives}}</b></h5>
                        <h5 class="card-title">Score: <b>{{game.score}}</b></h5>
                        <h5 class="card-title">Turn: <b>{{game.turn}}</b></h5>
                    </div>
                    <div class="footer--block col-6 col-sm-6 d-md-none d-sm-block">
                        <h5 class="card-title">People:<b> {{reputations.people}}</b></h5>
                        <h5 class="card-title">State: <b>{{reputations.state}}</b></h5>
                        <h5 class="card-title">Underworld: <b>{{reputations.underworld}} </b></h5>
                        <h5 class="card-title">High score: <b>{{game.highScore}}</b></h5>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
                <carousel v-if="shop && shop.length > 0">
                    <div v-for="item in shop">
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
            <div class="col-md-3 col-sm-6 d-none d-md-block">
                <div class="footer--block">
                    <h5 class="card-title">People:<b> {{reputations.people}}</b></h5>
                    <h5 class="card-title">State: <b>{{reputations.state}}</b></h5>
                    <h5 class="card-title">Underworld: <b>{{reputations.underworld}} </b></h5>
                    <h5 class="card-title">High score: <b>{{game.highScore}}</b></h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        components: {carousel},
        props: ['messages', 'game', 'reputations', 'shop'],
        name: 'GameFooter',
        methods: {
            buyItem: function (itemId) {
                this.$store.dispatch('buyItem', itemId)
            }
        }
    }
</script>
