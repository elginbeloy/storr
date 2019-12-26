<template>
  <div id="app">
    <TopBar />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopBar from "./components/TopBar.vue";

@Component({
  components: {
    TopBar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
@import url("./assets/font/iconfont.css");

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  box-sizing: border-box;
}
</style>
