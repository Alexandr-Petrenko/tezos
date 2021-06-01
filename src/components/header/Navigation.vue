<template>
  <div id="nav" class="nav">
    <router-link to="/" class="nav__item nav__item--home">
      Home
    </router-link>
    <router-link to="/about" class="nav__item nav__item--login">
      Login
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped lang="scss">
@import "../../styles/variables";

.nav {
  display: flex;

  @media (max-width: 380px) {
    position: absolute;
    top: 15px;
    right: 40px;
    flex-direction: column;
    background: $-c-main-blue;
    padding: 5px;
    border: 1px solid $-c-main-yellow;
    border-radius: 4px;
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    width: 85px;
    border-radius: 4px;
    border: 4px solid transparent;

  &--home {
     width: 130px;

    @media (max-width: 960px) {
      width: 100px;
    }
    @media (max-width: 380px) {
      margin-bottom: 10px;
      width: 85px;
    }

   }

  &--login {
    width: 190px;
    height: 60px;
    color: inherit;
    background: #ffbf2b;

    @media (max-width: 960px) {
      width: 140px;
      height: 43px;
    }

    @media (max-width: 380px) {
      width: 60px;
      height: 30px;
      align-self: center;
    }

  &.router-link-exact-active {
     color: inherit;
     border: 4px solid #ffbf2b;
     background: transparent;

    @media (max-width: 960px) {
      border: 3px solid #ffbf2b;
    }

    @media (max-width: 380px) {
      border: 2px solid #ffbf2b;
    }
  }
}
}
}
</style>
