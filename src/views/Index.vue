<template>
  <div id="index">
    <NavBar id="navbar"/>
    <HomeSwiper id="home-swiper"/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import HomeSwiper from '../components/HomeSwiper.vue'

export default {
  name: 'index',
  components: {
    NavBar, HomeSwiper
  }
}
</script>

<style lang="less" scoped>
    #navbar {
        position: fixed;
        width: 100%;
        z-index: 10;
    }

    #home-swiper {
        display: flex;
    }
</style>
