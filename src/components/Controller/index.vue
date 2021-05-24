<template>
  <div class="controller">
    <div class="left">
      <div class="minus-wrapper" :class="{ active: count > 0 }">
        <div class="icon-wrapper">
          <i class="iconfont icon-MinusSquare-Outline" @click="handleMinus"></i>
        </div>
        <div class="count">{{ count }}</div>
      </div>
    </div>
    <i class="iconfont icon-add_3" @click="handleAdd"></i>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Controller",
  props: ["good"],
  setup(props, { emit }) {
    const store = useStore();

    const count = computed(
      () =>
        store.state.cart.items.find((item) => item._id === props.good._id)
          ?.count || 0
    );
    const handleAdd = () => {
      store.dispatch("cart/addItemToCart", props.good);
    };
    const handleMinus = () => {
      store.commit("cart/reduceItemCount", props.good);
    };

    return {
      count,
      handleAdd,
      handleMinus,
    };
  },
};
</script>

<style lang="scss" scoped>
.controller {
  display: flex;
  align-items: center;
  .iconfont {
    font-size: 0.2rem;
    &.icon-add_3 {
      color: #0091ff;
      position: relative;
      z-index: 999;
    }
    &.icon-MinusSquare-Outline {
      color: #666666;
    }
  }
  .left {
    display: flex;
    align-items: center;
    .minus-wrapper {
      display: flex;
      align-items: center;
      transition: all 0.5s ease;
      position: relative;
      left: 0.5rem;
      .count {
        opacity: 0;
        margin: 0 0.12rem;
      }
      .icon-wrapper {
        opacity: 0;
        transform: rotate(360deg);
        transition: all 0.5s ease;
      }
      &.active {
        left: 0;
        .icon-wrapper {
          transform: rotate(0deg);
          opacity: 1;
        }
        .count {
          opacity: 1;
        }
      }
    }
  }
}
</style>