export default class Ship {
  constructor(type, maxHitPoints, damageReceived, isMothership) {
    this.type = type;
    this.maxHitPoints = maxHitPoints;
    this.damageReceived = damageReceived;
    this.isMothership = isMothership;
    this._isDestroyed = false;
    this._currentHitPoints = maxHitPoints;
  }
  receiveDamage() {
    this._currentHitPoints -= this.damageReceived;
    if(this._currentHitPoints <= 0) {
      this._isDestroyed = true;
      return this._currentHitPoints = 0;
    } else {return this._currentHitPoints}
  }
  get symbol() {
    return this.type.substring(0, 1).toUpperCase();
  }
  get hitPoints() {
    return `${this._currentHitPoints}/${this.maxHitPoints}`
  }
  render() {
    return `<span><span>${this.symbol}<span><div>${this.hitPoints}</div></span>`
  }
}

