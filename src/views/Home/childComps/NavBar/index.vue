<template>
  <div class="navbar">
    <div class="navbar__item" v-for="item in navList" :key="item.name">
      <img class="navbar__item__img" :src="item.imgUrl" alt="" />
      <div class="navbar__item__name">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  setup() {
    const navList = [
      {
        imgUrl: "http://www.dell-lee.com/imgs/vue3/超市.png",
        name: "超市便利",
      },
      {
        imgUrl: "http://www.dell-lee.com/imgs/vue3/菜市场.png",
        name: "菜市场",
      },
      {
        imgUrl: "http://www.dell-lee.com/imgs/vue3/水果店.png",
        name: "水果店",
      },
      {
        imgUrl: "http://www.dell-lee.com/imgs/vue3/鲜花.png",
        name: "鲜花绿植",
      },
      {
        imgUrl: "http://www.dell-lee.com/imgs/vue3/医药健康.png",
        name: "医药健康",
      },
      {
        imgUrl: "http://www.dell-lee.com/imgs/vue3/家居.png",
        name: "家居时尚",
      },
      {
        imgUrl: "http://www.dell-lee.com/imgs/vue3/蛋糕.png",
        name: "烘培蛋糕",
      },
      {
        imgUrl: "http://www.dell-lee.com/imgs/vue3/签到.png",
        name: "签到",
      },
      {
        imgUrl: "http://www.dell-lee.com/imgs/vue3/大牌免运.png",
        name: "大牌免运",
      },
      {
        imgUrl: "http://www.dell-lee.com/imgs/vue3/红包.png",
        name: "红包套餐",
      },
    ];
    return { navList };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-wrap: wrap;
  /*  */
  &__item {
    width: 20%;
    margin-top: .12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__img {
      width: .4rem;
      height: .4rem;
    }
    &__name {
      margin-top: .06rem;
      color: #333;
      line-height: .17rem;
    }
  }
}
</style>