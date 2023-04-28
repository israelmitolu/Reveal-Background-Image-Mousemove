const hover = document.querySelector(".hover");
const hoverWHalf = hover.offsetWidth / 1.3;
const container = document.querySelector(".container");

container.addEventListener("mousemove", (e) => {
  hover.style.top = e.pageY - hoverWHalf + "px";
  hover.style.left = e.pageX - hoverWHalf + "px";

  hover.style.opacity = "1";
});
