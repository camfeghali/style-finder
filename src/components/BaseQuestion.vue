<template>
  <div class="question-header">
    <slot name="question"></slot>
  </div>
  <slot></slot>
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
