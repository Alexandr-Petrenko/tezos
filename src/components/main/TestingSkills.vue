<template>
  <div class="main__wrapper main__wrapper--testing">
    <div class="main__wrapper main__wrapper--testing" v-if="width > 980">
      <h2 class="main__heading">
        Testing skills
      </h2>
      <div class="main__item">
        <img
          src="../../images/check.png"
          alt="Check"
          class="main__check"
        >
        <span class="main__text">
            Applying HTML, CSS/SASS. Markup implementation.
          </span>
        <div class="help__wrapper">
          <div class="main__round main__round--top-left">
            HTML, CSS/SASS
          </div>
          <div class="main__round main__round--top-right">
            HTTP/REST
          </div>
        </div>
        <img
          src="../../images/check.png"
          alt="Check"
          class="main__check"
        >
        <span class="main__text">
            Working with asynchronous code, HTTP and the REST architecture
          </span>
      </div>
      <div class="main__item">
        <img
          src="../../images/check.png"
          alt="Check"
          class="main__check"
        >
        <span class="main__text">
          Using one of the modern front-end frameworks either Vue or React.
          Vue is preferable but React is also viable.
          </span>
        <div class="help__wrapper">
          <div class="main__round main__round--bottom-left">
            Vue/React
          </div>
          <div class="main__round main__round--bottom-right">
            JS
          </div>
        </div>
        <img
          src="../../images/check.png"
          alt="Check"
          class="main__check"
        >
        <span class="main__text">
            Applying JS. Transforming and organising data. Interactions.
          </span>
      </div>
    </div>
    <div class="main__wrapper main__wrapper--testing" v-else>
      <div class="main__item">
        <h2 class="main__heading">
          Testing skills
        </h2>
        <div class="main__one">
          <img
            src="../../images/check.png"
            alt="Check"
            class="main__check"
          >
          <span class="main__text">
            Applying HTML, CSS/SASS. Markup implementation.
          </span>
        </div>
        <div class="main__one">
          <img
            src="../../images/check.png"
            alt="Check"
            class="main__check"
          >
          <span class="main__text">
            Applying JS. Transforming and organising data. Interactions.
          </span>
        </div>
        <div class="main__one">
          <img
            src="../../images/check.png"
            alt="Check"
            class="main__check"
          >
          <span class="main__text">
            Working with asynchronous code, HTTP and the REST architecture
          </span>
        </div>
        <div class="main__one">
          <img
            src="../../images/check.png"
            alt="Check"
            class="main__check"
          >
          <span class="main__text">
            Using one of the modern front-end frameworks either Vue or React.
            Vue is preferable but React is also viable.
          </span>
        </div>
      </div>
      <div class="help__wrapper">
        <div class="main__round main__round--top-left">
          HTML, CSS/SASS
        </div>
        <div class="main__round main__round--top-right">
          HTTP/REST
        </div>
        <div class="main__round main__round--bottom-left">
          JS
        </div>
        <div class="main__round main__round--bottom-right">
          Vue/React
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestingSkills',

  data() {
    return {
      width: window.innerWidth,
    };
  },

  props: {
    screen: String,
  },

  methods: {
    updateWidth() {
      this.width = window.innerWidth;
    },
  },

  mounted() {
    window.addEventListener('resize', this.updateWidth);
  },

  destroyed() {
    window.removeEventListener('resize', this.updateWidth);
  },
};
</script>

<style lang="scss">
@import "../../styles/variables.scss";

.main {
  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 100px;

    @media (max-width: 980px) {
      flex-direction: row;
      justify-content: space-between;
    }

    @media (max-width: 785px) {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    @media (max-width: 980px) {
      flex-direction: column;
      justify-content: center;
    }
  }

  &__check {
    width: 29px;
    height: 29px;
  }

  &__round {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 209px;
    margin-right: 20px;
    background-color: $-c-main-blue;
    color: #fff;
    font-weight: bold;

    @media (max-width: 785px) {
      width: 100px;
      height: 100px;
      margin-right: 10px;
    }

    &--top-left {
      border-top-left-radius: 100%;
      align-items: flex-end;
      padding-bottom: 65px;
      margin-bottom: 20px;

      @media (max-width: 785px) {
        padding-bottom: 20px;
        margin-bottom: 10px;
      }
    }

    &--top-right {
      border-top-right-radius: 100%;
      align-items: flex-end;
      padding-bottom: 65px;
      margin-right: 0;
      margin-bottom: 20px;

      @media (max-width: 785px) {
        padding-bottom: 20px;
        margin-bottom: 10px;
      }
    }

    &--bottom-left {
      border-bottom-left-radius: 100%;
      align-items: flex-start;
      padding-top: 65px;

      @media (max-width: 785px) {
        padding-top: 20px;
      }
    }

    &--bottom-right {
      border-bottom-right-radius: 100%;
      align-items: flex-start;
      padding-top: 65px;
      margin-right: 0;

      @media (max-width: 785px) {
        padding-top: 20px;
      }
    }
  }

  &__one {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 30px;
  }
}

.help__wrapper {
  display: flex;

  @media (max-width: 980px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  @media (max-width: 785px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin-bottom: 30px;
  }

  @media (max-width: 544px) {
    width: 60%;
  }

  @media (max-width: 370px) {
    width: 80%;
  }

}
</style>
