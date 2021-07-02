<template>
  <transition name="fade-in" mode="out-in">
    <div :key="question" class="main-content" :class="{ animate: animateIn }">
      <div class="p-grid">
        <slot name="question"></slot>
      </div>
      <div class="p-grid">
        <div class="p-col-1"></div>
        <div class="p-col-11">
          <div class="box"><slot></slot></div>
          <Tag
            v-if="error"
            class="p-mr-2"
            icon="pi pi-exclamation-triangle"
            severity="warning"
            value="Warning"
          ></Tag>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Tag from "primevue/tag";

export default {
  props: ["question", "error"],
  components: { Tag },
  data() {
    return {
      showError: false,
    };
  },
  watch: {
    question: function(newVal, oldVal) {
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
    },
  },
};
</script>

<style scoped>
.main-content {
  max-height: 100%;
  animation: fade-in 0.4s ease-out;
}
.question-header {
  margin: 1rem 0rem;
}

@keyframes fade-in {
  0% {
    transform: translateY(-150px);
    opacity: 0;
  }
  70% {
    transform: translateY(-30px);
    opacity: 0.4;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.2, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}
</style>
