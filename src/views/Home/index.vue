<template>
  <div class="home">
    <JDHeader textAlign="left">
      <template #left>
        <i class="iconfont icon-navigation" style="font-size: 0.18rem"></i>
      </template>
      <template #center>北京理工大学国防科技园2号楼10层</template>
      <template #right>
        <i class="iconfont icon-notification" style="font-size: 0.18rem"></i>
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
.home {
}
</style>