// 1
const amountCatigories = document.querySelectorAll(".item");
const count = amountCatigories.length;
console.log(`Number of catigories: ${count}`);

// 2
const categories = document.querySelectorAll("#categories .item");

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemCount = category.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemCount}`);
});
