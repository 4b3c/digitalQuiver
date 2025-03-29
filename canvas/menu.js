const menu = document.querySelector('.menu');
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const animationStartPosition = 0; // Set the pixel value where the animation should start
  const animationEndPosition = 750; // Set the pixel value where the animation should end

  // Calculate the normalized value between 0 and 1 based on the scroll position
  let normalizedScroll = (scrollPosition - animationStartPosition) / (animationEndPosition - animationStartPosition);
  
  // Ensure the normalized value stays within the [0, 1] range
  normalizedScroll = Math.min(1, Math.max(0, normalizedScroll));

  document.body.style.setProperty('--scroll', normalizedScroll);
  
  // Adjust the animation delay based on the scroll position
  menu.style.animationDelay = `-${normalizedScroll * menu.style.animationDuration}`;
});
