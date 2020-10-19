`use strict`;
console.log('všechno dobrý');

let player = 'kolecko';

const hraTlacitka = document.querySelectorAll('.hraTlacitko');

hraTlacitka.addEventListener('click', () => {
  if (player === 'kolecko') {
    document.querySelector('.hraTlacitko').classList.add('hraciPole--kolecko');
    document.querySelector(
      '.hraje',
    ).innerHTML = `<h3>HRAJE: </h3> <img src="obrazky/circle.svg alt="obrázek kolečka">`;
    player = 'krizek';
  } else if (player === 'krizek') {
    document.querySelector('.hraTlacitko').classList.add('hraciPole--krizek');
    document.querySelector(
      '.hraje',
    ).innerHTML = `<h3>HRAJE: </h3> <img src="obrazky/cross.svg alt="obrázek křížku">`;
    player = 'kolecko';
  } else null;
});
