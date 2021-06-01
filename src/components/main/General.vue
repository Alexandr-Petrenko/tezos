<template>
  <section class="general">
    <div class="general__info">
      <h2 class="main__heading general__heading">
        General description of the assignment
      </h2>
      <ul class="general__list">
        <li class="main__text general__list-item">
          <span class="general__number">01</span>
          Lorem ipsum dolor sit amet,
          consectetur
          dipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
        <li class="main__text general__list-item">
          <span class="general__number">02</span>
          Lorem ipsum dolor sit amet,
          consectetur
          dipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
        <li class="main__text general__list-item">
          <span class="general__number">03</span>
          Lorem ipsum dolor sit amet,
          consectetur
          dipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </li>
      </ul>
    </div>
    <div class="main__img general__img"></div>
  </section>
</template>

<script>
export default {
  name: 'General',
};
</script>

<style scoped lang="scss">
  @import "../../styles/variables.scss";

  .general {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 100px;
    align-items: center;

    @media (max-width: 980px) {
      flex-direction: column;
    }

    &__heading  {
      max-width: 385px;
      margin-bottom: 55px;
      text-align: left;

      @media (max-width: 980px) {
        text-align: center;
      }
    }

    &__list-item {
      display: flex;
      align-items: center;
      max-width: 447px;
      margin-bottom: 22px;
      padding-bottom: 16px;
      text-align: left;
      border-bottom: 1px solid #d5e4f1;

      @media (max-width: 980px) {
        text-align: center;
      }
    }

    &__number {
      margin-right: 16px;
      font-size: 28px;
      font-weight: bold;
      color: $-c-main-yellow;
    }

    &__img {
      background: url('../../images/general.png') no-repeat center;
    }
  }
</style>
