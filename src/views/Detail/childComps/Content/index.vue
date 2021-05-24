<template>
  <div class="content">
    <div class="nav">
      <div
        class="nav__item"
        :class="{ 'nav__item--active': currentIndex === index }"
        v-for="(item, index) in productList"
        :key="item.type"
        @click="changeCurrentIndex(index)"
      >
        {{ item.name }}
      </div>
      <div class="bgf5"></div>
    </div>

    <div class="goods">
      <!-- <div class="good" v-for="good in goods" :key="good._id">
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
        </div>
        <div class="controller">
          <div class="minus"></div>
          <div class="count">1</div>
          <div class="add"></div>
        </div>
      </div> -->
      <GoodItem v-for="good in goods" :key="good._id" :good="good" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed, watchEffect } from "vue";
import { getProductsById } from "@/service/detail";
import { useRoute } from "vue-router";
import GoodItem from "../GoodItem";
const useGetProductsEffect = (currentIndexGoods) => {
  const route = useRoute();
  const { id } = route.params;
  const _getDetailById = async () => {
    const { data } = await getProductsById(id);
    console.log(data);
    currentIndexGoods.push(...data);
  };
  return {
    _getDetailById,
  };
};

export default {
  name: "Content",
  components: { GoodItem },
  setup() {
    const data = reactive({
      currentIndex: 0,
      productList: [
        {
          type: "all",
          name: "全部商品",
          goods: [],
        },
        {
          type: "second",
          name: "秒杀",
          goods: [],
        },
        {
          type: "fruit",
          name: "新鲜水果",
          goods: [],
        },
        {
          type: "good",
          name: "休闲食品",
          goods: [],
        },
        {
          type: "vegetable",
          name: "时令蔬菜",
          goods: [],
        },
        {
          type: "meat",
          name: "肉蛋家禽",
          goods: [],
        },
      ],
    });
    const { productList, currentIndex } = toRefs(data);

    const changeCurrentIndex = (index) => {
      data.currentIndex = index;
      console.log(data.productList);
    };

    const currentIndexProducts = computed(
      () => productList.value[currentIndex.value]
    );
    console.log(currentIndexProducts.value);
    const { _getDetailById } = useGetProductsEffect(
      currentIndexProducts.value.goods
    );
    watchEffect(() => {
      _getDetailById();
    });

    const { goods } = currentIndexProducts.value;
    return { productList, currentIndex, goods, changeCurrentIndex };
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  /* height: 5rem; */
  .nav {
    width: 0.76rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .bgf5 {
      flex: 1;
      background: #f5f5f5;
    }
    &__item {
      text-align: center;
      height: 0.4rem;
      line-height: 0.4rem;
      background: #f5f5f5;
      &--active {
        background-color: #fff;
        & + div {
          border-top-left-radius: 0.02rem;
          border-top-right-radius: 0.02rem;
        }
      }
      &--active + div {
        border-top-left-radius: 0.02rem;
        border-top-right-radius: 0.02rem;
      }
    }
  }
  .goods {
    flex: 1;
    padding: 0 0.18rem 0 0.16rem;
    height: 100%;
    overflow-y: scroll;
    .good {
      display: flex;
      padding: 0.12rem 0;
      border-bottom: 1px solid #f1f1f1;
      .controller {
        display: flex;
        align-items: center;
      }
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
  }
}
</style>