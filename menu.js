const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const animationStartPosition = 0;
  const animationEndPosition = 750;

  let normalizedScroll = (scrollPosition - animationStartPosition) / (animationEndPosition - animationStartPosition);
  normalizedScroll = Math.min(1, Math.max(0, normalizedScroll));
  document.body.style.setProperty('--scroll', normalizedScroll);

  if (menu && menu.style.animationDuration) {
    menu.style.animationDelay = `-${normalizedScroll * parseFloat(menu.style.animationDuration)}s`;
  }
});