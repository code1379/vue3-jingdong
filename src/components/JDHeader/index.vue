<template>
  <div class="header">
    <div class="header__left">
      <slot name="left" class="header__left__slot"></slot>
    </div>
    <div class="header__center" :style="{ 'text-align': textAlign }">
      <slot name="center"></slot>
    </div>
    <div class="header__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "JDHeader",
  props: {
    textAlign: String,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
@import "@/assets/style/mixin.scss";
.header {
  display: flex;
  height: 0.44rem;
  color: $content-font-color;
  &__left,
  &__right {
    min-width: 0.5rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* 插槽中的 iconfont 设置样式无效 */
    /* .iconfont {
      font-size: .2rem;
    } */
  }
  &__center {
    @include text-nowrap;
    flex: 1;
    line-height: 0.44rem;
    text-align: center;
    font-size: 0.16rem;
  }
}
</style>