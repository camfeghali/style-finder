<template>
  <div class="p-d-inline-flex p-ai-left p-ai-start">
    <div class="question-index p-d-inline-flex p-ai-left p-ai-center">
      <h4 class="question-number">1</h4>
      <i class="pi pi-arrow-right" style="font-size: 0.5rem;"></i>
    </div>

    <h3>{{ description }}</h3>
  </div>
</template>

<script>
export default {
  props: ["description"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.question-index {
  margin-right: 0.15rem;
}

.question-index * {
  color: green;
  font-weight: bold;
}
.question-number {
  margin: 0.15rem 0.25rem 0rem 0.15rem;
}

h3 {
  margin: 0;
}
</style>
