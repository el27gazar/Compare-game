const gameContainer = document.getElementById("game") as HTMLElement;

let first_Card: any = null;
let second_Card: any = null;
let lockcard: boolean = false;

let scores: number = 0;
const scoress = document.getElementById("score") as HTMLElement;

let imagesall: number[] = [1,1,2,2,3,3,4,4,5,5];


imagesall.sort(() => Math.random() - 0.5);

imagesall.forEach((num, index) => {
  const card = document.createElement("div");
  card.className = "card";

  const front = document.createElement("div");
  front.className = "face front";
  front.textContent = (index + 1).toString();

  const back = document.createElement("div");
  back.className = "face back";

  const img = document.createElement("img");
  img.src = `image/${num}.jpeg`;

  back.appendChild(img);
  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", () => {
    if (lockcard) return;
    if (card === first_Card) return;

    card.classList.add("flip");

    if (!first_Card) {
      first_Card = card;
      (first_Card).value = img.src;
    } else {
      second_Card = card;
      (second_Card ).value = img.src;
      lockcard = true;

      if ((first_Card).value === (second_Card as any).value) {
        scores += 10;
        scoress.textContent = scores.toString();

        setTimeout(() => {
          if (first_Card && second_Card) {
            first_Card.style.visibility = "hidden";
            second_Card.style.visibility = "hidden";
          }
          restart();
        }, 1000);
      } else {
        setTimeout(() => {
          if (first_Card && second_Card) {
            first_Card.classList.remove("flip");
            second_Card.classList.remove("flip");
          }
          restart();
        }, 1000);
      }
    }
  });

  gameContainer.appendChild(card);
});

function restart(): void {
  first_Card = null;
  second_Card = null;
  lockcard = false;
}
