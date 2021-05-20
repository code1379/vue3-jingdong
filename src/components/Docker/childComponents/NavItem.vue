<template>
  <div
    class="nav__item"
    :class="{ 'nav__item--active': isActive }"
    @click="handleClick"
  >
    <!-- <i :class="className" style="font-size: .2rem;"></i> -->
    <i :class="className"></i>
    <div class="nav__item__title">{{ title }}</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "NavItem",
  // 只有在 props 中定义的属性才会被接收到
  props: {
    title: String,
    iconClass: String,
    path: String,
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    console.log(route.path);

    const className = computed(() => `icon iconfont ${props.iconClass}`);
    const isActive = computed(() => route.path === props.path);
    const handleClick = () => {
      router.push(props.path);
    };
    return {
      className,
      handleClick,
      isActive,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  &__item {
    padding-top: 0.1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .iconfont {
      font-size: 0.2rem;
    }
    &--active {
      color: #1fa4fc;
    }
    &__title {
      font-size: 0.2rem;
      transform: scale(0.5);
      transform-origin: center top;
    }
  }
}
</style>
