<template>
  <div class="little-cart">
    <div class="cart">
      <div class="cart__top">
        <i
          class="iconfont icon-icon-test3"
          :class="{ active: isAllSelected }"
          @click="selectAll"
        ></i>
        {{ isAllSelected }}
      </div>
      <div class="cart__list">
        <div class="cart__item" v-for="item in productList" :key="item._id">
          <i
            class="iconfont icon-icon-test3"
            :class="{ active: item.isSelected }"
            @click="changeSelectedStats(item)"
          ></i>
          <div class="content">
            <img :src="item.imgUrl" alt="" />
            <div class="info">
              <div class="name">{{ item.name }}</div>
              <div class="price">
                <div class="now">{{ item.price }}</div>
                <div class="old">{{ item.oldPrice }}</div>
              </div>
            </div>
          </div>
          <Controller :good="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Controller from "@/components/Controller";
export default {
  name: "LittleCart",
  components: {
    Controller,
  },
  setup() {
    const store = useStore();
    const productList = computed(() => store.getters["cart/cartProducts"]);
    const changeSelectedStats = (item) => {
      store.commit("cart/changeSelectedStats", item);
    };
    const isAllSelected = computed(() => store.getters["cart/isAllSelected"]);
    const selectAll = () => {
      console.log("selectAll");
      store.commit("cart/selectAll");
    };
    return { productList, changeSelectedStats, selectAll, isAllSelected };
  },
};
</script>

<style lang="scss" scoped>
.little-cart {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  .cart {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    &__top {
      height: 50px;
      border-top: 1px solid #f1f1f1;
      border-bottom: 1px solid #f1f1f1;
      .iconfont {
        font-size: 0.2rem;
        &.active {
          color: #4fb0f9;
        }
      }
    }
    &__list {
      max-height: 1.86rem;
      overflow: scroll;
    }
    &__item {
      overflow: hidden;
      height: 0.62rem;
      display: flex;
      align-items: center;
      .iconfont {
        font-size: 0.2rem;
        &.active {
          color: #4fb0f9;
        }
      }
      .content {
        display: flex;
        img {
          width: 0.46rem;
          height: 0.46rem;
        }
        .info {
          .price {
            display: flex;
          }
        }
      }
    }
  }
}
</style>