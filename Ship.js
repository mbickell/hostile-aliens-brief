export default class Ship {
  constructor(type, maxHitPoints, damageReceived, isMothership, numberOfShips) {
    this.type = type;
    this.maxHitPoints = maxHitPoints;
    this.damageReceived = damageReceived;
    this.isMothership = isMothership;
    this.numberOfShips = numberOfShips;
    this._isDestroyed = false;
    this._currentHitPoints = maxHitPoints;
  }
}

