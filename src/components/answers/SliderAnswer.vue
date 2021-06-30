<template>
  <div class="p-input-filled">
    <div class="p-field p-col-12 p-md-3">
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
        :min="100"
        :max="500"
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
