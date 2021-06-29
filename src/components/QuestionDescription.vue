<template>
  <h3>{{ description }}</h3>
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
