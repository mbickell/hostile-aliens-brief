export default class Ship {
  constructor(type, picture, maxHitPoints, damageReceived, isMothership) {
    this.type = type;
    this.picture = picture;
    this.maxHitPoints = maxHitPoints;
    this.damageReceived = damageReceived;
    this.isMothership = isMothership;
    this._isDestroyed = false;
    this._currentHitPoints = maxHitPoints;
  }
  receiveDamage() {
    this._currentHitPoints -= this.damageReceived;
    if (this._currentHitPoints <= 0) {
      this._isDestroyed = true;
      return (this._currentHitPoints = 0);
    } else {
      return this._currentHitPoints;
    }
  }
  get symbol() {
    return this.picture;
  }
  get hitPoints() {
    return `${this._currentHitPoints}/${this.maxHitPoints}`;
  }
  render() {
    return `<div class="${this.type}"><img src=${this.picture} alt=${this.type} /></img><p>${this.hitPoints}</p></div>`;
  }
}
