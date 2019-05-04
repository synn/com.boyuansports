<template>
  <transition name="navbar">
    <div id="navbar" @mouseover="mouseTip = true" @mouseleave="mouseTip = false">
      <div id="logo">
        <img src="http://images.boyuansports.com/logoCW.svg">
      </div>
      <div id="spacing"></div>
      <ul>
        <li @click="contactClick(0)">
          <router-link :to="{ name: 'home', params: { goto: 'top' }}">
            <span v-if="mouseTip">首页</span>
            <font-awesome-icon :icon="['fas', 'home']" size="lg" v-else/>
          </router-link>
        </li>
        <li>
          <a target="_blank" href="https://weibo.com/u/7009100292">
            <span v-if="mouseTip">微博</span>
            <font-awesome-icon :icon="['fab', 'weibo']" size="lg" v-else/>
          </a>
        </li>
        <li @click="contactClick(5)">
          <router-link :to="{ name: 'home', params: { goto: 'contact' }}">
            <span v-if="mouseTip">联系</span>
            <font-awesome-icon :icon="['fas', 'comments']" size="lg" v-else/>
          </router-link>
        </li>
        <li>
          <router-link to="local">
            <span v-if="mouseTip">位置</span>
            <font-awesome-icon :icon="['fas', 'map-marked-alt']" size="lg" v-else/>
          </router-link>
        </li>
        <li>
          <router-link to="about">
            <span v-if="mouseTip">关于</span>
            <font-awesome-icon :icon="['fas', 'seedling']" size="lg" v-else/>
          </router-link>
        </li>
      </ul>
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
  color: white;
  height: 60px;
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

  #spacing {
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
      min-width: 50px;
      flex-grow: 1;
      text-align: center;

      a {
        text-decoration: none;
        color: white;
        line-height: 60px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
