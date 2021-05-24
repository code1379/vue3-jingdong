<template>
  <div class="card">
    <img class="card__img" :src="info.imgUrl" alt="" />
    <div class="card__info">
      <div class="name">{{ info.name }}</div>
      <div class="promise">
        <span>{{ getChineseCount(info.sales) }}</span>
        <span>起送¥{{ info.exporessLimit }}</span>
        <span>基础运费¥{{ info.expressPrice }}</span>
      </div>
      <div class="slogan">{{ info.slogan }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCard",
  props: {
    info: {
      type: Object,
      default() {
        return {
          name: "info Name",
        };
      },
    },
  },
  setup() {
    const getChineseCount = (count) => {
      if (count > 10000) {
        return Math.floor(count / 10000) + "万";
      } else if (count > 1000) {
        return Math.floor(count / 1000) + "千";
      } else {
        return count;
      }
    };
    return {
      getChineseCount,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";

.card {
  display: flex;
  align-items: center;
  padding: 0.12rem 0;
  &__img {
    width: 0.56rem;
    height: 0.56rem;
  }
  &__info {
    flex: 1;
    margin-left: 0.16rem;
    padding-bottom: 0.12rem;
    font-size: 0.13rem;
    line-height: 0.18rem;
    border-bottom: 1px solid #f1f1f1;
    .name {
      font-size: 0.16rem;
      line-height: 0.22rem;
    }
    .promise {
      margin: 0.08rem 0;
    }
    .slogan {
      color: $high-light-color;
    }
  }
}
</style>