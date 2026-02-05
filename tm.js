var gameContainer = document.getElementById("game");
var first_Card = null;
var second_Card = null;
var lockcard = false;
var scores = 0;
var scoress = document.getElementById("score");
var imagesall = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
imagesall.sort(function () { return Math.random() - 0.5; });
imagesall.forEach(function (num, index) {
    var card = document.createElement("div");
    card.className = "card";
    var front = document.createElement("div");
    front.className = "face front";
    front.textContent = (index + 1).toString();
    var back = document.createElement("div");
    back.className = "face back";
    var img = document.createElement("img");
    img.src = "image/".concat(num, ".jpeg");
    back.appendChild(img);
    card.appendChild(front);
    card.appendChild(back);
    card.addEventListener("click", function () {
        if (lockcard)
            return;
        if (card === first_Card)
            return;
        card.classList.add("flip");
        if (!first_Card) {
            first_Card = card;
            (first_Card).value = img.src;
        }
        else {
            second_Card = card;
            (second_Card).value = img.src;
            lockcard = true;
            if ((first_Card).value === second_Card.value) {
                scores += 10;
                scoress.textContent = scores.toString();
                setTimeout(function () {
                    if (first_Card && second_Card) {
                        first_Card.style.visibility = "hidden";
                        second_Card.style.visibility = "hidden";
                    }
                    restart();
                }, 1000);
            }
            else {
                setTimeout(function () {
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
function restart() {
    first_Card = null;
    second_Card = null;
    lockcard = false;
}
