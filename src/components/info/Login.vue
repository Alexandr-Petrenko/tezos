<template>
  <form class="login">
    <h2 class="login__heading">Login</h2>
    <div class="login__wrapper">
      <input
        type="email"
        class="login__input"
        :class="{ login__input__error: !isEmailValid }"
        placeholder="Email"
        v-model="email"
        @change="checkEmail"
      >
      <span class="login__error" v-if="!isEmailValid">
        Invalid email
      </span>
      <span class="login__placeholder" v-if="!isEmailValid">
        Email
      </span>
    </div>
   <div class="login__wrapper">
     <input
       type="password"
       class="login__input"
       :class="{ login__input__error: !isPassWordValid }"
       placeholder="Password"
       v-model="password"
       @change="checkPassWord"
     >
     <span class="login__error login__error--advice" v-if="!isPassWordValid">
       Password must contain only latin letters,
       1 upper-case character,
       1 lower-case character, one number and one special character.
     </span>
     <span class="login__placeholder" v-if="!isEmailValid">
        Password
     </span>
   </div>
    <div class="login__wrapper">
      <input
        type="password"
        class="login__input"
        :class="{ login__input__error: !isPassesConfirm }"
        placeholder="Password confirmation"
        v-model="passWordConfirmation"
        @change="checkPassMatch"
      >
      <span class="login__error" v-if="!isPassesConfirm">
       Password doesn’t match
     </span>
      <span class="login__placeholder" v-if="!isEmailValid">
        Password confirmation
     </span>
    </div>
    <input
      type="submit"
      value="Submit"
      class="login__button"
      @click.prevent="verifyForm"
    >
  </form>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      email: '',
      isEmailValid: true,
      password: '',
      isPassWordValid: true,
      passWordConfirmation: '',
      isPassesConfirm: true,
    };
  },

  methods: {
    checkEmail() {
      const valid = /^(?!.*@.*@.*$)(?!.*@.*--.*\..*$)(?!.*@.*-\..*$)(?!.*@.*-$)(.*@.+(\..{1,11})?)$/;

      this.isEmailValid = valid.test(this.email) && this.email !== '';
    },
    checkPassWord() {
      const valid = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[`~!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/;

      this.isPassWordValid = valid.test(this.password) && this.password !== '';
    },

    checkPassMatch() {
      this.isPassesConfirm = this.passWordConfirmation === this.password
        && this.passWordConfirmation !== '';
    },

    verifyForm() {
      this.checkEmail();
      this.checkPassWord();
      this.checkPassMatch();

      if (this.isEmailValid && this.isPassWordValid && this.isPassesConfirm) {
        // eslint-disable-next-line no-alert
        alert(`Email: ${this.email}, Password: ${this.password}`);
      }
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../styles/variables";

  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
    align-items: center;
    padding: 44px 107px 30px;
    background-color: #ecf4ff;
    border-radius: 4px;

    @media (max-width: 625px) {
      max-width: 320px;
      padding: 30px 20px;
    }

    &__heading {
      font-size: 36px;
      margin-bottom: 35px;

      @media (max-width: 625px) {
        font-size: 24px;
      }
    }

    &__input {
      width: 390px;
      height: 60px;
      padding-left: 22px;
      border-radius: 4px;
      border: none;
      outline: none;
      font-size: inherit;

      @media (max-width: 625px) {
        width: 206px;
        height: 40px;
      }

      &::placeholder {
        color: #000;
      }

      &__error {
        border: 1px solid #d50d0d;
      }
    }

    &__button {
      width: 220px;
      height: 50px;
      border-radius: 4px;
      border: none;
      background: $-c-main-yellow;
      font-size: inherit;
      font-weight: bold;
      color: #fff;
      cursor: pointer;

      @media (max-width: 625px) {
        width: 206px;
        height: 33px;
      }
    }

    &__wrapper {
      position: relative;
      margin-bottom: 90px;
    }

    &__error {
      position: absolute;
      bottom: -25px;
      left: 1px;
      font-size: 14px;
      color: #d50d0d;

      @media (max-width: 625px) {
        font-size: 11px;
      }

      &--advice {
        bottom: -60px;
        color: #000;
      }
    }

    &__placeholder {
      position: absolute;
      top: -12px;
      left: 22px;
      font-size: 15px;
    }
  }
</style>
