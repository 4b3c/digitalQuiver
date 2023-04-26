const rectangle = document.querySelector('.menu');
let rotation = 0;

window.addEventListener('wheel', function(event) {
  const delta = event.deltaY / 10;
  rotation += delta;
  rectangle.style.transform = `rotate(${rotation}deg)`;
});
