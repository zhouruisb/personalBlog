<template>
  <div style="height: 100%">
    <div id="cesiumContainer" style="height: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "cesiumDemo",
  data() {
    return {
      viewer: null,
    };
  },
  created() {},
  mounted() {
    this.Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5MjhkN2M4Mi1hMWNlLTRkN2ItOWUyOS1hNWIwNDZiYTBkNTIiLCJpZCI6MTIyNzQ5LCJpYXQiOjE2NzUwNzI0MDZ9.bpKmP72pZUkQOZTwNXJkz0SiaPeeYsuU0_0FMmtrbS0";

    this.viewer = new this.Cesium.Viewer("cesiumContainer");
  },
};
</script>

<style>
</style>
