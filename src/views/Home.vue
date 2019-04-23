<template>
  <div id="home">
    <swiper
      class="swiper-container"
      @slideChangeTransitionStart="swiperState"
      :options="swiperOption"
      ref="homeSwiper"
    >
      <swiper-slide class="swiper-slide" v-for="(item,index) in swiperSlide" :key="index">
        <img :src="item.image">
        <div id="intro-block">
          <h2>{{ item.title }}</h2>
          <p id="enword">- {{ item.eng }} -</p>
          <p id="detail">{{ item.detail }}</p>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide-contact">
        <div id="contact-frame">
          <div id="logo-show">
            <img src="../components/static/logoCC.svg">
          </div>
          <div id="contact-show">
            <img src="../components/static/qq.svg">
            <img class src="../components/static/qq_code.svg" v-show="true">
            <img src="../components/static/wechat.svg">
            <img class src="../components/static/qq_code.svg" v-show="true">
            <img src="../components/static/weibo.svg">
            <img class src="../components/static/qq_code.svg" v-show="true">
          </div>
        </div>
        <p>
          <font-awesome-icon :icon="['fas', 'phone']" size="lg"/>&nbsp;18518769253
        </p>
        <p>
          <font-awesome-icon :icon="['fas', 'envelope-open-text']" size="lg"/>&nbsp;i@synn.me
        </p>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "home",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperSlide: [
        {
          title: "专业",
          eng: "Professional",
          image: "http://ppqmgxfzn.bkt.clouddn.com/pages-01.jpg",
          detail:
            "那时我们有梦， 关于文学， 关于爱情， 关于穿越世界的旅行。 如今我们深夜饮酒， 杯子碰到一起， 都是梦破碎的声音。"
        },
        {
          title: "专业",
          eng: "Professional",
          image: "http://ppqmgxfzn.bkt.clouddn.com/pages-02.jpg",
          detail:
            "那时我们有梦， 关于文学， 关于爱情， 关于穿越世界的旅行。 如今我们深夜饮酒， 杯子碰到一起， 都是梦破碎的声音。"
        },
        {
          title: "专业",
          eng: "Professional",
          image: "http://ppqmgxfzn.bkt.clouddn.com/pages-03.jpg",
          detail:
            "那时我们有梦， 关于文学， 关于爱情， 关于穿越世界的旅行。 如今我们深夜饮酒， 杯子碰到一起， 都是梦破碎的声音。"
        },
        {
          title: "专业",
          eng: "Professional",
          image: "http://ppqmgxfzn.bkt.clouddn.com/pages-04.jpg",
          detail:
            "那时我们有梦， 关于文学， 关于爱情， 关于穿越世界的旅行。 如今我们深夜饮酒， 杯子碰到一起， 都是梦破碎的声音。"
        },
        {
          title: "专业",
          eng: "Professional",
          image: "http://ppqmgxfzn.bkt.clouddn.com/pages-05.jpg",
          detail:
            "那时我们有梦， 关于文学， 关于爱情， 关于穿越世界的旅行。 如今我们深夜饮酒， 杯子碰到一起， 都是梦破碎的声音。"
        }
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
        }
      }
    };
  },
  methods: {
    swiperState: function() {
      this.$emit("swiperTop", this.swiper.activeIndex != 5 ? true : false);
    }
  },
  computed: {
    swiper: function() {
      return this.$refs.homeSwiper.swiper;
    }
  }
};
</script>

<style lang="less" scoped>
#home {
  display: flex;
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;

  .swiper-container {
    width: 100%;
    height: 100%;

    .swiper-slide {
      text-shadow: 0 2px 5px black;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      #intro-block {
        position: absolute;
        bottom: 100px;
        width: 100%;
        padding: 0 25%;

        h2 {
          width: 100%;
          font-size: 3rem;
          text-align: center;
        }

        #enword {
        }

        #detail {
          margin-top: 10px;
          font-weight: 600;
        }

        p {
          text-align: center;
        }
      }
    }

    .swiper-slide-contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      #contact-frame {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: row;
        width: 100%;
        padding: 0 20%;
        margin-bottom: 60px;

        @media screen and (max-width: 600px) {
          padding: 0;
        }

        #logo-show {
          justify-content: center;
          flex-grow: 1;
          text-align: center;

          img {
            width: 300px;
            padding: 10px;
          }
        }

        #contact-show {
          display: flex;
          justify-content: center;
          flex-grow: 1;
          text-align: center;
          flex-direction: row;
          align-items: center;
          min-width: 300px;

          img {
            width: 60px;
            padding: 10px;
          }
        }
      }

      p {
        text-shadow: none;
        font-weight: bold;
        color: #25c179;
        width: 100%;
        text-align: center;
        margin-top: 10px;
      }
    }
  }
}
</style>
