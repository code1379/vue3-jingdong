<template>
  <div class="nearby">
    <div class="nearby__title">附近店铺</div>
    <div class="nearby__list">
      <div
        class="nearby__item"
        v-for="market in markets"
        :key="market._id"
        @click="goToDetailPageById(market._id)"
      >
        <img class="nearby__item__img" :src="market.imgUrl" alt="" />
        <div class="nearby__item__info">
          <div class="name">{{ market.name }}</div>
          <div class="promise">
            <span>{{ getChineseCount(market.sales) }}</span>
            <span>起送¥{{ market.exporessLimit }}</span>
            <span>基础运费¥{{ market.expressPrice }}</span>
          </div>
          <div class="slogan">{{ market.slogan }}</div>
        </div>
      </div>
      <ShopCard
        v-for="market in markets"
        :key="market._id"
        :info="market"
        @click="handleClick($event, market._id)"
      />
    </div>
  </div>
</template>

<script>
import { getNearByMarkets } from "@/service/home";
import { ref } from "vue";
import { useRouter } from "vue-router";
import ShopCard from "@/components/ShopCard";

const useGetNearByMarketsEffect = () => {
  const markets = ref([]);

  const _getNearByMarkets = async () => {
    await getNearByMarkets().then((res) => {
      console.log(res);
      markets.value = res.data;
    });
  };
  _getNearByMarkets();
  return {
    markets,
  };
};

export default {
  name: "NearBy",
  components: {
    ShopCard,
  },
  setup() {
    const router = useRouter();
    const { markets } = useGetNearByMarketsEffect();
    const getChineseCount = (count) => {
      if (count > 10000) {
        return Math.floor(count / 10000) + "万";
      } else if (count > 1000) {
        return Math.floor(count / 1000) + "千";
      } else {
        return count;
      }
    };

    const goToDetailPageById = (id) => {
      router.push({
        name: "Detail",
        params: {
          id,
        },
      });
    };

    const handleClick = (e, id) => {
      router.push({
        name: "Detail",
        params: {
          id,
        },
      });
    };
    return {
      markets,
      getChineseCount,
      goToDetailPageById,
      handleClick,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";
.nearby {
  padding: 0.16rem 0.18rem 0.16rem;
  margin-top: 0.1rem;
  background-color: #fff;
  &__title {
    font-size: 0.18rem;
    line-height: 0.25rem;
    margin-bottom: 0.02rem;
  }
  &__item {
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
}
</style>