<template>
  <div id="app">
    <NavBar v-show="navShow" id="navbar" @gotoContact="changeSlide($event)"/>
    <router-view @swiperTop="navHidden($event)"/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "app",
  data() {
    return {
      navShow: true
    };
  },
  methods: {
    navHidden: function(e) {
      this.navShow = e;
    },
    changeSlide: function(e) {
      if (this.$children[1].swiper) {
        this.$children[1].swiper.slideTo(e, 1000, false);
      }
    }
  },
  components: {
    NavBar
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  #navbar {
    position: fixed;
    width: 100%;
    z-index: 10;
  }
}
</style>
