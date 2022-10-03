<template>
  <NavigationBar />
  <ChooseCreateOrConnect />
  <ClipBoard v-show="visible"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavigationBar from './components/NavigationBar.vue';
import ChooseCreateOrConnect from './components/ChooseCreateOrConnect.vue';
import ClipBoard from './components/ClipBoard.vue';

@Options({
  components: {
    NavigationBar,
    ChooseCreateOrConnect,
    ClipBoard
  },
})
export default class App extends Vue {}
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
