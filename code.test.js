import Ship from "./Ship";
import * as code from "./code"
const shipData = [
  ["mothership", 100, 9, true, 1],
  ["defence", 80, 10, false, 5],
  ["attack", 45, 12, false, 8]
]

const ships = code.generateShipData(shipData)

describe("Do ships generate correctly?", () => {

  test("Are the objects in ships array correct?", () => {
    expect(ships[0].type).toBe("mothership");
    expect(ships[1].type).toBe("defence");
    expect(ships[12].type).toBe("attack");
  })
})

describe("Do ship methods work?", () => {
  ships[0].receiveDamage();
  ships[13].receiveDamage();
  ships[13].receiveDamage();
  ships[13].receiveDamage();
  ships[13].receiveDamage();
  test("Does the ship take damage?", () => {
    expect(ships[0]._currentHitPoints).toBe(91);
  })
  test("Do the ships get destroyed?", () => {
    expect(ships[13]._isDestroyed).toBe(true);
  })
  test("If ship is destroyed, remove from array", () => {
    code.removeDeadAliens(ships)
    expect(ships[13]).toBe(undefined);
  })
  test("Do ship symbols generate correctly?", () => {
    expect(ships[0].symbol).toBe("M")
    expect(ships[1].symbol).toBe("D")
    expect(ships[7].symbol).toBe("A")
  })
  test("Do ship hit points generate correctly?", () => {
    expect(ships[0].hitPoints).toBe("91/100")
    expect(ships[2].hitPoints).toBe("80/80")
    expect(ships[7].hitPoints).toBe("45/45")
  })
})

describe("Random generation tests", () => {
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.1;
  global.Math = mockMath;

  test("Is random generator working?", () => {
    expect(code.randomNumber(ships)).toBe(1);
  })
  test("Does random ship receive damage?", () => {
    code.damageRandomShip(ships)
    expect(ships[1]._currentHitPoints).toBe(70)
  })
})

describe("Check game logic", () => {
  test("If motheship is destroyed, everything else is destroyed", () => {
    ships[0].receiveDamage();
    ships[0].receiveDamage();
    ships[0].receiveDamage();
    ships[0].receiveDamage();
    ships[0].receiveDamage();
    ships[0].receiveDamage();
    ships[0].receiveDamage();
    ships[0].receiveDamage();
    ships[0].receiveDamage();
    ships[0].receiveDamage();
    ships[0].receiveDamage();
    code.checkMothership(ships);
    expect(ships[0]._isDestroyed).toBe(true);
    code.removeDeadAliens(ships);
    code.removeDeadAliens(ships);
    expect(ships.length).toBe(0)
  })
})