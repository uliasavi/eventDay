<template>
  <div id="app">
      <headerY/>
      <router-view></router-view>
      <footers/>
  </div>
</template>

<script>
import headerY from './components/headerY.vue'
import footers from './components/footers.vue'
export default {
  name: 'App',
  components: {
    headerY,
    footers
  }

}
</script>

<style>
body{
  min-width: 100%;
  min-height: 100%;
  margin: 0;
}
#app{
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
