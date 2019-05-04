<template>
  <div id="home">
    <swiper
      class="swiper-container"
      :options="swiperOption"
      @transitionEnd="swiperState"
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
          <div id="contact-frame">
            <div v-for="i in QR" :key="i.name" @mouseover="i.show=true" @mouseleave="i.show=false">
              <img class="icon-item" :src="i.icon" v-show="!i.show">
              <img class="icon-item-code" :src="i.code" v-show="i.show">
            </div>
          </div>
          <div id="code-show"></div>
        </div>
        <p>
          <font-awesome-icon :icon="['fas', 'phone']" size="lg"/>
          <span>&nbsp;0319-5991000</span>
        </p>
        <p>
          <font-awesome-icon :icon="['fas', 'envelope-open-text']" size="lg"/>
          <span>&nbsp;new@boyuansports.com</span>
        </p>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div id="goto-top" @click="switchSlide(0)" v-show="topIcon">
      <font-awesome-icon :icon="['fas', 'angle-double-up']" size="lg"/>
    </div>
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
      QR: [
        {
          name: "qq",
          show: false,
          icon: "http://images.boyuansports.com/qq_icon.svg",
          code: "http://images.boyuansports.com/qq_code.svg"
        },
        {
          name: "wechat",
          show: false,
          icon: "http://images.boyuansports.com/wechat_icon.svg",
          code: "http://images.boyuansports.com/wechat_code.svg"
        },
        {
          name: "weibo",
          show: false,
          icon: "http://images.boyuansports.com/weibo_icon.svg",
          code: "http://images.boyuansports.com/weibo_code.svg"
        }
      ],
      topIcon: false,
      swiperSlide: [
        {
          title: "专业",
          eng: "Professional",
          image: "http://images.boyuansports.com/pages-01.jpg",
          detail:
            "那时我们有梦， 关于文学， 关于爱情， 关于穿越世界的旅行。 如今我们深夜饮酒， 杯子碰到一起， 都是梦破碎的声音。"
        },
        {
          title: "专业",
          eng: "Professional",
          image: "http://images.boyuansports.com/pages-02.jpg",
          detail:
            "那时我们有梦， 关于文学， 关于爱情， 关于穿越世界的旅行。 如今我们深夜饮酒， 杯子碰到一起， 都是梦破碎的声音。"
        },
        {
          title: "专业",
          eng: "Professional",
          image: "http://images.boyuansports.com/pages-03.jpg",
          detail:
            "那时我们有梦， 关于文学， 关于爱情， 关于穿越世界的旅行。 如今我们深夜饮酒， 杯子碰到一起， 都是梦破碎的声音。"
        },
        {
          title: "专业",
          eng: "Professional",
          image: "http://images.boyuansports.com/pages-04.jpg",
          detail:
            "那时我们有梦， 关于文学， 关于爱情， 关于穿越世界的旅行。 如今我们深夜饮酒， 杯子碰到一起， 都是梦破碎的声音。"
        },
        {
          title: "专业",
          eng: "Professional",
          image: "http://images.boyuansports.com/pages-05.jpg",
          detail:
            "那时我们有梦， 关于文学， 关于爱情， 关于穿越世界的旅行。 如今我们深夜饮酒， 杯子碰到一起， 都是梦破碎的声音。"
        }
      ],
      swiperOption: {
        direction: "vertical",
        loop: false,
        clickable: true,
        // effect: "fade",
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
    swiperState() {
      this.$emit("swiperTop", this.swiper.activeIndex != 5 ? true : false);
      this.swiper.activeIndex != 0
        ? (this.topIcon = true)
        : (this.topIcon = false);
    },
    pageLoaded() {
      let goto = this.$route.params.goto;
      if (goto == "top") {
        this.swiper.slideTo(0, 1000, false);
      } else if (goto == "contact") {
        this.swiper.slideTo(5, 1000, false);
      }
    },
    switchSlide(n) {
      this.swiper.slideTo(n, 1000, false);
    }
  },
  mounted() {
    this.pageLoaded();
  },
  computed: {
    swiper() {
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

        // #logo-show {
        //   justify-content: center;
        //   flex-grow: 1;
        //   text-align: center;

        //   img {
        //     width: 300px;
        //     padding: 10px;
        //   }
        // }

        #contact-frame {
          display: flex;
          justify-content: center;
          flex-grow: 1;
          text-align: center;
          flex-direction: row;
          align-items: center;
          min-width: 300px;

          div {
            position: relative;
            img {
              width: 80px;
              padding: 10px;
            }

            .icon-item-code {
              width: 150px;
              height: 150px;
            }
          }
        }
      }

      p {
        text-shadow: none;
        font-weight: bold;
        width: 100%;
        text-align: center;
        margin-top: 10px;

        svg {
          color: #25c179;
        }

        span {
          color: #aaa;
        }
      }
    }
  }

  #goto-top {
    position: fixed;
    right: 20px;
    bottom: 50px;
    z-index: 10;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    background: black;
    opacity: 0.5;
    color: white;

    :hover {
      cursor: pointer;
    }
  }
}
</style>
