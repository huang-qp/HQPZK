<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body,#app{
  height: 100%;
  overflow-y: hidden;
}
*{
  margin: 0;
  padding: 0;
}
</style>
