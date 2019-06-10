<template>
  <div id="partner">
    <h2>
      <span>合作伙伴</span>
    </h2>
    <ul id="partner-list">
      <li class="partner-item" v-for="i in brand" :key="i">
        <img :src="i['logo']" />
        <span>{{ i['name'] }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "partner",
  data() {
    return {
      brand: [
        {
          name: '谷歌',
          logo: 'http://images.boyuansports.com/brand_logo.svg'
        },
        {
          name: '谷歌',
          logo: 'http://images.boyuansports.com/brand_logo.svg'
        },
        {
          name: '谷歌',
          logo: 'http://images.boyuansports.com/brand_logo.svg'
        },
        {
          name: '谷歌',
          logo: 'http://images.boyuansports.com/brand_logo.svg'
        },
        {
          name: '谷歌',
          logo: 'http://images.boyuansports.com/brand_logo.svg'
        },
        {
          name: '谷歌',
          logo: 'http://images.boyuansports.com/brand_logo.svg'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
#partner {
  text-align: center;
  padding: 60px 60px 0 60px;

  h2 {
    margin-top: 5%;
    text-align: center;
    font-size: 3rem;
    line-height: 100px;
    letter-spacing: 1.5rem;

    span:first-child {
      color: #f6ce00;
    }

    span:last-child {
      color: #25c179;
    }
  }

  #partner-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-shrink: 0;
    list-style: none;

    .partner-item {
      padding: 10px;
      margin: 10px;
      flex-grow: 1;
      width: 200px;
      height: 64px;

      img {
        height: 100%;
        width: 100%;
        display: block;
      }

      span {
        color: gray;
      }
    }
  }
}
</style>
