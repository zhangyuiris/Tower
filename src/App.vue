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

a {
  text-decoration: none;
  color: #515151;
  margin: 0 4px;
}

a:hover {
  color: #303030;
}

.btn {
  display: inline-block;
  border: 2px solid #515151;
  font-size: 20px;
  padding: 10px 16px;
  margin: 10px;
  border-radius: 30px;
}

#app {
  display: flex;
  justify-content: center;
  vertical-align: middle;
  padding-top: 60px
}

</style>
