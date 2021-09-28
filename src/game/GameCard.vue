<template>
  <div
    class="card"
    :class="{ 'card_selected': selected }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    selected: {
      type: Boolean,
      default: 0,
    },
    closeDelay: {
      type: Number,
      default: 0,
    },
  },
})
export default class GameCard extends Vue {
}
</script>

<style scoped lang="scss">
.card {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid red;
  user-select: none;
  cursor: pointer;

  &:hover {
    background: #EEEEEE;
  }

  &_selected, &:active {
    background: #AAAAAA;

    &:hover {
      background: #AAAAAA;
    }
  }
}
</style>
