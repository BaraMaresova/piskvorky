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
    vitezstvi(event.target);
    player = 'krizek';
  } else if (player === 'krizek') {
    event.target.classList.add('hraciPole--krizek');
    event.target.disabled = true;

    activePlayer.src = 'obrazky/circle.svg';
    activePlayer.alt = 'Obrázek kolečka';
    vitezstvi(event.target);
    player = 'kolecko';
  } else null;
  console.log('Get position', getPosition(event.target));
  console.log('Get symbol', getSymbol(event.target));
  console.log('Winning', isWinningMove(event.target));
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

const vyhrava = 5;
const isWinningMove = (pole) => {
  const origin = getPosition(pole);
  const symbol = getSymbol(pole);

  let i;

  let vRadku = 1;
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    vRadku++;
    i--;
  }

  i = origin.column;
  while (
    i < velikost - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    vRadku++;
    i++;
  }
  if (vRadku >= vyhrava) {
    return true;
  }

  let veSloupci = 1;
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    veSloupci++;
    i--;
  }

  i = origin.row;
  while (
    i < velikost - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    veSloupci++;
    i++;
  }
  if (veSloupci >= vyhrava) {
    return true;
  }
  return false;
};

const vitezstvi = (pole) => {
  if (isWinningMove(pole) === true) {
    if (getSymbol(pole) === 'circle') {
      window.confirm(
        'Gratulujeme kolečku k vítězství! Chcete rozdrtit křížek ještě jednou?',
      );
      location.reload();
    } else if (getSymbol(pole) === 'cross') {
      window.confirm(
        'Gratulujeme křížku k vítězství! Chcete rozdrtit kolečko ještě jednou?',
      );
      location.reload();
    }
  }
};
