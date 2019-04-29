<template>
  <div id="local">
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'" :zoom="zoom" :center="marker">
        <el-amap-marker :position="marker"></el-amap-marker>
      </el-amap>
    </div>
  </div>
</template>

<script>
export default {
  name: "local",
  data() {
    return {
      zoom: 16,
      marker: [114.511214, 37.056075]
    };
  }
};
</script>

<style lang="less" scoped>
.amap-wrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100vh;
}
</style>
