import Body from './Body'

class Monster extends Body {
  constructor() {
    super();
    this.setProperty(100, 100, 0)
    this.setPos(7, 4)
  }

  attacked() {
    this.bloodVolumn -= 10
  }
}

export default Monster;
