<template>
  <footer class="footer">
    <Header></Header>
    <div class="container container--footer">
      <div class="footer__wrapper">
        <a href="" class="footer__link">Testing skills</a>
        <a href="" class="footer__link">General description of the assignment</a>
        <a href="" class="footer__link">Our team</a>
      </div>
      <div class="footer__wrapper">
        <a href="" class="footer__link">About us</a>
        <a href="" class="footer__link">Carrier</a>
        <a href="" class="footer__link">Blog</a>
      </div>
      <div class="footer__wrapper">
        <address class="footer__rights">&copy; Copyright</address>
      </div>
    </div>
  </footer>
</template>

<script>
import Header from '@/components/header/Header.vue';

export default {
  name: 'Footer',
  components: {
    Header,
  },
};
</script>

<style scoped lang="scss">
  @import "../../styles/variables.scss";

  .footer {
    background: $-c-main-blue;
    color: #fff;
    padding: 5px;

    &__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    &__link {
      display: block;
      width: 100%;
      margin-bottom: 20px;
      text-align: left;

      @media (max-width: 599px) {
        text-align: center;
      }
    }
  }
</style>
