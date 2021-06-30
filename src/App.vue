<template>
  <BaseQuestion>
    <template #question>
      <QuestionHeader
        :questionId="activeQuestion.id"
        :questionNumber="activeQuestion.questionNumber"
        :description="activeQuestion.description"
      />
    </template>
    <component
      :is="activeAnswerType"
      @handle-change="handleChange"
      :question="activeQuestion"
    ></component>
  </BaseQuestion>
  <TheNavigation @change-question="changeQuestion"> </TheNavigation>
</template>

<script>
import BaseQuestion from "./components/BaseQuestion.vue";
import QuestionHeader from "./components/QuestionHeader.vue";
import TheNavigation from "./components/TheNavigation.vue";
import TextAnswer from "./components/answers/TextAnswer.vue";
import CurrencyAnswer from "./components/answers/CurrencyAnswer.vue";
import SliderAnswer from "./components/answers/SliderAnswer.vue";
import RangeAnswer from "./components/answers/RangeAnswer.vue";
import SingleSelectAnswer from "./components/answers/SingleSelectAnswer.vue";
import SingleSelectImage from "./components/answers/SingleSelectImage.vue";

export default {
  components: {
    QuestionHeader,
    BaseQuestion,
    TheNavigation,
    TextAnswer,
    CurrencyAnswer,
    SliderAnswer,
    RangeAnswer,
    SingleSelectAnswer,
    SingleSelectImage,
  },
  data() {
    return {
      selectedComponent: "the-navigation",
      questions: [
        {
          id: 6,
          questionNumber: 6,
          description: "What is the reason for redesigning your space ?",
          answerType: "singleSelectImage",
          answer: "test",
          answers: [
            { id: 1, name: "Accounting", key: "A" },
            { id: 2, name: "Marketing", key: "M" },
            { id: 3, name: "Production", key: "P" },
            { id: 4, name: "Research", key: "R" },
            { id: 5, name: "Something", key: "S" },
            { id: 6, name: "Else", key: "E" },
            { id: 7, name: "Idk", key: "I" },
          ],
        },
        {
          id: 1,
          questionNumber: 1,
          description: "What is the reason for redesigning your space ?",
          answerType: "text",
          answer: "test",
          answers: [],
        },
        {
          id: 2,
          questionNumber: 2,
          description: "How do you want to use your home office ?",
          answerType: "currency",
          answer: 12,
          answers: [],
        },
        {
          id: 3,
          questionNumber: 3,
          description: "Which room would you like to get designed ?",
          answerType: "slider",
          answer: null,
          answers: [],
          min: 40,
          max: 200,
        },
        {
          id: 4,
          questionNumber: 4,
          description: "What is your budget ?",
          answerType: "range",
          answer: null,
          answers: [],
          min: 40,
          max: 200,
        },
        {
          id: 5,
          questionNumber: 5,
          description: "What is the reason for redesigning your space ?",
          answerType: "singleSelect",
          answer: null,
          answers: [
            { id: 1, name: "Accounting", key: "A" },
            { id: 2, name: "Marketing", key: "M" },
            { id: 3, name: "Production", key: "P" },
            { id: 4, name: "Research", key: "R" },
          ],
        },
      ],
      activeQuestionIndex: 0,
    };
  },
  computed: {
    activeQuestion() {
      return this.questions[this.activeQuestionIndex];
    },
    activeAnswerType() {
      return this.outputAnswerComponent(
        this.questions[this.activeQuestionIndex].answerType
      );
    },
  },
  methods: {
    handleChange(payload) {
      this.questions.map((question) => {
        if (question.id === payload.id) {
          question["answer"] = payload.value;
          return question;
        } else {
          return question;
        }
      });
      console.log("this.questions: ", this.questions);
    },
    changeQuestion(increment) {
      if (
        this.activeQuestionIndex + increment < this.questions.length &&
        this.activeQuestionIndex + increment >= 0
      ) {
        this.activeQuestionIndex += increment;
      }
    },
    outputAnswerComponent(type) {
      switch (type) {
        case "text":
          return "TextAnswer";
        case "currency":
          return "CurrencyAnswer";
        case "slider":
          return "SliderAnswer";
        case "range":
          return "RangeAnswer";
        case "singleSelect":
          return "SingleSelectAnswer";
        case "singleSelectImage":
          return "SingleSelectImage";
        default:
          return "TextAnswer";
      }
    },
  },
};
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
