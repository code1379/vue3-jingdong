<template>
  <div class="home">
    <JDHeader textAlign="left">
      <template #left>
        <i class="icon-h iconfont icon-navigation"></i>
      </template>
      <template #center>北京理工大学国防科技园2号楼10层</template>
      <template #right>
        <!-- <i class="iconfont icon-notification" style="font-size: 0.18rem"></i> -->
        <i class="icon-h iconfont icon-notification"></i>
      </template>
    </JDHeader>
    <div class="top-wrapper">
      <Search placeholder="山姆会员商店优惠商品" />
      <Banner />
      <NavBar />
    </div>
  </div>
</template>

<script>
import JDHeader from "@/components/JDHeader";
import Search from "@/components/Search";
import Banner from "./childComps/Banner";
import NavBar from "./childComps/NavBar";

import { getNearByMarkets } from "@/service/home";

export default {
  name: "Home",
  components: {
    JDHeader,
    Search,
    Banner,
    NavBar,
  },
  setup() {
    getNearByMarkets().then((res) => {
      console.log(res);
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>
.icon-h {
  font-size: 0.2rem;
}
.home {
  background-color: #f1f1f1;
  .top-wrapper {
    background-color: #fff;
    padding: 0 0.18rem 0.16rem 0.18rem;
    .search {
      margin-bottom: 0.12rem;
    }
    .banner {
    }
  }
}
</style>