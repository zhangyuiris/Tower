<template>
  <div>
    <div style="display:none">
      <img ref="hero" src="../assets/imgs/hero.png" />
      <img ref="monster" src="../assets/imgs/monster.png" />
      <img ref="attackR" src="../assets/imgs/attack-right.png" />
      <img ref="attackU" src="../assets/imgs/attack-up.png" />
    </div>
    <div class="intro">
      <h3>玩法</h3>
      <span>w、a、s、d控制方向，空格攻击</span>
    </div>
    <div class="container">
      <div class="side">
        <h4>英雄属性</h4>
        <p>血量：{{heroProperty.blood}}</p>
        <p>攻击：{{heroProperty.attack}}</p>
        <p>防御：{{heroProperty.defence}}</p>
      </div>
      <div class="ground">
        <canvas ref="canvas" height="440px" width="670px"></canvas>
      </div>
      <div class="side">
        <h4>怪物属性</h4>
        <p>血量：{{monsterProperty.blood}}</p>
        <p>攻击：{{monsterProperty.attack}}</p>
        <p>防御：{{monsterProperty.defence}}</p>
      </div>
    </div>
    <div class="intro">
      <h4 @click="github">GITHUB</h4>
    </div>
  </div>
</template>

<script>
import Hero from '../assets/js/model/Hero'
import Monster from '../assets/js/model/Monster'

const feet = 74; // 一个格子 74 px
export default {
  name: 'Box',
  data() {
    return {
      hero: undefined,
      monster: undefined,
      heroLastMove: 'right'
    };
  },
  created() {
    this.hero = new Hero()
    this.monster = new Monster()
  },
  mounted() {
    document.onkeyup = (e) => {
      switch (e.code) {
        case 'KeyA':
          this.left();
          break
        case 'KeyD':
          this.right();
          break
        case 'KeyW':
          this.up();
          break
        case 'KeyS':
          this.down();
          break
        case 'Space':
          this.attack()
          break
        default:
          break
      }
    }
    const context = this.$refs.canvas.getContext('2d');
    const { hero, monster } = this.$refs;
    hero.onload = () => {
      context.drawImage(hero, this.heroPos.x * feet, this.heroPos.y * feet, feet, feet);
    };
    monster.onload = () => {
      context.drawImage(monster, this.monsterPos.x * feet, this.monsterPos.y * feet, feet, feet);
    };
  },
  computed: {
    heroPos() {
      return this.hero.pos
    },
    heroProperty() {
      return this.hero.property
    },
    monsterPos() {
      return this.monster.pos
    },
    monsterProperty() {
      return this.monster.property
    }
  },
  methods: {
    drawRound() {
      const context = this.$refs.canvas.getContext('2d');
      context.clearRect(0, 0, 670, 440);
      const { hero, monster } = this.$refs;
      context.drawImage(hero, this.heroPos.x * feet, this.heroPos.y * feet, feet, feet);
      context.drawImage(monster, this.monsterPos.x * feet, this.monsterPos.y * feet, feet, feet);
    },
    drawAttack() {
      const context = this.$refs.canvas.getContext('2d');
      const { attackR, attackU } = this.$refs;
      const direct = this.hero.direction
      switch (direct) {
        case 'left':
          context.drawImage(
            attackR,
            (this.heroPos.x - 1) * feet,
            this.heroPos.y * feet,
            feet,
            feet
          );
          break
        case 'right':
          context.drawImage(
            attackR,
            (this.heroPos.x + 1) * feet,
            this.heroPos.y * feet,
            feet,
            feet
          );
          break
        case 'up':
          context.drawImage(
            attackU,
            this.heroPos.x * feet,
            (this.heroPos.y - 1) * feet,
            feet,
            feet
          );
          break
        case 'down':
          context.drawImage(
            attackU,
            this.heroPos.x * feet,
            (this.heroPos.y + 1) * feet,
            feet,
            feet
          );
          break
        default:
          break
      }
      setTimeout(() => {
        this.drawRound()
      }, 100)
    },
    left() {
      this.hero.left()
      this.drawRound()
    },
    right() {
      this.hero.right()
      this.drawRound()
    },
    up() {
      this.hero.up()
      this.drawRound()
    },
    down() {
      this.hero.down()
      this.drawRound()
    },
    attack() {
      this.drawAttack()
    },
    github() {
      window.location.href = 'https://github.com/zhangyuiris/Tower'
    }
  }
};
</script>

<style lang="stylus">
.container
  display flex
  .side
    padding 50px 30px
  .ground
    width 690px
    height 504px
    padding-left 20px
    padding-top 16px
    background url("../assets/imgs/ground.png") no-repeat 0 0
    background-size contain
.intro
  display flex
  justify-content center
  flex-direction column
  text-align center
</style>
