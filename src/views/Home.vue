<template>
  <div>
    <Header></Header>
    <info :screen="screen"></info>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import Info from '@/components/info/Info.vue';

export default {
  components: {
    Info,
    Header,
  },

  data() {
    return {
      screen: '',
    };
  },

  mounted() {
    this.screen = 'home';
  },
};
</script>
