<template>
  <header class="header">
    <div class="container">
      <div class="header__logo">
        <img
          src="../../images/logo.png"
          alt="Tezos"
          class="header__img"
        >
        <router-link to="/" class="header__item">Tezos4all</router-link>
      </div>
      <navigation
        v-show="width > 380 || display"
        @routClick="routChangeHandler"
        class="nav"
      ></navigation>
      <burger v-show="width <= 380" @navDisplay="displayChangeHandler"></burger>
    </div>
  </header>
</template>

<script>
import Burger from '@/components/header/Burger.vue';
import Navigation from '@/components/header/Navigation.vue';

export default {
  name: 'Header',

  components: {
    Navigation,
    Burger,
  },

  data() {
    return {
      width: window.innerWidth,
      display: false,
      isRouterChange: false,
    };
  },

  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },

    displayChangeHandler() {
      this.display = !this.display;
    },

    routChangeHandler() {
      this.isRouterChange = true;
      console.log(123);
    },
  },

  mounted() {
    window.addEventListener('resize', this.updateWidth);
    if (this.isRouterChange) {
      this.display = true;
    }
  },

  destroyed() {
    window.removeEventListener('resize', this.updateWidth);
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/variables";

.header {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background: $-c-main-blue;
    color: #fff;

    &__item {
      font-size: 18px;
    }

    &__logo {
      display: flex;
      align-items: center;
    }

    &__img {
      margin-right: 5px;
    }
  }
</style>
