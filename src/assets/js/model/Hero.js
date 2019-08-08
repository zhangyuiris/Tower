import Body from './Body'

class Hero extends Body {
  constructor() {
    super()
    this.setProperty(50, 200, 80)
    this.setPos(1, 2)
  }

  attacked(body) {
    this.bloodVolumn -= body.attack() - this.defenceVolumn
  }
}

export default Hero;
