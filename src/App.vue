<template>
  <div id="app">
    <Game :messages="messages" :game="game" />
    <GameFooter :game="game" :shop="shop" :reputations="reputations">
    </GameFooter>
  </div>
</template>

<script>
import Game from "./components/Game";
import GameFooter from "./components/GameFooter";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Game,
    GameFooter
  },
  computed: {
    ...mapGetters(["game", "messages", "shop", "reputations"])
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap");

* {
  font-family: "Nunito Sans", sans-serif;
  text-align: center;
}

#app {
  margin-top: 1rem;
}

html,
body {
  background: linear-gradient(90deg, #141e30 0%, #243b55 100%);
  background-size: cover;
}

.owl-nav {
  display: none;
}
</style>
