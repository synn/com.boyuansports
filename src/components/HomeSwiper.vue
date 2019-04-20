<template>
  <div id="home-swiper">
    <swiper class="swiper-container" :options="swiperOption" ref="homeSwiper">
      <swiper-slide class="swiper-slide" v-for="(item,index) in swiperSlide" :key="index">
        <img :src="item">
      </swiper-slide>
      <swiper-slide></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "home-swiper",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperSlide: [
        "http://ppqmgxfzn.bkt.clouddn.com/pages-01.jpg",
        "http://ppqmgxfzn.bkt.clouddn.com/pages-02.jpg",
        "http://ppqmgxfzn.bkt.clouddn.com/pages-03.jpg",
        "http://ppqmgxfzn.bkt.clouddn.com/pages-04.jpg",
        "http://ppqmgxfzn.bkt.clouddn.com/pages-05.jpg"
      ],
      swiperOption: {
        direction: "vertical",
        loop: false,
        clickable: true,
        // effect: 'fade',
        speed: 1000,
        pagination: {
          el: ".swiper-pagination"
          // dynamicBullets: true
        },
        mousewheel: {
          eventsTarged: ".swiper-container"
        },
        on: {
          slideChange: function() {
            // alert(this.activeIndex != 0 ? "q" : "w");
          }
        }
      }
    };
  },
  computed: {
    // swiper() {
    //     return this.$refs.mySwiper.swiper
    // }
  }
};
</script>

<style lang="less" scoped>
#home-swiper {
  color: red;
  position: absolute;
  width: 100%;
  height: 100%;

  .swiper-container {
    width: 100%;
    height: 100%;

    .swiper-slide {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
