<template>
  <section class="team">
    <div class="team__wrapper">
      <h2 class="main__heading team__heading">
        Our team
      </h2>
      <div class="main__img team__img"></div>
      <div class="main__text team__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Augue molestie pretium, dictum nunc ac pellentesque.
        Semper imperdiet elit, nec faucibus varius dui. Lorem non sed tincidunt pharetra tempor.
        Amet proin sapien consequat orci, mauris.Lorem ipsu elit.\amet, porttitor.
      </div>
    </div>
    <div class="team__wrapper">
      <h2 class="main__heading team__heading">
        Our team
      </h2>
      <div class="main__img team__img-second"></div>
      <div class="main__text team__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Augue molestie pretium, dictum nunc ac pellentesque.
        Semper imperdiet elit, nec faucibus varius dui. Lorem non sed tincidunt pharetra tempor.
        Amet proin sapien consequat orci, mauris.Lorem ipsu elit.\amet, porttitor.
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Team',
};
</script>

<style scoped lang="scss">
  .team {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 980px) {
      flex-direction: column;
      align-items: center;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      margin-right: 30px;
      max-width: 605px;

      @media (max-width: 980px) {
        margin-right: 0;
        margin-bottom: 50px;
      }
    }

    &__img {
      width: 100%;
      background: url('../../images/team1.png') no-repeat center;
      margin-bottom: 35px;

      @media (max-width: 980px) {
        margin-bottom: 15px;
      }

      &-second {
        width: 100%;
        background: url('../../images/team2.png') no-repeat center;
        margin-bottom: 35px;

        @media (max-width: 980px) {
          margin-bottom: 15px;
        }
      }
    }

    &__text {
      width: 100%;
      text-align: left;
    }

    &__heading {
      @media (max-width: 980px) {
        margin-bottom: 15px;
      }
    }
  }
</style>
