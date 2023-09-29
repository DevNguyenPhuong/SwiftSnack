// slider trang index
const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
const imgContainer = document.querySelector(".aspect-ratio-169");
const dotItem = document.querySelectorAll(".dot");
let imgNumber = imgPosition.length;
let index = 0;
imgPosition.forEach(function (image, index) {
  image.style.left = index * 100 + "%";
  dotItem[index].addEventListener("click", function () {
    slider(index);
  });
});

function imgSlide() {
  index++;
  //console.log(index)
  if (index >= imgNumber) {
    index = 0;
  }
  slider(index);
}

function slider(index) {
  imgContainer.style.left = "-" + index * 100 + "%";
  const dotActived = document.querySelector(".dot-actived");
  dotActived.classList.remove("dot-actived");
  dotItem[index].classList.add("dot-actived");
}
setInterval(imgSlide, 5000);

// Popup

let popup = document.getElementById("popup");
let lines = Array.from(popup.getElementsByClassName("line"));

lines.forEach((line, index) => {
  line.style.setProperty("--line-index", index);
});

let buttonShow = document.getElementById("show-popup");
buttonShow.addEventListener("click", () => {
  popup.style.display = "inline-block";
});

let buttonClose = document.getElementById("close-popup");
buttonClose.addEventListener("click", () => {
  popup.style.display = "none";
});

// fixed menu
const fixedMenu = document.querySelector("#slider");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.querySelector(".row .leftcolumn").classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.querySelector(".row  .leftcolumn").classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "0px",
  }
);
obs.observe(fixedMenu);
