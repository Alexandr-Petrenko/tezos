<template>
  <main class="main">
    <div class="container container--main">
      <TestingSkills :screen="screen"></TestingSkills>
      <general></general>
      <team></team>
    </div>
  </main>
</template>

<script>
import TestingSkills from '@/components/main/TestingSkills.vue';
import General from '@/components/main/General.vue';
import Team from '@/components/main/Team.vue';

export default {
  name: 'Main',
  components: {
    Team,
    General,
    TestingSkills,
  },
  props: {
    screen: String,
  },
};
</script>

<style lang="scss">
  .main {
    padding: 95px 5px;
    background: #f7fbff;

    @media (max-width: 980px) {
      padding: 50px 5px;
    }

    @media (max-width: 380px) {
      padding: 20px 5px;
    }

    &__img {
      width: 100%;
      max-width: 605px;
      height: 411px;
    }

    &__text {
      width: 306px;
      margin-left: 10px;

      @media (max-width: 785px) {
        text-align: start;
      }

      @media (max-width: 370px) {
        width: 250px;
        font-size: 14px;
      }
    }

    &__heading {
      align-self: flex-start;
      font-weight: normal;

      @media (max-width: 980px) {
        margin-bottom: 45px;
      }

      @media (max-width: 785px) {
        width: 100%;
        text-align: center;
      }
    }
  }
</style>
