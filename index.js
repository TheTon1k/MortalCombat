const player1 = {
  name: 'Scorpion',
  hp: '100',
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['pistol', 'knife'],
  attack: function () {
    console.log(`${this.name} Fight...`);
  },
};
const player2 = {
  name: 'Liu Kang',
  hp: '100',
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: ['pistol', 'knife'],
  attack: function () {
    console.log(`${this.name} Fight...`);
  },
};

const createPlayer = (player, playerInfo) => {
  const createEl = () => document.createElement('el');
  const addClass = (el, className) => {
    el.classList.add(className);
  };
  const $player = createEl('div');
  const $progressbar = createEl('div');
  const $character = createEl('div');
  const $life = createEl('div');
  const $name = createEl('div');
  const $img = createEl('img');

  addClass($player, player);
  addClass($progressbar, 'progressbar');
  addClass($character, 'character');
  addClass($life, 'life');
  addClass($name, 'name');
  $name.innerText = playerInfo.name;
  $img.src = playerInfo.img;
  $life.innerText = playerInfo.hp;
  $life.style.width = '100%';

  $player.appendChild($progressbar);
  $player.appendChild($character);

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  $character.appendChild($img);

  document.querySelector('.arenas').appendChild($player);
};

createPlayer('player1', player1);
createPlayer('player2', player2);
