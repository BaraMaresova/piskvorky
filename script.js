`use strict`;
console.log('všechno dobrý');

let player = 'kolecko';
const hraTlacitko = document.querySelector('.hraTlacitko');
const activePlayer = document.querySelector('.activePlayer');

const hraciPole = document.querySelectorAll('.hraTlacitko');

const hra = (event) => {
  if (player === 'kolecko') {
    event.target.classList.add('hraciPole--kolecko');
    event.target.disabled = true;

    activePlayer.src = 'obrazky/cross.svg';
    activePlayer.alt = 'Obrázek křížku';
    player = 'krizek';
  } else if (player === 'krizek') {
    event.target.classList.add('hraciPole--krizek');
    event.target.disabled = true;

    activePlayer.src = 'obrazky/circle.svg';
    activePlayer.alt = 'Obrázek kolečka';
    player = 'kolecko';
  } else null;
  console.log(getPosition(event.target));
  console.log(getSymbol(event.target));
};

for (let i = 0; i < hraciPole.length; i += 1) {
  hraciPole[i].addEventListener('click', hra);
}

const velikost = 10;

const getPosition = (pole) => {
  let poleIndex = 0;
  while (poleIndex < hraciPole.length) {
    if (pole === hraciPole[poleIndex]) {
      break;
    }
    poleIndex++;
  }
  return {
    row: Math.floor(poleIndex / velikost),
    column: poleIndex % velikost,
  };
};

const getField = (row, column) => hraciPole[row * velikost + column];

const getSymbol = (pole) => {
  if (pole.classList.contains('hraciPole--krizek')) {
    return 'cross';
  } else if (pole.classList.contains('hraciPole--kolecko')) {
    return 'circle';
  }
};
