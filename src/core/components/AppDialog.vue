<template>
  <div
    v-if="active"
    class="overlay"
    @click="closeDialog"
  >
    <div class="dialog">
      <slot></slot>

      <div class="footer">
        <button
          class="app-button"
          @click="closeDialog"
        >
          ok
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { watch, defineComponent, toRefs } from 'vue';

export default defineComponent({
  name: 'AppDialog',
  props: {
    active: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const { active } = toRefs(props);

    watch(active, (value: boolean) => {
      window.document.body.style.overflow = value ? 'hidden' : '';
    });

    function closeDialog() {
      emit('update:active', false);
    }

    return {
      closeDialog,
    };
  },
});
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #0005;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog {
  width: 304px;
  padding: 16px;
  background: white;
}

.footer {
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
}
</style>
