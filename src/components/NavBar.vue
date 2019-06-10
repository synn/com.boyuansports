<template>
  <transition name="navbar">
    <div id="navbar" @mouseover="mouseTip = true" @mouseleave="mouseTip = false">
      <div id="navbar-warp">
        <div id="logo">
          <img src="http://images.boyuansports.com/logoCW.svg">
        </div>
        <div class="spacing"></div>
        <ul>
          <li>
            <font-awesome-icon class="menu-item" :icon="['fas', 'home']" size="lg"/>
            <div @click="contactClick(0)" v-if="mouseTip">
              <router-link :to="{ name: 'home', params: { goto: 'top' }}">
                <span>首页</span>
              </router-link>
            </div>
          </li>
          <li>
            <font-awesome-icon class="menu-item" :icon="['fab', 'weibo']" size="lg"/>
            <div v-if="mouseTip">
              <a target="_blank" href="https://weibo.com/u/7009100292" v-if="mouseTip">
                <span>微博</span>
              </a>
            </div>
          </li>
          <li>
            <font-awesome-icon class="menu-item" :icon="['fas', 'comments']" size="lg"/>
            <div @click="contactClick(5)" v-if="mouseTip">
              <router-link :to="{ name: 'home', params: { goto: 'contact' }}">
                <span>联系</span>
              </router-link>
            </div>
          </li>
          <li>
            <font-awesome-icon class="menu-item" :icon="['fas', 'map-marked-alt']" size="lg"/>
            <div v-if="mouseTip">
              <router-link to="local">
                <span>位置</span>
              </router-link>
            </div>
          </li>
          <li>
            <font-awesome-icon class="menu-item" :icon="['fas', 'seedling']" size="lg"/>
            <div v-if="mouseTip">
              <router-link to="partner">
                <span>合作伙伴</span>
              </router-link>
              <router-link to="royal">
                <span>企业荣誉</span>
              </router-link>
              <router-link to="about">
                <span>关于</span>
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      mouseTip: false
    };
  },
  methods: {
    contactClick: function(e) {
      this.$emit("gotoContact", e);
    }
  }
};
</script>

<style lang="less" scoped>
.navbar-enter-active,
.navbar-leave-active {
  transition: opacity 0.5s;
}
.navbar-enter,
.navbar-leave-to {
  opacity: 0;
}

#navbar {
  #navbar-warp {
    color: white;
    min-height: 60px;
    display: flex;
    flex-direction: row;
    background: rgba(0, 0, 0, 0.8);

    #logo {
      display: flex;
      flex-grow: 1;
      flex-shrink: 0;
      padding: 10px;
      align-items: center;

      img {
        height: 40px;
        flex-grow: 1;
      }
    }

    .spacing {
      display: flex;
      flex-grow: 5;
    }

    ul {
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      flex-shrink: 0;
      list-style: none;
      font-size: 0.8rem;

      li {
        width: 50px;
        flex-grow: 1;
        text-align: center;

        .menu-item {
          height: 60px;
        }

        div {

          a {
            display: block;
            text-align: center;
            width: 100%;
            text-decoration: none;
            color: white;
            line-height: 1.6rem;

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
