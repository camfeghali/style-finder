<template>
  <div class="p-col-1">
    <div class="question-index p-d-inline-flex p-ai-left p-ai-center">
      <h4 class="question-number">{{ question.questionNumber }}</h4>
      <i class="pi pi-arrow-right" style="font-size: 0.5rem;"></i>
    </div>
  </div>
  <div class="p-col-11">
    <p class="question-description">{{ question.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["question"],
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
  margin: 0.15rem 0.25rem 0rem 0.5rem;
}

.question-description {
  font-size: 20px;
  margin: 0;
}

h3 {
  margin: 0;
}

@media (min-width: 481px) {
  .question-description {
    font-size: 24px;
  }
}
</style>
