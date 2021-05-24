<template>
  <div class="detail-wrapper">
    <LittleCart v-show="show" />
    <div class="detail">
      <JDHeader class="detail__header" @left-click="handleBack">
        <template #left>
          <i class="iconfont icon-icon-test" style="font-size: 0.22rem"></i>
        </template>
        <template #center>
          <Search placeholder="请输入商品名称搜索" />
        </template>
      </JDHeader>
      <div class="detail__card">
        <ShopCard :info="shopInfo" v-if="shopInfo.imgUrl" />
      </div>
      <Content class="detail__content" />
      <CartBar @toggleShow="toggleShow" />
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { getDetailById } from "@/service/detail";
import { computed, reactive, ref, toRefs, watchEffect } from "vue";
import JDHeader from "@/components/JDHeader";
import Search from "@/components/Search";
import ShopCard from "@/components/ShopCard";
import Content from "./childComps/Content";
import CartBar from "./childComps/CartBar";
import LittleCart from "./childComps/LittleCart";
import { useStore } from "vuex";
const useGetDetailDataEffect = (id) => {
  const data = reactive({
    shopInfo: {},
  });
  const _getDetailById = async (id) => {
    try {
      const res = await getDetailById(id);
      data.shopInfo = res.data;
    } catch (e) {
      console.log(e);
    }
  };

  const { shopInfo } = toRefs(data);
  return {
    shopInfo,
    _getDetailById,
  };
};

const useRouterEffect = () => {
  const router = useRouter();
  const handleBack = () => {
    router.go(-1);
  };
  return { handleBack };
};

const useShowLittleCartEffect = () => {
  const show = ref(false);
  const store = useStore();
  const totalPrice = computed(() => store.getters["cart/totalPrice"]);
  const cartProducts = computed(() => store.getters["cart/cartProducts"]);
  const showLittleCart = () => {
    show.value = true;
  };
  const hideLittleCart = () => {
    show.value = false;
  };
  const toggleShow = () => {
    if (cartProducts.value.length > 0) {
      if (show.value === false) {
        showLittleCart();
      } else {
        hideLittleCart();
      }
    } else {
      hideLittleCart();
    }
  };
  return {
    show,
    showLittleCart,
    hideLittleCart,
    toggleShow,
    totalPrice,
  };
};
export default {
  name: "Detail",
  components: {
    JDHeader,
    Search,
    ShopCard,
    Content,
    CartBar,
    LittleCart,
  },
  setup() {
    const route = useRoute();
    // console.log(route.params.id);
    const { id } = route.params;

    const { shopInfo, _getDetailById } = useGetDetailDataEffect();
    _getDetailById(id);
    const { handleBack } = useRouterEffect();
    const {
      show,
      showLittleCart,
      hideLittleCart,
      toggleShow,
    } = useShowLittleCartEffect();

    const store = useStore();
    watchEffect(() => {
      const items = store.getters["cart/cartProducts"];
      if (!items.length) {
        hideLittleCart();
      }
    });
    return {
      show,
      showLittleCart,
      hideLittleCart,
      shopInfo,
      handleBack,
      toggleShow,
    };
  },
};
</script>

<style lang="scss" scoped>
.detail-wrapper {
  position: absolute;
  height: 100vh;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
}
.detail {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 0.49rem);
  overflow: hidden;
  margin-bottom: 0.49rem;
  background-color: #fff;
  z-index: 9;
  &__header {
    ::v-deep .header__right {
      min-width: 0.18rem;
    }
  }
  &__card {
    padding-left: 0.18rem;
    ::v-deep .card__info {
      border: none;
    }
  }
  &__content {
    flex: 1;
  }
}
</style>