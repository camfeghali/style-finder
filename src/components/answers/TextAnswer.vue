<template>
  <div class="p-input-filled">
    <div class="p-field p-col-12 p-md-3">
      <InputText
        @input="handleChange"
        v-model.trim="value"
        type="text"
        class="p-inputText-lg"
        placeholder="Text"
        :key="question.id"
      />
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";

export default {
  components: { InputText },
  props: ["question"],
  emits: ["handle-change"],
  data() {
    return {
      value: this.$props.question.answer,
    };
  },
  methods: {
    handleChange() {
      this.$emit("handle-change", {
        id: this.question.id,
        value: this.value,
      });
    },
  },
};
</script>
