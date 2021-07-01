<template>
  <div class="p-grid">
    <slot name="question"></slot>
  </div>
  <div class="p-grid">
    <div class="p-col-1"></div>
    <div class="p-col-11">
      <div class="box"><slot></slot></div>
      <Tag
        v-if="error"
        class="p-mr-2"
        icon="pi pi-exclamation-triangle"
        severity="warning"
        value="Warning"
      ></Tag>
    </div>
  </div>
</template>

<script>
import Tag from "primevue/tag";

export default {
  props: ["question", "error"],
  components: { Tag },
  data() {
    return {
      showError: false,
    };
  },
};
</script>

<style scoped>
.question-header {
  margin: 1rem 0rem;
}
</style>
