<template>
  <div class="p-fluid p-grid p-formgrid wrapper">
    <div class="p-field p-col-12">
      <!-- <Slider
        @input="handleChange"
        v-model="value"
        class="p-inputnumber-lg"
        mode="currency"
        currency="EUR"
        :key="question.id"
      /> -->
      <h5>Value: {{ value }}</h5>
      <Slider
        v-model="value"
        :key="question.id"
        :min="question.min"
        :max="question.max"
        :range="true"
        @slideend="handleChange"
      />
    </div>
  </div>
</template>

<script>
import Slider from "primevue/slider";

export default {
  components: { Slider },
  props: ["question"],
  emits: ["handle-change"],
  data() {
    return {
      value: [this.question.min, this.question.max],
    };
  },
  methods: {
    handleChange(event) {
      this.value = event.value;
      console.log(this.value);
      this.$emit("handle-change", {
        id: this.question.id,
        value: this.value,
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  margin: 0 0.25rem;
}
</style>
