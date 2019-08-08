class Body {
  constructor() {
    this.x = 0 // 几个格子x  →变大
    this.y = 0 // 几个格子y  ↓变大

    this.attackVolumn = 0
    this.bloodVolumn = 0
    this.defenceVolumn = 0

    this.lastMove = 'right'
  }

  right() {
    this.x = (this.x < 8) ? this.x + 1 : 8
    this.lastMove = 'right'
  }

  left() {
    this.x = (this.x > 0) ? this.x - 1 : 0
    this.lastMove = 'left'
  }

  up() {
    this.y = (this.y > 0) ? this.y - 1 : 0
    this.lastMove = 'up'
  }

  down() {
    this.y = (this.y < 5) ? this.y + 1 : 5
    this.lastMove = 'down'
  }

  setPos(x, y) {
    this.x = x
    this.y = y
  }

  get pos() {
    return {
      x: this.x,
      y: this.y
    }
  }

  setProperty(attack, blood, defence) {
    this.attackVolumn = attack
    this.bloodVolumn = blood
    this.defenceVolumn = defence
  }

  get property() {
    return {
      attack: this.attackVolumn,
      blood: this.bloodVolumn,
      defence: this.defenceVolumn
    }
  }

  get direction() {
    return this.lastMove
  }
}
export default Body;
