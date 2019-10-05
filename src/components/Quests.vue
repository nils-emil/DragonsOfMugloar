<template>
  <div class="row">
    <template v-for="add in messages">
      <div
        v-if="!add.adId.endsWith('=')"
        :key="add.adId"
        class="col-md-6 col-lg-4 col-sm-12 mb-3"
      >
        <!--                BE returns some invalid adds that apparently dont exist, they usually end with '='-->
        <div class="card">
          <div class="card-body">
            <h6 class="card-subtitle mb-2">
              <b>{{ add.probability }}</b>
            </h6>
            <h5 class="card-title pt-2">
              Reward of {{ add.reward }} gold that expires in
              {{ add.expiresIn }} {{ add.expiresIn === 1 ? "turn" : "turns" }}
            </h5>
            <p class="card-text tex">{{ add.message }}</p>
            <button
              type="button"
              class="btn btn-dark mt-3"
              @click="solveMessage(add.adId)"
            >
              Solve
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Quests",
  props: ["messages"],
  methods: {
    solveMessage: function(messageId) {
      this.$store.dispatch("solveMessage", messageId);
    }
  }
};
</script>
<style scoped>
.card {
  height: 100%;
}

.card-body {
  background-color: #efefef;
}

p {
  color: #000000;
}
</style>
