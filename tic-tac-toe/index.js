document.addEventListener("DOMContentLoaded", function () {
  const cells = document.querySelectorAll(".game__cell");
  const restart_button = document.querySelector(".game__restart-button");
  const status_text = document.querySelector(".game__status-text");

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let options = Array(9).fill("");
  let current_player = "X";
  let is_game_running = false;

  function initializeGame() {
    is_game_running = true;
    cells.forEach((cell) => {
      cell.addEventListener("click", function () {
        cellClicked(cell);
      });
    });

    restart_button.addEventListener("click", restartGame);

    status_text.textContent = `${current_player} player's turn`;
  }

  function cellClicked(cell) {
    const cellIndex = cell.getAttribute("cellIndex");
    if (options[cellIndex] !== "" || !is_game_running) {
      return;
    }
    updateCell(cell, cellIndex);
    checkWinner();
  }

  function updateCell(cell, cellIndex) {
    options[cellIndex] = current_player;
    cell.textContent = current_player;
  }

  function changePlayer() {
    current_player = current_player === "X" ? "O" : "X";
    status_text.textContent = `${current_player} player's turn`;
  }

  function checkWinner() {
    let round_won = false;
    for (let i = 0; i < winConditions.length; i++) {
      const condition = winConditions[i];
      const cellA = options[condition[0]];
      const cellB = options[condition[1]];
      const cellC = options[condition[2]];

      if (cellA === "" || cellB === "" || cellC === "") {
        continue;
      }

      if (cellA === cellB && cellB === cellC) {
        round_won = true;
        break;
      }
    }

    if (round_won) {
      status_text.textContent = `${current_player} player WON!`;
      is_game_running = false;
    } else if (!options.includes("")) {
      status_text.textContent = `It's a DRAW!`;
    } else {
      changePlayer();
    }
  }

  function restartGame() {
    current_player = "X";
    status_text.textContent = `${current_player} player's turn`;
    options = Array(9).fill("");
    cells.forEach((cell) => {
      cell.textContent = "";
    });
    is_game_running = true;
  }

  initializeGame();
});
