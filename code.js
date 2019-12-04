import Ship from "./Ship.js";

let ships;

export const generateShipData = array => {
  let ships = array.flatMap(ship => {
    let typeOfShips = [];
    for (let i = 0; i < ship[5]; i++) {
      typeOfShips.push(new Ship(ship[0], ship[1], ship[2], ship[3]));
    }
    return typeOfShips;
  });
  return ships;
};

export const randomNumber = array => Math.floor(Math.random() * array.length);

export const damageRandomShip = array => {
  array[randomNumber(array)].receiveDamage();
};

export const checkMothership = array => {
  if (array[0]._isDestroyed) {
    array.forEach(ship => {
      ship._isDestroyed = true;
    });
    removeDeadAliens(array);
  }
};

export const removeDeadAliens = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[i]._isDestroyed) {
      array.splice(i, 1);
    }
  }
};

export const insertShips = array => {
  let main = document.querySelector("main");
  main.innerHTML = "";
  let html = "";
  !array[0] ? alert("The fleet is destroyed") : null;
  array.forEach(ship => (html += ship.render()));
  main.innerHTML = html;
};

export const damageShipAndUpdateDisplay = array => {
  damageRandomShip(array);
  checkMothership(array);
  removeDeadAliens(array);
  insertShips(array);
};
