<template>
  <Button @click="changeQuestion(-1)" icon="pi pi-angle-up" iconPos="right" />
  <Button @click="changeQuestion(1)" icon="pi pi-angle-down" iconPos="right" />
</template>

<script>
import Button from "primevue/button";

export default {
  components: {
    Button,
  },
  emits: ["change-question"],

  methods: {
    changeQuestion(increment) {
      this.$emit("change-question", increment);
    },
  },
};
</script>
