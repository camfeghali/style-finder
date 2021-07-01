<template>
  <div class="p-input-filled">
    <div class="p-field p-col-12 p-md-3">
      <div
        v-for="option of options"
        :key="option.id"
        class="p-field-radiobutton"
      >
        <RadioButton
          :id="option.id"
          name="option"
          :value="option"
          v-model="selectedOption"
          @change="handleChange"
        />
        <label :for="option.id">{{ option.name }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "primevue/radiobutton";

export default {
  components: { RadioButton },
  props: ["question"],
  emits: ["handle-change", "change-question"],
  data() {
    return {
      value: this.question.answer,
      options: this.question.answers,
      selectedOption: null,
    };
  },
  methods: {
    handleChange() {
      this.$emit("change-question", 1);
      this.$emit("handle-change", {
        id: this.question.id,
        value: this.selectedOption.id,
      });
    },
  },
  created() {
    this.selectedOption = this.options.find(
      (option) => option.id === this.question.answer
    );
  },
};
</script>
