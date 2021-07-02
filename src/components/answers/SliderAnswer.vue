<template>
  <div class="p-fluid p-grid p-formgrid" style="margin: 0 0.25rem;">
    <div class="p-field p-col-12">
      <h5>Value: {{ value }}</h5>
      <Slider
        v-model="value"
        :key="question.id"
        :min="question.min"
        :max="question.max"
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
      value: this.question.answer,
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
