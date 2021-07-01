<template>
  <div class="answers-container">
    <div
      class="answer-card"
      :class="{ selected: option.id === selectedOption }"
      @click="handleChange(option.id)"
      v-for="option of options"
      :key="option.id"
    >
      <div class="card-content-wrapper">
        <div class="card-content">
          <div class="image-container">
            <img
              src="https://images.typeform.com/images/JMqMn89uZNps/choice/default"
            />
          </div>
          <div class="footer-container">
            <div
              :class="{ selected: option.id === selectedOption }"
              class="option-key-container"
            >
              <p>{{ option.id }}</p>
            </div>
            <p>{{ option.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["question"],
  emits: ["handle-change"],
  data() {
    return {
      options: this.question.answers,
      selectedOption: this.question.answer,
    };
  },
  methods: {
    handleChange(optionId) {
      this.selectedOption = this.options.find(
        (option) => option.id === optionId
      ).id;
      this.$emit("handle-change", {
        id: this.question.id,
        value: this.selectedOption,
      });
      this.$emit("change-question", 1);
    },
  },
  created() {
    this.selectedOption = this.options.find(
      (option) => option.id === this.question.answer
    ).id;
  },
};
</script>

<style scoped>
.answers-container {
  display: inline-flex;
  /* margin: 32px -8px -8px 0px; */
  margin-top: 24px;
  list-style: none;
  padding: 0px;
  flex-flow: row wrap;
  -webkit-box-align: stretch;
  align-items: stretch;
  width: 100%;
}

.answer-card {
  margin-bottom: 8px;
  margin-right: 8px;
  width: calc(50% - 8px);
  border: 1px solid rgb(69, 122, 83);
  background-color: rgba(69, 122, 83, 0.1);
  outline: none;
  border-radius: 4px;
  padding: 4px;
}

.answer-card.selected {
  background-color: rgba(69, 122, 83, 0.3);
  box-shadow: inset 0px 0px 0px 2px rgb(69, 122, 83);
}

.answer-card:hover {
  cursor: pointer;
  background-color: rgba(69, 122, 83, 0.3);
  box-shadow: inset 0px 0px 0px 2px rgb(69, 122, 83);
}

.card-content-container {
  min-height: 100%;
}

.card-content-wrapper {
  height: 100%;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
  max-width: 100%;
  min-width: 75px;
  min-height: 40px;
  outline: 0px;
  padding: 4px;
}

.image-container {
  padding: 4px;
  height: 160px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  overflow: hidden;
}

.card-content img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  min-height: 1px;
}

.footer-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 32px;
}

.footer-container p {
  margin: 0;
  max-width: 100%;
  font-weight: unset;
  font-size: 18px;
  line-height: 24px;
  color: rgb(69, 122, 83);
}

.option-key-container {
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5em;
  margin-right: 0.5em;
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  border-color: rgba(69, 122, 83, 0.6);
  background-color: rgb(255, 255, 255);
}
.option-key-container.selected {
  background-color: rgb(69, 122, 83);
}

.option-key-container.selected p {
  color: rgb(255, 255, 255);
}

@media (min-width: 481px) {
  .answer-card {
    width: calc(33% - 8px);
  }
}

@media (min-width: 769px) {
  .answer-card {
    width: calc(25% - 8px);
  }
}
</style>
