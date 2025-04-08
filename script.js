const container = document.querySelector(".container");
const input = document.querySelector(".question");
const qContainer = document.querySelector(".question-container");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const answer = "YOU";

alphabet.split("").forEach((letter) => {
  const span = document.createElement("div");
  span.textContent = letter;
  span.classList.add("letter");
  container.appendChild(span);
});

Array.from(container.children).forEach((letter) => {
  letter.addEventListener("click", () => {
    if (answer.includes(letter.textContent)) {
      input.value += letter.textContent;
      input.dispatchEvent(new Event("input"));
    } else {
      letter.classList.add("wrong");
    }
  });
});

input.addEventListener("input", () => {
  Array.from(container.children).forEach((letter) => {
    letter.classList.remove("selected");
    letter.classList.remove("right");
  });

  input.value.split("").forEach((char) => {
    const selectedLetter = Array.from(container.children).find(
      (l) => l.textContent === char
    );
    if (selectedLetter) {
      selectedLetter.classList.add("selected");
      selectedLetter.classList.add("right");
    }
  });

  if (input.value.trim().toUpperCase() === answer.toUpperCase()) {
    Array.from(container.children).forEach((letter) => {
      letter.classList.add("go");
      qContainer.classList.add("down");
      letter.classList.remove("right");
      letter.classList.remove("selected");
      letter.classList.remove("wrong");
    });
  }
});
