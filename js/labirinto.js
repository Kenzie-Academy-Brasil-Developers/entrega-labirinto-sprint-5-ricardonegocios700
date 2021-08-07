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

//definindo posição inicial
let positionL  = 9;
let positionC  = 0;

function criarDivs(arr){
  container.innerHTML = "";
  positionL  = 9;
  positionC  = 0;

  for(let linha = 0; linha < arr.length; linha++) {

    let line = arr[linha];
    let divLine = document.createElement("div");
    divLine.setAttribute('class', `line`);
    container.appendChild(divLine);

    for(let coluna = 0; coluna < line.length; coluna++) {

      let divColumn = document.createElement("div");
      divColumn.setAttribute('class', 'column path');
      if (line[coluna] === "W") {
        divColumn.setAttribute('class', 'column wall')
      }
      if (line[coluna] === "F") {
        divColumn.setAttribute('class', 'column end')
      }
      if (line[coluna] === "S") {
        divColumn.setAttribute('class', 'column start')
      }
      divColumn.setAttribute('id', `move${linha}_${coluna}`);
      divLine.appendChild(divColumn);
    }

  }

}
criarDivs(map);

function startPlayer() {

  let player = document.createElement("img");
  player.setAttribute('id', 'player');
  player.setAttribute('src', './img/super-pateta.png');
  
  let divMove = document.getElementById(`move${positionL}_${positionC}`);
  divMove.appendChild(player);

}
startPlayer();

document.addEventListener('keydown', movePlayer)

function movePlayer(keydown) {

  let player = document.getElementById("player");
  let keyName = keydown.key;
  
  if (keyName === "ArrowDown")  positionL ++;
  if (keyName === "ArrowUp")    positionL --;
  if (keyName === "ArrowLeft")  positionC --;
  if (keyName === "ArrowRight") positionC ++;

  valida(keyName);

}

function valida(keyName) {

  let divMove = document.getElementById(`move${positionL}_${positionC}`);
  
  //se é igual class wall => invalido
  if (divMove.className === "column wall") {
    if (keyName === "ArrowDown")  positionL --;
    if (keyName === "ArrowUp")    positionL ++;
    if (keyName === "ArrowLeft")  positionC ++;
    if (keyName === "ArrowRight") positionC --;
  } 

  //se class = path => move
  if (divMove.className === "column path") {
    divMove.appendChild(player);
  }

  //
  if (divMove.className === "column start") {
    positionC ++;
  }

  //se class = finish => alerta de vitória
  if (divMove.className === "column end") {
    criarDivs(map);
    startPlayer();
    alert("Você venceu");
  }
  
}
