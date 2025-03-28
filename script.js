
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


fetch('data/projects.json')
  .then(response => response.json())
  .then(projects => {
    const projectContainer = document.getElementById('projects-container');
    const navLinks = document.getElementById('nav-links');

    projects.forEach((project, index) => {
      // Render each project block
      const projectHTML = `
        <div class="project_container" id="${project.id}">
          <div class="project_picture">
            <img src="${project.image}" alt="${project.title}" style="border-radius: 20px; max-width: 100%;">
          </div>
          <div class="project_text">
            <p style="font-size: 1.9em; font-style: italic; margin: 10px 0;">${project.title}</p>
            <p>${project.description}</p>
            <div class="project_link"><a href="${project.linkUrl}" target="_blank">${project.linkText}</a></div>
          </div>
        </div>
      `;
      projectContainer.innerHTML += projectHTML;

      // Add to nav
      navLinks.innerHTML += `
        <a href="#${project.id}" style="font-size: 1vw; animation-delay: calc(calc(var(--scroll) + ${0.01 + index * 0.015}) * -1s);">
          ${project.title}
        </a>
      `;
    });
  })
  .catch(err => {
    console.error('Failed to load projects:', err);
    document.getElementById('projects-container').innerHTML = '<p>Failed to load projects.</p>';
  });
