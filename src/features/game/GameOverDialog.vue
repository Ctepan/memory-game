<template>
  <AppDialog>
    <div class="title">
      Nice job!
    </div>
    <div class="content">
      Your time: {{ score }}
    </div>
    <div class="footer">
      <button
        class="app-button"
        @click="handleSubmit"
      >ok</button>
    </div>
  </AppDialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppDialog from '@/core/components/AppDialog.vue';

export default defineComponent({
  name: 'GameOverDialog',
  components: {
    AppDialog,
  },
  props: {
    time: {
      type: Number,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    function handleSubmit() {
      emit('input', false);
    }

    return {
      handleSubmit,
    };
  },
});
</script>

<style scoped lang="scss">
.title {
  font-size: 24px;
  font-weight: bold;
}

.content {
  margin-top: 16px;
}

.footer {
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
}
</style>
