"use strict";
const New = document.querySelector(".new");
const role = document.querySelector(".role");
const hold = document.querySelector(".hold");
const score0 = document.querySelector(".score-0");
const score1 = document.querySelector(".score-1");
const image = document.querySelector(".image");
const current0 = document.querySelector(".current-0");
const current1 = document.querySelector(".current-1");
const player1 = document.querySelector(".player-0");
const player2 = document.querySelector(".player-1");
const help = document.querySelector(".help");
const info = document.querySelector(".info");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const winner1 = document.querySelector(".winner1");
const winner2 = document.querySelector(".winner2");

let store = 0;
let activePlayer = true;

const start = function () {
  score = [0, 0];
  score0.textContent = score[0];
  score1.textContent = score[1];
  player1.style.backgroundColor = " rgba(252, 176, 206, 0.94)";
  player2.style.backgroundColor = "rgba(183, 89, 128, 0.739)";
  winner1.classList.add("hidden");
  winner2.classList.add("hidden");
};
let score = [0, 0];
role.addEventListener("click", function () {
  if (score[0] <= 50 && score[1] <= 50) {
    const rand = Math.ceil(Math.random() * 6);
    for (let i = 1; i <= rand; i++) {
      setTimeout(function dagm() {
        image.src = `dice ${i}.jpg`;
      }, i * 100);
    }
    if (rand === 1) {
      store = 0;
      if (activePlayer) {
        current0.textContent = store;
        activePlayer = false;
        player2.style.backgroundColor = " rgba(252, 176, 206, 0.94)";
        player1.style.backgroundColor = "rgba(183, 89, 128, 0.739)";
      } else {
        player1.style.backgroundColor = " rgba(252, 176, 206, 0.94)";
        player2.style.backgroundColor = "rgba(183, 89, 128, 0.739)";
        current1.textContent = store;
        activePlayer = true;
      }
    } else {
      store += rand;
      if (activePlayer) {
        current0.textContent = store;
      } else current1.textContent = store;
    }
  }
});

hold.addEventListener("click", function () {
  if (score[0] <= 50 && score[1] <= 50) {
    if (activePlayer) {
      player2.style.backgroundColor = " rgba(252, 176, 206, 0.94)";
      player1.style.backgroundColor = "rgba(183, 89, 128, 0.739)";
      score[0] += store;
      store = 0;
      current0.textContent = store;
      score0.textContent = score[0];
      activePlayer = false;
      if (score[0] >= 50) {
        player1.style.backgroundColor = "rgb(169, 243, 182)";
        player2.style.backgroundColor = "rgb(104, 61, 78)";
        winner1.classList.remove("hidden");
      }
    } else {
      player1.style.backgroundColor = " rgba(252, 176, 206, 0.94)";
      player2.style.backgroundColor = "rgba(183, 89, 128, 0.739)";
      score[1] += store;
      store = 0;
      current1.textContent = store;
      score1.textContent = score[1];
      activePlayer = true;
      if (score[1] >= 50) {
        player2.style.backgroundColor = "rgb(169, 243, 182)";
        player1.style.backgroundColor = "rgb(104, 61, 78)";
        winner2.classList.remove("hidden");
      }
    }
  }
});

help.addEventListener("click", function () {
  info.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
const remove = function () {
  info.classList.add("hidden");
  overlay.classList.add("hidden");
};
close.addEventListener("click", remove);
overlay.addEventListener("click", remove);

New.addEventListener("click", function () {
  start();
});
