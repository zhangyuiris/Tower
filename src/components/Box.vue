<template>
  <div class="container">
    <div style="display:none">
      <img ref="hero" src="../assets/imgs/hero.png" />
      <img ref="monster" src="../assets/imgs/monster.png" />
    </div>
    <div class="ground">
      <canvas ref="canvas" height="440px" width="670px"></canvas>
    </div>
  </div>
</template>

<script>
const feet = 74; // 一个格子 74 px
export default {
  name: 'Box',
  data() {
    return {};
  },
  computed: {},
  mounted() {
    const context = this.$refs.canvas.getContext('2d');
    const { hero, monster } = this.$refs;
    hero.onload = () => {
      const position = {
        x: 0,
        y: 0,
        width: feet,
        height: feet
      };
      context.drawImage(hero, position.x, position.y, position.width, position.height);
    };
    monster.onload = () => {
      const position = {
        x: feet * 3,
        y: feet * 3,
        width: feet,
        height: feet
      };
      context.drawImage(monster, position.x, position.y, position.width, position.height);
    };
  }
};
</script>

<style scoped>
.ground {
  width: 690px;
  height: 504px;
  padding-left: 20px;
  padding-top: 16px;
  background: url("../assets/imgs/ground.png") no-repeat 0 0;
  background-size: contain;
}
</style>
