<template>
  <transition name="navbar">
    <div id="navbar" @mouseover="mouseTip = true" @mouseleave="mouseTip = false">
      <div id="logo">
        <img src="./static/logoCW.svg">
      </div>
      <div id="spacing"></div>
      <ul>
        <router-link to="/">
          <li>
            <span v-if="mouseTip">首页</span>
            <font-awesome-icon :icon="['fas', 'home']" size="lg" v-else/>
          </li>
        </router-link>
        <router-link to="/news">
          <li>
            <span v-if="mouseTip">新闻</span>
            <font-awesome-icon :icon="['fas', 'feather']" size="lg" v-else/>
          </li>
        </router-link>
        <router-link to="/contact">
          <li>
            <span v-if="mouseTip">联系</span>
            <font-awesome-icon :icon="['fas', 'comments']" size="lg" v-else/>
          </li>
        </router-link>
        <router-link to="/about">
          <li>
            <span v-if="mouseTip">关于</span>
            <font-awesome-icon :icon="['fas', 'seedling']" size="lg" v-else/>
          </li>
        </router-link>
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

    &:hover {
      cursor: pointer;
    }

    a {
      flex-grow: 1;
      color: white;
      text-decoration: none;

      li {
        min-width: 60px;
        text-align: center;
        line-height: 60px;
        align-items: center;
      }
    }
  }
}
</style>
