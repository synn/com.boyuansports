<template>
  <div id="home">
    <HomeSwiper id="home-swiper" @swiperTop="navHidden($event)"/>
  </div>
</template>

<script>
import HomeSwiper from "../components/HomeSwiper.vue";

export default {
  name: "home",
  methods: {
    navHidden: function(asd) {
      alert(asd);
    }
  },
  components: {
    HomeSwiper
  }
};
</script>

<style lang="less" scoped>
#home-swiper {
  display: flex;
}
</style>
