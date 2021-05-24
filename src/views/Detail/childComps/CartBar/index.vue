<template>
  <div class="cartbar">
    <div class="left" @click="toggleShow">
      <div class="icon__container">
        <i class="iconfont icon-icon-test1"></i>
        <div class="count">{{ cartProducts.length }}</div>
      </div>
      <div class="total" v-if="cartProducts.length">
        总计：<span class="price">&yen;{{ totalPrice.toFixed(2) }}</span>
      </div>
      <div v-else>购物车为空</div>
    </div>
    <div class="settlement">去结算</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "CartBar",
  emits: ["toggleShow"],
  setup(props, { emit }) {
    const store = useStore();
    const totalPrice = computed(() => store.getters["cart/totalPrice"]);
    const cartProducts = computed(() => store.getters["cart/cartProducts"]);
    console.log("cartProducts", cartProducts);
    const toggleShow = () => {
      emit("toggleShow");
    };
    return {
      totalPrice,
      toggleShow,
      cartProducts,
    };
  },
};
</script>

<style lang="scss" scoped>
.cartbar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.49rem;
  box-shadow: 0 -1px 1px 0 #f1f1f1;
  background: #fff;
  display: flex;
  .left {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 0.24rem;
    .icon__container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    
      .iconfont {
        font-size: 0.24rem;
        color: #4fb0f9;
      }
      .count {
        position: absolute;
        top: 0;
        right: 0;
        box-sizing: border-box;
        width: 0.1rem;
        height: 0.1rem;
        border-radius: 50%;
        background: #e93b3b;
        line-height: 0.1rem;
        text-align: center;
        color: #fff;
        font-size: 0.08rem;
      }
    }
    .total {
      display: flex;
      align-items: center;
      margin-left: 0.32rem;
      .price {
        font-size: 0.18rem;
        color: #e93b3b;
      }
    }
  }
  .settlement {
    width: 0.98rem;
    font-size: 0.14rem;
    line-height: 0.49rem;
    text-align: center;
    color: #fff;
    background-color: #4fb0f9;
  }
}
</style>