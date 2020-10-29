`use strict`;
console.log('všechno dobrý');

let player = 'kolecko';
const hraTlacitko = document.querySelector('.hraTlacitko');
const activePlayer = document.querySelector('.activePlayer');

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
};

const hraciPole = document.querySelectorAll('.hraTlacitko');
for (let i = 0; i < hraciPole.length; i += 1) {
  hraciPole[i].addEventListener('click', hra);
}

