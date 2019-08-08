<template>
  <div id="app">
    <Box/>
  </div>
</template>

<script>
import Box from './components/Box.vue';

export default {
  name: 'app',
  components: {
    Box
  }
};
</script>

<style>
* {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body {
  padding: 0;
  margin: 0;
  background-color: #9ac4bd;
  transition: background-color 2s;
}

#app {
  display: flex;
  justify-content: center;
  vertical-align: middle;
  padding-top: 60px
}

</style>
