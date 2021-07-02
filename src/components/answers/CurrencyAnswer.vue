<template>
  <!-- <div class="p-input-filled"> -->
  <div class="p-fluid p-grid p-formgrid">
    <div class="p-field p-col-12">
      <InputNumber
        @input="handleChange"
        v-model="value"
        class="p-inputnumber-lg"
        mode="currency"
        currency="EUR"
        :key="question.id"
      />
    </div>
  </div>
</template>

<script>
import InputNumber from "primevue/inputnumber";

export default {
  components: { InputNumber },
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
      this.$emit("handle-change", {
        id: this.question.id,
        value: this.value,
      });
    },
  },
};
</script>
