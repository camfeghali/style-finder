<template>
  <div>
    <InputText v-model="text" />
    <Button label="Greet" icon="pi pi-user" @click="greet"></Button>
    <Toast />
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/runtime-core";
import { useToast } from "primevue/usetoast";

export default defineComponent({
  setup() {
    const toast = useToast();
    const text = ref("Prime");

    const greet = () => {
      console.log("greeting!");
      toast.add({
        severity: "info",
        summary: "hello",
        detail: text,
      });
    };

    return {
      text,
      greet,
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
