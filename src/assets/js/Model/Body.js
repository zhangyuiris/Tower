class Body {
  constructor() {
    this.feet_x = 0 // 几个格子x  →变大
    this.feet_y = 0 // 几个格子y  ↓变大

    this.attack = 1000
    this.blood = 200
    this.defence = 500
  }

  setProperty(attack, blood, defence) {
    this.attack = attack
    this.blood = blood
    this.defence = defence
  }

  getAttack() {
    return this.attack
  }

  getBlood() {
    return this.blood
  }

  getDefence() {
    return this.defence
  }

  attacked(body) {
    this.blood -= body.getAttack() - this.defence
  }
}
