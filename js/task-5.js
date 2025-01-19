function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.body.style.display = "flex";
document.body.style.justifyContent = "center";

const widget = document.querySelector(".widget");
widget.style.display = "block";
widget.style.margin = "0 auto";
widget.style.marginTop = "300px";

const backgColor = document.querySelector(".change-color");
backgColor.style.padding = "8px 16px";
backgColor.style.width = "148px";
backgColor.style.backgroundColor = "#4E75FF";
backgColor.style.color = "#fff";
backgColor.style.border = "none";
backgColor.style.borderRadius = "8px";

backgColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  document.querySelector(".color").textContent = color;
});
