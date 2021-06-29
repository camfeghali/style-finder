<template>
  <question-container v-for="question in questions" :key="question">
    <question-header :description="question" />
  </question-container>
  <router-view></router-view>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import QuestionContainer from "./components/QuestionContainer.vue";
import QuestionHeader from "./components/QuestionHeader.vue";

export default defineComponent({
  components: {
    "question-header": QuestionHeader,
    "question-container": QuestionContainer,
  },
  setup() {
    const questions = [
      "What is the reason for redesigning your space ?",
      "How do you want to use your home office ?",
      "Which room would you like to get designed ?",
    ];

    return {
      questions,
    };
  },
});
// export default {
//   data() {
//     return {
//       text: null,
//     };
//   },
//   methods: {
//     greet() {
//       console.log("firing!");
//       console.log("this.$toast", this.$toast);
//       this.$toast.add({
//         severity: "info",
//         summary: "hello",
//         detail: this.text,
//       });
//     },
//   },
// };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  width: 100%;
  max-width: 720px;
  margin: 0px auto;
  padding-left: 0px;
  padding-right: 0px;
}
</style>
