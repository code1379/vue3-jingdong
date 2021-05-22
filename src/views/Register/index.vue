<template>
  <div class="register">
    <img
      class="register__avatar"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
    />
    <form class="register__form" @submit="handleSubmit">
      <input
        type="text"
        class="register__form__input"
        placeholder="请输入手机号"
        v-model="phone"
      />
      <input
        type="password"
        class="register__form__input"
        v-model="pwd1"
        placeholder="请输入密码"
      />
      <input
        type="password"
        class="register__form__input"
        v-model="pwd2"
        placeholder="请确认密码"
      />
      <button type="submit" class="register__form__btn">注册</button>
    </form>

    <div class="function" @click="goToLoginPage">
      <span>已有账号，去登录</span>
    </div>

    <Toast v-if="show" :message="message"/>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

import Toast, { useShowToastEffect } from "@/components/Toast";

const useRegisterEffect = (showToast) => {
  const router = useRouter();
  const user = reactive({
    phone: "",
    pwd1: "",
    pwd2: "",
  });

  const handleSubmit = () => {
    if (user.pwd1 !== user.pwd2) {
      showToast("两次输入的密码不同");
    } else {
      router.push("/login");
    }
  };

  const { phone, pwd1, pwd2 } = toRefs(user);
  return {
    phone,
    pwd1,
    pwd2,
    handleSubmit,
  };
};

const useRouterEffect = () => {
  const router = useRouter();
  const goToLoginPage = () => {
    router.push("/login");
  };
  return {
    goToLoginPage,
  };
};

export default {
  name: "Register",
  components: {
    Toast,
  },
  setup() {
    const { goToLoginPage } = useRouterEffect();
    const { show, showToast, message } = useShowToastEffect();
    const { phone, pwd1, pwd2, handleSubmit } = useRegisterEffect(showToast);
    return {
      phone,
      pwd1,
      pwd2,
      message,
      handleSubmit,
      goToLoginPage,
      show,
    };
  },
};
</script>

<style lang="scss" scoped>
.register {
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;

  padding: 1.2rem 0.4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__avatar {
    height: 0.66rem;
    margin-bottom: 0.4rem;
  }
  &__form {
    display: flex;
    width: 100%;
    flex-direction: column;
    &__input {
      width: 100%;
      margin-top: 0.16rem;
      padding: 0 0.16rem;
      box-sizing: border-box;
      height: 0.48rem;
      font-size: 0.16rem;
      line-height: 0.24rem;
      border: 1px solid rgba(0, 0, 0, 0.1);
      background: #f9f9f9;
      border-radius: 0.06rem;
      outline: none;
      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }
    &__btn {
      margin-top: 0.32rem;
      height: 0.48rem;
      font-size: 0.16rem;
      line-height: 0.48rem;
      background-color: #0091ff;
      border: none;
      color: #fff;
      border-radius: 0.04rem;
      box-shadow: 0 4px 8px 0 rgba(0, 145, 255, 0.32);
    }
  }
  .function {
    margin-top: 0.16rem;
    font-size: 0.14rem;
    line-height: 0.2rem;
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 0;
  }
}
</style>