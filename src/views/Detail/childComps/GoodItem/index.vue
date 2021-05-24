<template>
  <div class="good" v-if="Object.keys(good).length">
    <img class="good__img" :src="good.imgUrl" alt="" />
    <div class="good__info">
      <div class="name">{{ good.name }}</div>
      <div class="sales">月售{{ good.sales }}件</div>
      <div class="price">
        <div class="price__now">
          <span class="yen">&yen;</span>{{ good.price }}
        </div>
        <div class="price__old">
          <span class="yen">&yen;</span>{{ good.oldPrice }}
        </div>
      </div>
      <!-- <div class="controller">
        <div class="btn minus">-</div>
        <div class="count">1</div>
        <div class="btn add" @click="handleAddItem">+</div>
      </div> -->
      <Controller :good="good" />
    </div>
  </div>
</template>

<script>
import Controller from "@/components/Controller";
export default {
  name: "GoodItem",
  components: { Controller },
  props: {
    good: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.good {
  display: flex;
  padding: 0.12rem 0;
  border-bottom: 1px solid #f1f1f1;

  &__img {
    width: 0.68rem;
    height: 0.68rem;
  }
  &__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.16rem;
    position: relative;
    .controller {
      display: flex;
      align-items: center;
      position: absolute;
      right: 0;
      bottom: 0;
      .count {
        margin: 0 0.1rem;
      }
      .btn {
        box-sizing: border-box;
        width: 0.2rem;
        height: 0.2rem;
        display: flex;
        justify-content: center;
        line-height: 0.16rem;
        border-radius: 50%;
        font-size: 0.2rem;
        &.minus {
          border: 1px solid #666;
          color: #666;
        }
        &.add {
          background-color: #0091ff;
          color: #fff;
        }
      }
    }
    .name {
      font-size: 0.14rem;
      line-height: 0.2rem;
    }
    .price {
      display: flex;
      align-items: center;
      .yen {
        font-size: 0.1rem;
      }
      &__now {
        color: #e93b3b;
        font-size: 0.14rem;
      }
      &__old {
        color: #999;
        margin-left: 0.16rem;
        text-decoration: line-through;
      }
    }
  }
}
</style>