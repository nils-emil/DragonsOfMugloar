<template>
    <div class="row">
        <template v-for="add in messages">
            <div class="col-md-6 col-lg-4 col-sm-12 mb-3"
                 v-if="!add.adId.endsWith('=')"
                 :key="add.adId">
<!--                BE returns some invalid adds that apparently dont exist, they usuallly end wiht '='-->
                <div class="card">
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2"><b>{{add.probability}}</b></h6>
                        <h5 class="card-title pt-2">Reward of {{add.reward}} gold that expires in:
                            {{add.expiresIn}} {{add.expiresIn === 1 ? 'turn' : 'turns'}}</h5>
                        <p class="card-text tex">{{add.message}}</p>
                        <button type="button" v-on:click="solveMessage(add.adId)" class="btn btn-dark mt-3">Solve
                        </button>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        props: ['messages'],
        name: 'Quests',
        methods: {
            solveMessage: function (messageId) {
                this.$store.dispatch('solveMessage', messageId)
            }
        }
    }
</script>
