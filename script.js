
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

      const truncatedTitle = project.title.length > 18
        ? project.title.slice(0, 18) + "…"
        : project.title;

      navLinks.innerHTML += `
        <a href="#${project.id}" style="font-size: 1vw; animation-delay: calc(calc(var(--scroll) + ${0.01 + index * 0.015}) * -1s);">
          ${truncatedTitle}
        </a>
      `;
    });

    // Manual carousel navigation
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

    // Autoplay + pause on hover
    projects.forEach((project) => {
      const carousel = document.querySelector(`.carousel[data-project="${project.id}"]`);
      if (!carousel) return;

      const img = carousel.querySelector(".carousel-image");
      let index = 0;
      let isHovered = false;

      carousel.addEventListener("mouseenter", () => isHovered = true);
      carousel.addEventListener("mouseleave", () => isHovered = false);

      setInterval(() => {
        if (isHovered) return;
        index = (index + 1) % project.images.length;
        img.src = project.images[index];
        carousel.setAttribute("data-index", index);
      }, 2000);
    });
  })
  .catch(err => {
    console.error('Failed to load projects:', err);
    document.getElementById('projects-container').innerHTML = '<p>Failed to load projects.</p>';
  });
