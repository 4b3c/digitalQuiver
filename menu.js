// let rotation = 0;

// window.addEventListener("wheel", () => {
//   rotation += event.deltaY / 1150;
//   if (rotation > 1) {rotation = 1}
//   if (rotation < 0) {rotation = 0}
//   document.body.style.setProperty("--scroll", rotation);

// }, false);

window.addEventListener(
"scroll",
() => {
document.body.style.setProperty(
"--scroll",
window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
);
},
false
);