<template>
  <div class="main">
    <router-link :to="{ name: 'game' }">Game</router-link>
    <router-link :to="{ name: 'leaderboard' }">Leaderboard</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style>
@import "./assets/icons/bootstrap-icons.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 936px;
  margin: auto;
}
</style>
