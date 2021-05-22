<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
import { ref } from "vue";

export const useShowToastEffect = () => {
  const show = ref(false);
  const message = ref("");
  // const changeShowStats = (val) => {
  //   console.log("changeShowStats");
  //   show.value = val;
  // };

  // const changeMessage = (msg) => {
  //   console.log("changeMessage");
  //   message.value = msg;
  // };

  const showToast = (msg) => {
    message.value = msg;
    show.value = true;
    setTimeout(() => {
      show.value = false;
    }, 3000);
  };
  return {
    show,
    // changeShowStats,
    // changeMessage,
    message,
    showToast,
  };
};

export default {
  name: "Toast",
  props: {
    message: String,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  z-index: 1000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.1rem;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: #fff;
}
</style>