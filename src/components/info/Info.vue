<template>
  <section class="info">
    <div class="info__background">
      <div class="container container--info">
        <div class="info__wrapper" v-if="screen === 'home'">
          <div class="info__company">
            <img src="@/images/main-logo.svg" alt="Tezos" class="info__img">
            <h1 class="info__heading">
              Tezos Ukraine
            </h1>
            <h3 class="info__slogan">
              Front-end development
              test assignment
            </h3>
          </div>
          <Data></Data>
        </div>
        <Login v-else></Login>
      </div>
    </div>
  </section>
</template>

<script>
import Data from '@/components/info/Data.vue';
import Login from '@/components/info/Login.vue';

export default {
  name: 'Info',
  components: {
    Login,
    Data,
  },

  props: {
    screen: String,
  },
};
</script>

<style scoped lang="scss">
  .info {
    background: center url("../../images/tezosbg.png");

    &__background {
      height: 100%;
      background: #2c7df7aa;
      padding: 157px 0;

      @media (max-width: 980px) {
        padding: 60px 0;
      }
    }

    &__img  {
      width: 116px;
      height: 131px;
      margin-bottom: 20px;

      @media (max-width: 980px) {
        display: none;
      }
    }

    &__company {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: #fff;

      @media (max-width: 1245px) {
        margin-bottom: 50px;
        align-items: center;
      }
    }

    &__heading {
      font-size: 54px;
      font-weight: 700;
      margin-bottom: 20px;

      @media (max-width: 395px) {
        font-size: 36px;
      }
    }

    &__slogan {
      width: 393px;
      text-align: left;
      font-size: 32px;
      font-weight: 600;

      @media (max-width: 1245px) {
        text-align: center;
      }

      @media (max-width: 395px) {
        width: 206px;
        font-size: 18px;
      }
    }

    &__wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;

      @media (max-width: 1245px) {
        flex-direction: column;
        align-items: center;
      }
    }
  }
</style>
