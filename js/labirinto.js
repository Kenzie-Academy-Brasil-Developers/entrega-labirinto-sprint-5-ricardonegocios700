const map = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W   W     W     W W W",
  "W W W WWW WWWWW W W W",
  "W W W   W     W W   W",
  "W WWWWWWW W WWW W W W",
  "W         W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W F",
  "S     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W       W       W   W",
  "WWWWWWWWWWWWWWWWWWWWW",
];

const container = (document.querySelector("#container"));
let positionL  = 9;
let positionC  = 0;
function criarDivs(arr){

  for(let linha = 0; linha < arr.length; linha++) {

    let line = arr[linha];
    let divLine = document.createElement("div");
    divLine.setAttribute('class', `line`);
    container.appendChild(divLine);

    for(let coluna = 0; coluna < line.length; coluna++) {
      let divColumn = document.createElement("div");
      divColumn.setAttribute('class', `column`);
      divColumn.setAttribute('id', `move${linha}${coluna}`);
      divLine.appendChild(divColumn);
    }

  }

}
criarDivs(map);

function startPlayer() {

  let player = document.createElement("img");
  player.setAttribute('id', 'player');
  player.setAttribute('src', './img/super-pateta.png');
  
  let divMove = document.getElementById(`move${positionL}${positionC}`);
  divMove.appendChild(player);
  console.log(divMove)
}
startPlayer()

function movePlayer(tecla) {
  
  let player = document.getElementById("player");
  console.log(player);
  positionC += 1;
  let divMove = document.getElementById(`move${positionL}${positionC}`);
  divMove.appendChild(player);
}
//movePlayer("ArrowUp");