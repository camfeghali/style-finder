<template>
  <!-- <div v-for="option of options" :key="option.id"></div> -->
  <div class="answers-container">
    <div class="answer-card" v-for="option of options" :key="option.id">
      <div class="card-content-wrapper">
        <div class="card-content">
          <div class="image-container">
            <img
              src="https://images.typeform.com/images/JMqMn89uZNps/choice/default"
            />
          </div>
          <div class="footer-container">
            {{ option.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["question"],
  emits: ["handle-change"],
  data() {
    return {
      value: this.question.answer,
      options: this.question.answers,
      selectedOption: null,
    };
  },
  methods: {
    handleChange() {
      console.log(this.selectedOption);
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

<style scoped>
.answers-container {
  display: inline-flex;
  margin: 0px -8px -8px 0px;
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
  width: calc(25% - 8px);
  border: 1px solid rgb(69, 122, 83);
  background-color: rgba(69, 122, 83, 0.1);
  outline: none;
  border-radius: 4px;
  padding: 4px;
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

  cursor: pointer;
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
  -webkit-box-align: center;
  align-items: center;
  min-height: 32px;
  -webkit-box-pack: center;
  justify-content: center;
}
</style>
