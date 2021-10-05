<template>
  <div class="game-over">
    <div class="title">
      Nice job!
    </div>
    <div class="content">
      <div class="content__message">Your time: {{ time }}</div>
      <router-link :to="{ name: 'leaderboard' }">Check leaderboard</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'GameOver',
  props: {
    time: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.game-over {
  text-align: left;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.content {
  margin-top: 16px;

  &__message {
    margin-bottom: 8px;
  }
}
</style>
