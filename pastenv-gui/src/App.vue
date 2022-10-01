<template>
  <NavigationBar />
  <ChooseComponent />
  <ClipBoard v-show="visible"/>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import ClipBoard from "./components/ClipBoard.vue";
import ChooseComponent from "./components/ChooseComponent.vue";

export default {
  name: "PastenvGui",
  components: {
    ClipBoard,
    NavigationBar,
    ChooseComponent
  },
  data() {
    return {
      visible: true
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
