<template>
  <div id="royal">
    <swiper
      class="swiper-container"
      :options="swiperOption"
      ref="awardSwiper"
    >
      <swiper-slide class="swiper-slide" v-for="(i, index) in swiperSlide" :key="index">
        <img :src="i">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'royal',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperSlide: [
        'http://images.boyuansports.com/award.jpg',
        'http://images.boyuansports.com/award.jpg',
        'http://images.boyuansports.com/award.jpg',
        'http://images.boyuansports.com/award.jpg',
        'http://images.boyuansports.com/award.jpg'
      ],
      swiperOption: {
        loop: true,
        clickable: true,
        autoplay: true,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'

        },
        mousewheel: {
          eventsTarged: '.swiper-container'
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.awardSwiper.swiper;
    }
  }
};
</script>

<style lang="less" scoped>
#royal {
  display: flex;
  color: white;
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

    .swiper-pagination {
      top: auto;
      bottom: 0;
    }
  }
  

}
</style>
