let rotation = 0;

window.addEventListener("wheel", () => {
  rotation += event.deltaY / 1100;
  console.log(rotation);
  document.body.style.setProperty("--scroll", rotation);

}, false);