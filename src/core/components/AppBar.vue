<template>
  <div class="app-bar">
    <router-link
      class="app-bar__nav-button"
      :to="{ name: 'game' }"
    >game</router-link>
    <router-link
      class="app-bar__nav-button"
      :to="{ name: 'leaderboard' }"
    >leaderboard</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
};
</script>

<style scoped lang="scss">
.app-bar {
  display: flex;
  box-sizing: border-box;
  justify-content: flex-end;
  padding: 12px;
  width: 100%;
  box-shadow: 1px 0 2px black;

  &__nav-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 12px;
    background: aliceblue;
    font-variant: small-caps;
    text-decoration: none;
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }

    &:visited {
      color: currentColor;
    }
  }
}
</style>
