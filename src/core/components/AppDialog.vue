<template>
  <div class="overlay">
    <div class="dialog">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDialog',
  mounted() {
    window.document.body.style.overflow = 'hidden';
  },
  unmounted() {
    window.document.body.style.overflow = '';
  },
};
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
</style>
