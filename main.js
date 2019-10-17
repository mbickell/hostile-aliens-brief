import {
  generateShipData,
  removeDeadAliens,

} 
from "./code.js"


const shipData = [
  ["mothership", 100, 9, true, 1],
  ["defence", 80, 10, false, 5],
  ["attack", 45, 12, false, 8]
]
let ships = generateShipData(shipData)

console.log(ships[0].symbol)
