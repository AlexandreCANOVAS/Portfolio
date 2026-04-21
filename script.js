let content = window.PORTFOLIO_CONTENT || {};
let projectImageLightboxState = null;

function injectText(id, value) {
  const node = document.getElementById(id);
  if (node) {
    node.textContent = value || "";
  }
}

function injectHero() {
  if (!content?.hero) return;

  injectText("heroEyebrow", content.hero.eyebrow);
  injectText("heroName", content.hero.name);
  injectText("heroTitle", content.hero.title);
  injectText("heroPitch", content.hero.pitch);
}

function injectAbout() {
  if (!content?.about) return;

  injectText("aboutText", content.about.text);

  const list = document.getElementById("qualitiesList");
  if (!list || !Array.isArray(content.about.qualities)) return;

  list.innerHTML = "";
  content.about.qualities.forEach((quality) => {
    const li = document.createElement("li");
    li.textContent = quality;
    list.appendChild(li);
  });
}

function injectWhyMe() {
  injectText("whyMeText", content?.whyMe || "");
}

function initThemeToggle() {
  const button = document.getElementById("themeToggle");
  if (!button) return;

  const savedTheme = localStorage.getItem("portfolio-theme");
  const isDark = savedTheme === "dark";

  document.body.classList.toggle("dark", isDark);
  button.setAttribute("aria-label", isDark ? "Activer le mode clair" : "Activer le mode sombre");
  button.innerHTML = isDark ? "<span>☀️</span>" : "<span>🌙</span>";

  button.addEventListener("click", () => {
    const nowDark = !document.body.classList.contains("dark");
    document.body.classList.toggle("dark", nowDark);
    localStorage.setItem("portfolio-theme", nowDark ? "dark" : "light");
    button.setAttribute("aria-label", nowDark ? "Activer le mode clair" : "Activer le mode sombre");
    button.innerHTML = nowDark ? "<span>☀️</span>" : "<span>🌙</span>";
  });
}

function renderAll() {
  injectHero();
  injectAbout();
  injectWhyMe();
  renderSkills();
  renderProjects();
  renderCertifications();
  injectGoal();
  renderContact();
  applyStaggerReveal();
  initRevealOnScroll();
  initMagneticCards();
}

function initInteractiveTerminal() {
  const output = document.getElementById("terminalOutput");
  const form = document.getElementById("terminalForm");
  const input = document.getElementById("terminalInput");

  if (!output || !form || !input) return;
  if (form.dataset.terminalBound === "true") return;
  form.dataset.terminalBound = "true";

  const appendLine = (text, className = "") => {
    const line = document.createElement("p");
    line.className = `terminal-line ${className}`.trim();
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  };

  const typeLine = (text) => {
    const line = document.createElement("p");
    line.className = "terminal-line terminal-line-response";
    output.appendChild(line);

    return new Promise((resolve) => {
      let index = 0;
      const timer = setInterval(() => {
        line.textContent = text.slice(0, index + 1);
        output.scrollTop = output.scrollHeight;
        index += 1;

        if (index >= text.length) {
          clearInterval(timer);
          resolve();
        }
      }, 9);
    });
  };

  const buildSkillLines = () => {
    const skills = content.skills || [];
    if (!skills.length) return ["Aucune compétence renseignée."];

    return skills.flatMap((skill) => {
      const items = (skill.items || []).map((item) => `  - ${item}`);
      return [`${skill.title || "Compétence"} :`, ...items];
    });
  };

  const buildProjectLines = () => {
    const projects = content.projects || [];
    if (!projects.length) return ["Aucun projet renseigné."];

    return projects.flatMap((project) => {
      const technologies = (project.technologies || []).join(", ");
      const github = project.github ? `  GitHub: ${project.github}` : "  GitHub: non renseigné";
      return [
        `${project.title || "Projet"}`,
        `  Tech: ${technologies || "non renseignées"}`,
        github
      ];
    });
  };

  const buildCertificationLines = () => {
    const certifications = content.certifications || [];
    if (!certifications.length) return ["Aucune certification renseignée."];

    return certifications.map((certification) => `- ${certification.title || "Certification"}`);
  };

  const buildContactLines = () => {
    const links = content.contactLinks || [];
    if (!links.length) return ["Aucun contact renseigné."];

    return links.map((link) => `${link.label || "Contact"}: ${link.text || link.href || "-"}`);
  };

  const getCommands = () => ({
    help: [
      "Commandes disponibles :",
      "whoami | skills | projects | certifications | contact | goal | clear | help"
    ],
    whoami: [
      "Alexandre - futur technicien systèmes et réseaux",
      "Profil hybride sécurité + informatique, orienté support et réseau."
    ],
    skills: buildSkillLines(),
    projects: buildProjectLines(),
    certifications: buildCertificationLines(),
    contact: buildContactLines(),
    goal: [content.goal || "Objectif non renseigné."],
    clear: []
  });

  let busy = false;
  const history = [];
  let historyIndex = 0;

  const runCommand = async (rawCommand) => {
    const command = rawCommand.trim().toLowerCase();
    appendLine(`$ ${rawCommand}`, "terminal-line-command");

    if (!command) {
      await typeLine("Tape help pour afficher les commandes disponibles.");
      return;
    }

    const commands = getCommands();
    if (command === "clear") {
      output.innerHTML = "";
      return;
    }

    const lines = commands[command] || ["Commande inconnue. Tape help pour voir les commandes."];

    for (const line of lines) {
      await typeLine(line);
    }
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (busy) return;

    const value = input.value;
    input.value = "";
    history.push(value);
    historyIndex = history.length;
    busy = true;
    input.setAttribute("disabled", "true");

    await runCommand(value);

    input.removeAttribute("disabled");
    input.focus();
    busy = false;
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!history.length) return;
      historyIndex = Math.max(0, historyIndex - 1);
      input.value = history[historyIndex] || "";
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!history.length) return;
      historyIndex = Math.min(history.length, historyIndex + 1);
      input.value = history[historyIndex] || "";
    }
  });

  appendLine("Mode interactif IT initialisé.", "terminal-line-system");
  appendLine("Tape help pour afficher toutes les commandes.", "terminal-line-system");
}

function ensureProjectImageLightbox() {
  if (projectImageLightboxState) return projectImageLightboxState;

  const root = document.createElement("div");
  root.className = "project-image-lightbox";
  root.setAttribute("aria-hidden", "true");

  root.innerHTML = `
    <div class="project-image-lightbox-dialog" role="dialog" aria-modal="true" aria-label="Agrandissement image projet">
      <button class="project-image-lightbox-close" type="button" aria-label="Fermer" data-lightbox-close>×</button>
      <img class="project-image-lightbox-image" src="" alt="" />
      <p class="project-image-lightbox-caption"></p>
    </div>
  `;

  document.body.appendChild(root);

  const image = root.querySelector(".project-image-lightbox-image");
  const caption = root.querySelector(".project-image-lightbox-caption");

  root.addEventListener("click", (event) => {
    if (event.target === root || event.target.closest("[data-lightbox-close]")) {
      closeProjectImageLightbox();
    }
  });

  projectImageLightboxState = { root, image, caption };
  return projectImageLightboxState;
}

function openProjectImageLightbox(src, alt) {
  const lightbox = ensureProjectImageLightbox();
  if (!src) return;

  lightbox.image.src = src;
  lightbox.image.alt = alt || "Projet";
  lightbox.caption.textContent = alt || "Aperçu projet";
  lightbox.root.classList.add("active");
  lightbox.root.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeProjectImageLightbox() {
  if (!projectImageLightboxState) return;

  projectImageLightboxState.root.classList.remove("active");
  projectImageLightboxState.root.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
}

function initProjectImageZoom() {
  if (document.body.dataset.projectImageZoomBound === "true") return;
  document.body.dataset.projectImageZoomBound = "true";

  ensureProjectImageLightbox();

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".project-image-bubble");
    if (!trigger) return;

    const wrap = trigger.closest(".project-image-wrap");
    const image = wrap?.querySelector(".project-image");
    if (!image) return;

    openProjectImageLightbox(image.currentSrc || image.src, image.alt);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProjectImageLightbox();
    }
  });
}

function createSkillCard(skill) {
  const article = document.createElement("article");
  article.className = "card skill-card magnetic-card reveal";

  const items = (skill.items || []).map((item) => `<li>${item}</li>`).join("");

  article.innerHTML = `
    <h4>${skill.title || ""}</h4>
    <ul>${items}</ul>
  `;

  return article;
}

function renderSkills() {
  const container = document.getElementById("skillList");
  if (!container || !Array.isArray(content?.skills)) return;

  container.innerHTML = "";
  content.skills.forEach((skill) => {
    container.appendChild(createSkillCard(skill));
  });
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "card project-card magnetic-card reveal";

  const imageBlock = project.image
    ? `<div class="project-image-wrap"><img class="project-image" src="${project.image}" alt="${project.title || "Projet"}" loading="lazy" /><button class="project-image-bubble" type="button" aria-label="Agrandir l'image du projet">Agrandir</button></div>`
    : "";

  const techList = (project.technologies || []).map((item) => `<li>${item}</li>`).join("");
  const githubLink = project.github
    ? `<a href="${project.github}" target="_blank" rel="noreferrer">Voir sur GitHub</a>`
    : "";

  article.innerHTML = `
    ${imageBlock}
    <h4>${project.title || ""}</h4>
    <p>${project.description || ""}</p>
    <ul>${techList}</ul>
    ${githubLink}
  `;

  return article;
}

function renderProjects() {
  const container = document.getElementById("projectList");
  if (!container || !Array.isArray(content?.projects)) return;

  container.innerHTML = "";
  content.projects.forEach((project) => {
    container.appendChild(createProjectCard(project));
  });
}

function createCertificationCard(certification) {
  const article = document.createElement("article");
  article.className = "card timeline-item magnetic-card reveal";

  const imagePath = certification.image || "";
  const isImagePdf = /\.pdf(\?|$)/i.test(imagePath);
  const pdfPath = certification.pdf || (isImagePdf ? imagePath : "");

  const imageBlock = imagePath && !isImagePdf
    ? `<div class="cert-image-wrap"><img class="cert-image" src="${imagePath}" alt="${certification.title || "Certification"}" loading="lazy" /></div>`
    : "";

  const pdfBlock = pdfPath
    ? `<a class="cert-pdf-link" href="${pdfPath}" target="_blank" rel="noreferrer">Voir le certificat (PDF)</a>`
    : "";

  article.innerHTML = `
    ${imageBlock}
    <h4>${certification.title || ""}</h4>
    <p>${certification.description || ""}</p>
    ${pdfBlock}
  `;

  return article;
}

function renderCertifications() {
  const container = document.getElementById("certificationList");
  if (!container || !Array.isArray(content?.certifications)) return;

  container.innerHTML = "";
  content.certifications.forEach((certification) => {
    container.appendChild(createCertificationCard(certification));
  });
}

function injectGoal() {
  injectText("goalText", content?.goal || "");
}

function renderContact() {
  const container = document.getElementById("contactList");
  if (!container || !Array.isArray(content?.contactLinks)) return;

  container.innerHTML = "";

  content.contactLinks.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.href || "#";
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = link.text || link.label || "Lien";

    if ((link.href || "").startsWith("mailto:")) {
      a.removeAttribute("target");
      a.removeAttribute("rel");
    }

    container.appendChild(a);
  });

  container.classList.add("magnetic-card");
}

function applyStaggerReveal() {
  const revealTargets = document.querySelectorAll(".reveal");

  revealTargets.forEach((element, index) => {
    const delay = Math.min(index * 70, 560);
    element.style.setProperty("--reveal-delay", `${delay}ms`);
  });
}

function initMagneticCards() {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const cards = document.querySelectorAll(".magnetic-card");
  cards.forEach((card) => {
    if (card.dataset.magneticBound === "true") return;

    card.dataset.magneticBound = "true";

    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      const rotateY = ((offsetX / rect.width) - 0.5) * 7;
      const rotateX = -((offsetY / rect.height) - 0.5) * 7;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

function initRevealOnScroll() {
  const revealTargets = document.querySelectorAll(".reveal:not(.revealed)");
  if (!revealTargets.length) return;

  if (!("IntersectionObserver" in window)) {
    revealTargets.forEach((element) => element.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          if (entry.target.dataset.section) {
            entry.target.classList.add("section-entered");
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((element) => observer.observe(element));
}

function setCurrentYear() {
  const yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
}

renderAll();
initProjectImageZoom();
initInteractiveTerminal();
initThemeToggle();
setCurrentYear();
