<template>
  <div id="app">
    <Game/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Game from './game/Game.vue';

@Options({
  components: {
    Game,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
