const state = {
  items: [],
  checkoutStatus: null
};

const mutations = {
  addItemToCart(state, product) {
    state.items.push(product);
    console.log(state.items);
  },
  addItemCount(state, product) {
    const productInCart = state.items.find(item => item._id === product._id);
    productInCart.count += 1;
    console.log(state.items);
  },
  reduceItemCount(state, product) {
    const productInCart = state.items.find(item => item._id === product._id);
    if (productInCart.count >= 1) {
      productInCart.count -= 1;
    }
  },
  changeSelectedStats(state, product) {
    const productInCart = state.items.find(item => item._id === product._id);
    productInCart.isSelected = !productInCart.isSelected;
  },
  selectAll(state) {
    console.log("store selectAll");
    // 如果找到其中有一个没被选中的，则全选中
    const has = state.items.some(item => item.isSelected === false);
    console.log(has);
    if (!has) {
      state.items.map(item => (item.isSelected = false));
    } else {
      // 如果没有找到，则全部不选择
      state.items.map(item => (item.isSelected = true));
    }
  }
};

const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.filter(item => item.count > 0);
  },
  totalPrice: (state, getters) => {
    return getters.cartProducts
      .filter(item => item.isSelected)
      .reduce((total, product) => {
        return total + product.price * product.count;
      }, 0);
  },
  isAllSelected: (state, getters) => {
    return !state.items.some(item => item.isSelected === false);
  }
};

const actions = {
  addItemToCart({ commit, state }, product) {
    const productInCart = state.items.find(item => {
      return item._id === product._id;
    });
    // 购物车中没有该商品
    if (productInCart) {
      commit("addItemCount", product);
      if (productInCart.isSelected === false) {
        commit("changeSelectedStats", product);
      }
    } else {
      product.count = 1;
      product.isSelected = true;
      commit("addItemToCart", product);
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
