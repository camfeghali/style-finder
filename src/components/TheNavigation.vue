<template>
  <Button @click="changeQuestion(-1)" icon="pi pi-angle-up" iconPos="right" />
  <Button
    @click="changeQuestion(1)"
    icon="pi pi-angle-down"
    iconPos="right"
    class="down-button"
  />
</template>

<script>
import Button from "primevue/button";

export default {
  components: {
    Button,
  },
  emits: ["change-question", "handle-error"],

  methods: {
    changeQuestion(increment) {
      this.$emit("handle-error");
      this.$emit("change-question", increment);
    },
  },
};
</script>

<style scoped>
.down-button {
  margin-left: 0.35em;
}

button {
  /* position: relative; */
  /* top: 4.7em; */
}
</style>
