<template>
  <div class="p-grid">
    <slot name="question"></slot>
  </div>
  <div class="p-grid">
    <div class="p-col-1"></div>
    <div class="p-col-11">
      <div class="box"><slot></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.question-header {
  margin: 1rem 0rem;
}
</style>
