<template>
  <div class="docker">
    <NavItem
      v-for="item in navList"
      :key="item.title"
      :title="item.title"
      :path="item.path"
      :iconClass="item.iconClass"
    />
  </div>
</template>

<script>
import { reactive } from "vue";
import NavItem from "./childComponents/NavItem";
export default {
  components: {
    NavItem,
  },
  setup() {
    const navList = reactive([
      {
        title: "首页",
        iconClass: "icon-home-filling",
        path: "/",
      },
      {
        title: "购物车",
        iconClass: "icon-icon-test1",
        path: "/cart",
      },
      {
        title: "订单",
        iconClass: "icon-file",
        path: "/order",
      },
      {
        title: "我的",
        iconClass: "icon-user",
        path: "/mine",
      },
    ]);
    return {
      navList,
    };
  },
};
</script>

<style lang="scss" scoped>
.docker {
  /* position: absolute;
  right: 0;
  bottom: 0;
  left: 0; */
  display: flex;
  height: 49px;
  box-shadow: 0 -1px 1px 0 #f1f1f1;
}
</style>