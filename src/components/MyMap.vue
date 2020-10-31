<template>
  <div class="container">
    <div id="map-container"></div>
    <div class="over-lay">
      <button type="button" class="mui-btn" @click="getPhotos">默认</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMap',
  mounted() {
    this.$AMapLoader
      .load({
        key: '5d8a8dd1fcc6c74b4f7217e311e046c0', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Geolocation'] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        // AMapUI: {
        //   // 是否加载 AMapUI，缺省不加载
        //   version: '1.1', // AMapUI 缺省 1.1
        //   plugins: [] // 需要加载的 AMapUI ui插件
        // },
        // Loca: {
        //   // 是否加载 Loca， 缺省不加载
        //   version: '1.3.2' // Loca 版本，缺省 1.3.2
        // }
      })
      .then((AMap) => {
        const mapOptions = {
          zoom: 12
        };
        const circleMarkerOption = {
          center: [112.98, 28.19],
          radius: 30
        };
        const map = new AMap.Map('map-container', mapOptions);
        const circle = new AMap.CircleMarker(circleMarkerOption);
        map.add(circle);
        console.log(map.getCenter());
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    getPhotos() {
      this.$plusExtends(() => {
        var cmr = plus.camera.getCamera();
        cmr.captureImage((path) => {
          alert(path);
        });
      });
    }
  }
};
</script>

<style scoped>
.container,
#map-container {
  width: 100vw;
  height: 100vh;
}
.container {
  position: relative;
}
.over-lay {
  position: absolute;
  bottom: 100px;
  width: 100vw;
  height: 400px;
  background-color: #eee;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
}
</style>
