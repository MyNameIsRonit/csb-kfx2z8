// Get all the boxes
let boxes = document.querySelectorAll(".g_box");
let line = document.getElementById("line");
let game_box = document.getElementById("box");
let xscore_cont = document.getElementById("xscore");
let oscore_cont = document.getElementById("oscore");
let play_again_btn = document.getElementById("play_again");
let game_options = document.getElementById("button");
let game_info = document.getElementById("over");
let show_game_info = document.getElementById("show-info");
let wins = document.getElementById("wins");
let main_game_box = document.getElementById("game_box");
let x_player = document.getElementById("x");
let o_player = document.getElementById("o");
const backgroundMusic = document.getElementById("background-music");

let turn = "x";
let gameover = false;
let xwins = false;
let owins = false;
let match_draw = false;

let xscore = 0;
let oscore = 0;

let line_rotated_changed = false;
let line_left_changed = false;
let line_right_changed = false;
let line_top_changed = false;
let line_bottom_changed = false;
let line_width_changed = false;
let line_height_changed = false;

// Initialize a 2D array to store the state of the game
let gameState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

// Add event listeners to the boxes

boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    if (!gameover) {
      let row = box.getAttribute("data-row");
      let col = box.getAttribute("data-col");
      console.log("row is" + row);
      console.log("column is" + col);
      console.log("game over" + gameover);
      console.log("first payeer" + x_player.innerText);
      console.log("second player" + o_player.innerText);

      // Check if the box is empty and the game is still ongoing
      // if (gameState[row - 1][col - 1] === "" && !isGameOver()) {
      if (gameState[row - 1][col - 1] === "" && gameover === false) {
        // Store the value (assuming X is your player)

        if (turn === "x") {
          gameState[row - 1][col - 1] = "X";
          box.textContent = "X";
          turn = "o";
          box.style.color = "rgb(6, 173, 255)";
          box.style.textShadow = "rgb(29, 191, 161) 2px 3px 10px";
          console.log(gameState);
          isGameOver();
          console.log(gameover);
          // backgroundMusic.play();
        } else {
          gameState[row - 1][col - 1] = "O";
          box.textContent = "O";
          turn = "x";

          box.style.color = "#47ff05";
          box.style.textShadow = "2px 3px 10px #37bd1b";
          console.log(gameState);
          isGameOver();
          console.log(gameover);
        }
      }
      if (gameover === true) {
        backgroundMusic.play();
        setTimeout(function () {
          backgroundMusic.pause();
          return;
        }, 1000);

        clearInterval();
        game_options.style.visibility = "visible";
        show_game_info.style.display = "flex";
        main_game_box.style.filter = "blur(8px)";
        line.style.filter = "blur(4px)";
        // visibility: visible;

        gameState[0][0] = "";
        gameState[0][1] = "";
        gameState[0][2] = "";
        gameState[1][0] = "";
        gameState[1][1] = "";
        gameState[1][2] = "";
        gameState[2][0] = "";
        gameState[2][1] = "";
        gameState[2][2] = "";

        if (xwins) {
          game_info.innerHTML = "Game Over!";
          wins.innerHTML = x_player.innerText + " wins";
          xscore++;
          xscore_cont.innerHTML = xscore;
          console.log(xscore);
        }

        if (owins) {
          game_info.innerHTML = "Game Over!";
          wins.innerHTML = o_player.innerText + " wins";
          oscore++;
          oscore_cont.innerHTML = oscore;
          console.log(oscore);
        }
        if (match_draw) {
          game_info.innerHTML = "Game Draw!";
          wins.innerHTML = "";
        }
        // else {
        //     game_options.style.visibility = "hidden"
        //     show_game_info.style.display = "none"
        //     main_game_box.style.filter = "none"
        //     line.style.filter = "none"
        // }
      }
    }
  });
});

// Example function to check if the game is over (replace with your game logic)
function isGameOver() {
  console.log("is game over");
  if (
    gameState[0][0] === "X" &&
    gameState[0][1] === "X" &&
    gameState[0][2] === "X"
  ) {
    gameover = true;
    xwins = true;
    owins = false;
    line.style.bottom = "119px";
    line.style.width = "100%";
    line_bottom_changed = true;
    line_width_changed = true;
    console.log("style changed");
  } else if (
    gameState[1][0] === "X" &&
    gameState[1][1] === "X" &&
    gameState[1][2] === "X"
  ) {
    gameover = true;
    xwins = true;
    owins = false;
    line.style.bottom = "0";
    line.style.width = "100%";
    line_width_changed = true;
  } else if (
    gameState[2][0] === "X" &&
    gameState[2][1] === "X" &&
    gameState[2][2] === "X"
  ) {
    gameover = true;
    xwins = true;
    owins = false;
    line.style.top = "119px";
    line.style.width = "100%";
    line_top_changed = true;
    line_width_changed = true;
  } else if (
    gameState[0][0] === "X" &&
    gameState[1][0] === "X" &&
    gameState[2][0] === "X"
  ) {
    gameover = true;
    xwins = true;
    owins = false;
    line.style.right = "118px";
    line.style.width = "1%";
    line.style.height = "100%";

    line_right_changed = true;
    line_height_changed = true;
    line_width_changed = true;
  } else if (
    gameState[0][1] === "X" &&
    gameState[1][1] === "X" &&
    gameState[2][1] === "X"
  ) {
    gameover = true;
    xwins = true;
    owins = false;
    line.style.width = "1%";
    line.style.height = "100%";
    line_height_changed = true;
    line_width_changed = true;
  } else if (
    gameState[0][2] === "X" &&
    gameState[1][2] === "X" &&
    gameState[2][2] === "X"
  ) {
    gameover = true;
    xwins = true;
    owins = false;
    line.style.left = "123px";
    line.style.width = "1%";
    line.style.height = "100%";

    line_left_changed = true;
    line_width_changed = true;
    line_height_changed = true;
  } else if (
    gameState[0][0] === "X" &&
    gameState[1][1] === "X" &&
    gameState[2][2] === "X"
  ) {
    gameover = true;
    xwins = true;
    owins = false;
    line.style.transform = "rotate(45deg) scaleX(1.4)";
    line.style.width = "100%";
    line_width_changed = true;
    line_rotated_changed = true;
  } else if (
    gameState[0][2] === "X" &&
    gameState[1][1] === "X" &&
    gameState[2][0] === "X"
  ) {
    gameover = true;
    xwins = true;
    owins = false;
    line.style.transform = "rotate(-45deg) scaleX(1.4)";
    line.style.width = "100%";
    line_width_changed = true;
    line_rotated_changed = true;
  } else if (
    gameState[0][0] === "O" &&
    gameState[0][1] === "O" &&
    gameState[0][2] === "O"
  ) {
    gameover = true;
    xwins = false;
    owins = true;
    line.style.bottom = "119px";
    line.style.width = "100%";
    line_bottom_changed = true;
    line_width_changed = true;
  } else if (
    gameState[1][0] === "O" &&
    gameState[1][1] === "O" &&
    gameState[1][2] === "O"
  ) {
    gameover = true;
    xwins = false;
    owins = true;
    line.style.bottom = "0";
    line.style.width = "100%";
    line_width_changed = true;
  } else if (
    gameState[2][0] === "O" &&
    gameState[2][1] === "O" &&
    gameState[2][2] === "O"
  ) {
    gameover = true;
    xwins = false;
    owins = true;
    line.style.top = "119px";
    line.style.width = "100%";
    line_top_changed = true;
    line_width_changed = true;
  } else if (
    gameState[0][0] === "O" &&
    gameState[1][0] === "O" &&
    gameState[2][0] === "O"
  ) {
    gameover = true;
    xwins = false;
    owins = true;
    line.style.right = "123px";
    line.style.width = "1%";
    line.style.height = "100%";

    line_right_changed = true;
    line_height_changed = true;
    line_width_changed = true;
  } else if (
    gameState[0][1] === "O" &&
    gameState[1][1] === "O" &&
    gameState[2][1] === "O"
  ) {
    gameover = true;
    xwins = false;
    owins = true;
    line.style.width = "1%";
    line.style.height = "100%";

    line_height_changed = true;
    line_width_changed = true;
  } else if (
    gameState[0][2] === "O" &&
    gameState[1][2] === "O" &&
    gameState[2][2] === "O"
  ) {
    gameover = true;
    xwins = false;
    owins = true;
    line.style.left = "123px";
    line.style.width = "1%";
    line.style.height = "100%";

    line_left_changed = true;
    line_width_changed = true;
    line_height_changed = true;
  } else if (
    gameState[0][0] === "O" &&
    gameState[1][1] === "O" &&
    gameState[2][2] === "O"
  ) {
    gameover = true;
    xwins = false;
    owins = true;
    line.style.transform = "rotate(45deg) scaleX(1.4)";
    line.style.width = "100%";

    line_width_changed = true;
    line_rotated_changed = true;
  } else if (
    gameState[0][2] === "O" &&
    gameState[1][1] === "O" &&
    gameState[2][0] === "O"
  ) {
    gameover = true;
    xwins = false;
    owins = true;
    line.style.transform = "rotate(-45deg) scaleX(1.4)";
    line.style.width = "100%";
    line_width_changed = true;
    line_rotated_changed = true;
  } else if (
    (gameState[0][0] === "X" || gameState[0][0] === "O") &&
    (gameState[0][1] === "X" || gameState[0][1] === "O") &&
    (gameState[0][2] === "X" || gameState[0][2] === "O") &&
    (gameState[1][0] === "X" || gameState[1][0] === "O") &&
    (gameState[1][1] === "X" || gameState[1][1] === "O") &&
    (gameState[1][2] === "X" || gameState[1][2] === "O") &&
    (gameState[2][0] === "X" || gameState[2][0] === "O") &&
    (gameState[2][1] === "X" || gameState[2][1] === "O") &&
    (gameState[2][2] === "X" || gameState[2][2] === "O")
  ) {
    gameover = true;
    match_draw = true;
    console.log("match draw");
  } else {
    gameover = false;
  }
  return false;
}

play_again_btn.addEventListener("click", function () {
  boxes.forEach(function (box) {
    gameover = false;
    turn = "x";
    match_draw = false;
    game_options.style.visibility = "hidden";
    box.textContent = "";
    show_game_info.style.display = "none";
    main_game_box.style.filter = "none";
    line.style.filter = "none";

    if (line_bottom_changed) {
      line.style.bottom = "0px";
    }

    if (line_height_changed) {
      line.style.height = "1%";
    }

    if (line_left_changed) {
      line.style.left = "0px";
    }

    if (line_right_changed) {
      line.style.right = "0px";
    }

    if (line_rotated_changed) {
      line.style.transform = "none";
    }

    if (line_top_changed) {
      line.style.top = "0px";
    }

    if (line_width_changed) {
      line.style.width = "0%";
    }

    // line.style.transform = "none"

    // line.style.bottom = "0px"
    // line.style.top = "0px"
    // line.style.right = "0px"
    // line.style.left = "0px"
    // line.style.width = "0%"
    // line.style.height = "1%"
    // line.style.height = "1%"
  });
  gameState[0][0] = "";
  gameState[0][1] = "";
  gameState[0][2] = "";
  gameState[1][0] = "";
  gameState[1][1] = "";
  gameState[1][2] = "";
  gameState[2][0] = "";
  gameState[2][1] = "";
  gameState[2][2] = "";
});

// username_box.addEventListener("click",function(){
//     info.style.display="none"
// })

// pass_box.addEventListener("click",function(){
//     info.style.display="none"
// })
// }
