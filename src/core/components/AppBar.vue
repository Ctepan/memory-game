<template>
  <div class="app-bar">
    <router-link
      class="app-bar__nav-button app-button"
      :to="{ name: 'game' }"
    >game</router-link>
    <router-link
      class="app-bar__nav-button app-button"
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
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
