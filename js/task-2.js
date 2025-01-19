const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".gallery");
gallery.style.display = "flex";
gallery.style.maxWidth = "1178px";
gallery.style.flexWrap = "wrap";
gallery.style.margin = "0 auto";
gallery.style.gap = "24px";
gallery.style.justifyContent = "center";

function imageItem(image) {
  return `
  <li style="list-style: none; width: 360px;">
  <img src="${image.url}" alt="${image.alt}" class="img" 
  style=" display: block; width: 100%; height: 300px;">
  </li>
  `;
}

function imagesItems(images) {
  const markup = images.map(imageItem).join("");
  return markup;
}
console.log(imagesItems(images));
gallery.innerHTML = imagesItems(images);

// const listItem = document.createElement("li");
// listItem.classList.add("galery-item");
// console.log(listItem);
// gallery.append(listItem);
