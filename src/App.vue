<template>
  <div class="content">
    <router-view />
  </div>
  <Docker />
</template>
<script>
import Docker from "@/components/Docker";
export default {
  name: "App",
  components: {
    Docker,
  },
};
</script>

<style lang="scss" scoped>
</style>
