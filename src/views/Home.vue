<template>
  <div>
    <Header></Header>
    <info :screen="screen"></info>
    <Main :screen="screen"></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import Info from '@/components/info/Info.vue';
import Main from '@/components/main/Main.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
  components: {
    Footer,
    Main,
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
