import Ship from "./Ship.js";
// import {} from "./code"


const shipData = [
  ["mothership", 100, 9, true, 1],
  ["defence", 80, 10, false, 5],
  ["attack", 45, 12, false, 8]
]

let ships = shipData.map(ship => {
  return new Ship(ship[0], ship[1], ship[2], ship[3], ship[4])
})

console.log(ships)