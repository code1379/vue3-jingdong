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
  </div>
</template>

<script>
import JDHeader from "@/components/JDHeader";
export default {
  name: "Home",
  components: {
    JDHeader,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.icon-h {
    font-size: .2rem;
  }
.home {

}
</style>