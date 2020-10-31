<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/home">
        <van-icon name="location-o" size="36" />
      </van-tabbar-item>
      <van-tabbar-item replace to="/found">
        <van-icon name="eye-o" size="36" />
      </van-tabbar-item>
      <van-tabbar-item replace to="/user">
        <van-icon name="user-circle-o" size="36" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      active: 0
    };
  },
};
</script>

<style>
</style>
