<template>
  <div>
    <AppBar class="header"></AppBar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import AppBar from '@/core/components/AppBar.vue';

export default {
  name: 'App',
  components: { AppBar },
};
</script>

<style>
@import "./assets/icons/bootstrap-icons.css";
@import "./assets/styles/global.scss";

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {

}

.main {
  margin: 60px 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 936px;
}
</style>
