<template>
  <div class="toast" v-if="show">{{ message }}</div>
</template>

<script>
import { ref } from "vue";

export const useShowToastEffect = () => {
  const show = ref(false);
  const changeShowStats = (val) => {
    show.value = val;
  };

  return {
    show,
    changeShowStats,
  };
};

export default {
  name: "Toast",
  props: {
    message: String,
  },
  setup() {
    const { show } = useShowToastEffect();

    return {
      show,
    };
  },
};
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>