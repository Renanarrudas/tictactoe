const buttons = document.querySelectorAll("button");
const player = document.querySelector("#jogador");
const restart = document.querySelector("#restart");
const modal = document.querySelector("#modalBlur");
const container = document.querySelector("#container");

function tableArray(array) {
  const buttons = Array.from(array).filter((button) => button.id != "restart");
  const pageOne = buttons.slice(0, 3);
  const pageTwo = buttons.slice(3, 6);
  const pageThree = buttons.slice(6, 9);

  return [pageOne, pageTwo, pageThree];
}

function setCharacter({ target }) {
  if (!target.innerText) {
    if (checkPlayer() == "O") {
      target.innerText = "O";
      checkWinner();
      player.innerText = "X";
    } else {
      target.innerText = "X";
      checkWinner();
      player.innerText = "O";
    }
  }
}

function addEvents() {
  buttons.forEach((button) => {
    if (button.id != "restart") {
      button.addEventListener("click", setCharacter);
    } else {
      button.addEventListener("click", restartButton);
    }
  });
}

addEvents();

function checkPlayer() {
  return player.innerText;
}

function restartButton() {
  buttons.forEach((button) => {
    if (button.id != "restart") {
      button.innerText = "";
      modal.style.display = "none";
      modal.children
        .item(0)
        .children.item(
          0
        ).innerText = `Parabéns! O vencedor do jogo é o jogador:`;
    }
  });
}

function checkWinner() {
  const table = tableArray(buttons);
  let winner = false;

  if (table[0][0].innerText) {
    if (
      table[0][0].innerText == table[0][1].innerText &&
      table[0][0].innerText == table[0][2].innerText
    ) {
      winner = true;
      modal.style.display = "flex";
      modal.children
        .item(0)
        .children.item(0).innerText += ` ${player.innerText}`;
    }
    if (
      table[0][0].innerText == table[1][0].innerText &&
      table[0][0].innerText == table[2][0].innerText
    ) {
      winner = true;
      modal.style.display = "flex";
      modal.children
        .item(0)
        .children.item(0).innerText += ` ${player.innerText}`;
    }
    if (
      table[0][0].innerText == table[1][1].innerText &&
      table[0][0].innerText == table[2][2].innerText
    ) {
      winner = true;
      modal.style.display = "flex";
      modal.children
        .item(0)
        .children.item(0).innerText += ` ${player.innerText}`;
    }
  }

  if (table[1][0].innerText) {
    if (
      table[1][0].innerText == table[1][1].innerText &&
      table[1][0].innerText == table[1][2].innerText
    ) {
      winner = true;
      modal.style.display = "flex";
      modal.children
        .item(0)
        .children.item(0).innerText += ` ${player.innerText}`;
    }
    if (
      table[1][0].innerText == table[0][1].innerText &&
      table[1][0].innerText == table[2][1].innerText
    ) {
      winner = true;
      modal.style.display = "flex";
      modal.children
        .item(0)
        .children.item(0).innerText += ` ${player.innerText}`;
    }
  }

  if (table[2][0].innerText) {
    if (
      table[2][0].innerText == table[2][1].innerText &&
      table[2][0].innerText == table[2][2].innerText
    ) {
      winner = true;
      modal.style.display = "flex";
      modal.children
        .item(0)
        .children.item(0).innerText += ` ${player.innerText}`;
    }
  }

  if (table[0][1].innerText) {
    if (
      table[0][1].innerText == table[1][1].innerText &&
      table[0][1].innerText == table[2][1].innerText
    ) {
      winner = true;
      modal.style.display = "flex";
      modal.children
        .item(0)
        .children.item(0).innerText += ` ${player.innerText}`;
    }
  }

  if (table[0][2].innerText) {
    if (
      table[0][2].innerText == table[1][2].innerText &&
      table[0][2].innerText == table[2][2].innerText
    ) {
      winner = true;
      modal.style.display = "flex";
      modal.children
        .item(0)
        .children.item(0).innerText += ` ${player.innerText}`;
    }

    if (
      table[0][2].innerText == table[1][1].innerText &&
      table[0][2].innerText == table[2][0].innerText
    ) {
      winner = true;
      modal.style.display = "flex";
      modal.children
        .item(0)
        .children.item(0).innerText += ` ${player.innerText}`;
    }
  }
  if (!winner) {
    isZebra(table);
  }
}

function isZebra(table) {
    let buttons = [...table[0], ...table[1], ...table[2]];
    let zebra = buttons.every((button) => {
    return !!button.innerText;
  });
  
  if (zebra) {
    modal.style.display = "flex";
    modal.children
      .item(0)
      .children.item(0).innerText = `Ops! Deu Zebra, não houve vencedores`;
  }
}
