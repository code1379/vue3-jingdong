<template>
  <div class="search">
    <i class="search__icon iconfont icon-search"></i>
    <input class="search__input" type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  name: "search",
  props: {
    placeholder: String,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
.search {
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 0 0.16rem;
  width: 100%;
  height: 0.32rem;
  background-color: $input-bg-color;
  border-radius: 0.16rem;
  &__icon {
    font-size: 0.16rem;
    margin-right: 0.12rem;
    color: $input-icon-color;
  }
  &__input {
    flex: 1;
    font-size: 0.14rem;
    line-height: 0.16rem;
    border: none;
    background: transparent;
    outline: none;
    &::placeholder {
      color: $placeholder-color;
    }
  }
}
</style>