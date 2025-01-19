function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.display = "block";
    box.style.width = "${size}";
    box.style.height = "${size}";
    box.style.backgroundColor = getRandomHexColor();
    box.style.padding = "5px";
    boxes.push(box);
    size += 10;
  }

  boxesContainer.innerHTML = "";
  boxesContainer.append(...boxes);
}

createBtn.addEventListener("click", () => {
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

destroyBtn.addEventListener("click", destroyBoxes);
