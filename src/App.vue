<template>
  <header>
    <ProgressBar
      :value="progress"
      :showValue="false"
      style="height: .5em; border-radius: 0px;"
    />
  </header>
  <div class="main">
    <div class="main-content">
      <BaseQuestion :question="activeQuestion" :error="error">
        <template #question>
          <QuestionHeader :question="activeQuestion" />
        </template>
        <component
          :is="activeAnswerType"
          @handle-change="handleChange"
          @change-question="changeQuestion"
          :question="activeQuestion"
        ></component>
      </BaseQuestion>
    </div>
  </div>
  <div id="footer">
    <TheNavigation
      @change-question="changeQuestion"
      @handle-error="handleError"
    >
    </TheNavigation>
  </div>
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
import ProgressBar from "primevue/progressbar";

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
    ProgressBar,
  },
  data() {
    return {
      activeQuestionIndex: 0,
      error: false,
      questions: [
        {
          id: 1,
          questionNumber: 1,
          description: "What is the reason for redesigning your space ?",
          answerType: "text",
          answer: null,
          answers: [],
        },
        {
          id: 6,
          questionNumber: 6,
          description: "What is the reason for redesigning your space ?",
          answerType: "singleSelectImage",
          answer: 1,
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
    };
  },
  computed: {
    progress() {
      return (this.activeQuestionIndex / (this.questions.length - 1)) * 100;
    },
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
    },
    changeQuestion(increment) {
      if (!this.error) {
        if (
          this.activeQuestionIndex + increment < this.questions.length &&
          this.activeQuestionIndex + increment >= 0
        ) {
          this.activeQuestionIndex += increment;
        }
      }
    },
    handleError() {
      if (!this.questions[this.activeQuestionIndex].answer) {
        this.error = true;
      } else {
        this.error = false;
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
</script>

<style>
body {
  margin: 0;
  box-sizing: border-box;
  /* width: 100%;
  height: 100%; */
  /* position: absolute; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;

  /* grid container settings */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header"
    "main";
}

#app > header {
  grid-area: header;
}

#app > .main {
  grid-area: main;
  overflow: auto;
  padding: 15px 5px 10px 5px;
  width: 100%;
  height: 100%;
  max-width: 720px;
  place-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.main-content {
  max-height: 100%;
}

#footer {
  display: flex;
  position: fixed;
  justify-content: flex-end;
  padding: 12px;
  bottom: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.6);
}

@media (min-width: 481px) {
  #app > .main {
    overflow: hidden;
  }
  #footer {
    padding: 32px;
  }
}
</style>
