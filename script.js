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


fetch('data/projects.json')
  .then(response => response.json())
  .then(projects => {
    const projectContainer = document.getElementById('projects-container');
    const navLinks = document.getElementById('nav-links');

    projects.forEach((project, index) => {
      const imageCarousel = `
        <div class="carousel" data-project="${project.id}" data-index="0">
          <button class="carousel-btn left">❮</button>
          <img src="${project.images[0]}" class="carousel-image" alt="${project.title}" />
          <button class="carousel-btn right">❯</button>
        </div>
      `;

      const projectHTML = `
        <div class="project_container" id="${project.id}">
          <div class="project_picture">
            ${imageCarousel}
          </div>
          <div class="project_text">
            <p style="font-size: 1.9em; font-style: italic; margin: 10px 0;">${project.title}</p>
            <p>${project.description}</p>
            <div class="project_link"><a href="${project.linkUrl}" target="_blank">${project.linkText}</a></div>
          </div>
        </div>
      `;

      projectContainer.innerHTML += projectHTML;

      const truncatedTitle = project.title.length > 17
        ? project.title.slice(0, 16) + "..." 
        : project.title;

        navLinks.innerHTML += `
        <a href="#${project.id}" style="font-size: 1vw; animation-delay: calc(calc(var(--scroll) + ${0.01 + index * 0.015}) * -1s);">
            ${truncatedTitle}
        </a>
        `;
    });

    // Event delegation for carousels
    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".carousel-btn");
        if (!btn) return;

        const carousel = btn.closest(".carousel");
        const img = carousel.querySelector(".carousel-image");
        const isLeft = btn.classList.contains("left");

        const projectId = carousel.getAttribute("data-project");
        const project = projects.find(p => p.id === projectId);
        if (!project) return;

        let index = parseInt(carousel.getAttribute("data-index"));
        const images = project.images;

        const newIndex = isLeft
        ? (index - 1 + images.length) % images.length
        : (index + 1) % images.length;

        img.src = images[newIndex];
        carousel.setAttribute("data-index", newIndex);
    });
  });
