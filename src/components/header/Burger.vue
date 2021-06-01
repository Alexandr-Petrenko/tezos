<template>
  <div class="burger" @click="displayChangeHandler"></div>
</template>

<script>
export default {
  name: 'Burger',

  methods: {
    displayChangeHandler() {
      this.$emit('navDisplay');
    },
  },
};
</script>

<style scoped lang="scss">
.burger {
  position: relative;
  width: 22px;
  height: 4px;
  background: #ffbf2b;

  &::before {
     position: absolute;
     bottom: 7px;
     display: block;
     content: '';
     width: 22px;
     height: 4px;
     background: #ffbf2b;
  }

  &::after {
     position: absolute;
     top: 7px;
     display: block;
     content: '';
     width: 22px;
     height: 4px;
     background: #ffbf2b;
  }
}
</style>
