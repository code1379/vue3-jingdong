<template>
  <div class="login">
    <img
      class="login__avatar"
      src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
    />
    <form class="login__form" @submit="handleSubmit">
      <!-- <input class="form__input" type="text" v-model="phone.value" @blur="validatePhoneNumber" />
      <div class="phone-error" v-if="phone.error">{{phone.error}}</div> -->
      <input
        type="text"
        class="login__form__input"
        v-model="phone"
        placeholder="请输入手机号"
      />
      <input
        type="password"
        class="login__form__input"
        placeholder="请输入密码"
        v-model="password"
      />
      <button type="submit" class="login__form__btn">登陆</button>
    </form>

    <div class="function">
      <span @click="goToRegisterPage">立即注册</span> | <span>忘记密码</span>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

import { login } from "@/service/login";

const useLoginEffect = async (phone, password) => {
  const _login = async () => {
    const res = await login(phone, password);
    if (res.errno === 0) {
      console.log("useLoginEffect 执行完毕");
      localStorage.isLogin = true;
    }
  };
  await _login();
};

export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const user = reactive({
      phone: "",
      password: "",
    });

    const phone = reactive({
      value: "",
      error: "",
      reg: /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
    });

    const validatePhoneNumber = () => {
      console.log("validate phone number");
      // console.log(phone.value);
      const result = phone.reg.test(phone.value);
      console.log(result);
      if (!result) {
        phone.error = "手机号格式错误";
      } else {
        phone.error = "";
      }
    };

    const validatePassword = () => {};
    const handleSubmit = async () => {
      console.log("handleSubmit");
      await useLoginEffect(user.phone, user.password);
      console.log("登陆成功，正在跳转到首页");
      router.push({ name: "Home" });
    };

    const goToRegisterPage = () => {
      router.push("/register");
    };
    return {
      validatePhoneNumber,
      validatePassword,
      phone,
      handleSubmit,
      ...toRefs(user),
      goToRegisterPage,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
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