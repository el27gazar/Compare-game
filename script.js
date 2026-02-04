const game = document.getElementById("game");

let firstCard = null;
let secondCard = null;
let lock = false;

let score = 0;
const scoreEl = document.getElementById("score");


let images = [1,1,2,2,3,3,4,4,5,5];


images.sort(() => Math.random() - 0.5);

images.forEach((num, index) => {
  let card = document.createElement("div");
  card.className = "card";

  let front = document.createElement("div");
  front.className = "face front";
  front.textContent = index + 1;

  let back = document.createElement("div");
  back.className = "face back";

  let img = document.createElement("img");
  img.src = `image/${num}.jpeg`;

  back.appendChild(img);
  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", () => {
    if (lock) return;
    if (card === firstCard) return;

    card.classList.add("flip");

    if (!firstCard) {
      firstCard = card;
      firstCard.value = img.src;
    } else {
      secondCard = card;
      secondCard.value = img.src;
      lock = true;

if (firstCard.value === secondCard.value) {
  score += 10; 
  scoreEl.textContent = score;

  setTimeout(() => {
    firstCard.style.visibility = "hidden";
    secondCard.style.visibility = "hidden";
    reset();
  }, 1000);
}
 else {
        setTimeout(() => {
          firstCard.classList.remove("flip");
          secondCard.classList.remove("flip");
          reset();
        }, 1000);
      }
    }
  });

  game.appendChild(card);
});

function reset() {
  firstCard = null;
  secondCard = null;
  lock = false;
}
