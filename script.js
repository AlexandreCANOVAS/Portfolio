const STORAGE_KEY = "portfolio-content";
const defaultContent = window.PORTFOLIO_CONTENT || {};
let content = loadContent();
let constellationState = null;

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function startBootSequence() {
  const bootScreen = document.getElementById("bootScreen");
  const bootLog = document.getElementById("bootLog");

  if (!bootScreen || !bootLog) {
    return Promise.resolve();
  }

  const lines = [
    "> Chargement du profil candidat...",
    "> Initialisation modules: support, reseau, maintenance...",
    "> Verification des sections portfolio...",
    "> Synchronisation projets et competences...",
    "> Systeme pret. Bienvenue recruteur IT."
  ];

  document.body.classList.add("preboot");
  bootScreen.classList.add("active");
  bootLog.textContent = "";

  return new Promise((resolve) => {
    let index = 0;
    const timer = setInterval(() => {
      bootLog.textContent += `${lines[index]}\n`;
      bootLog.scrollTop = bootLog.scrollHeight;
      index += 1;

      if (index >= lines.length) {
        clearInterval(timer);
        setTimeout(() => {
          bootScreen.classList.add("done");
          document.body.classList.remove("preboot");
          setTimeout(resolve, 380);
        }, 360);
      }
    }, 260);
  });
}

function initConstellation() {
  const canvas = document.getElementById("constellationCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const sectionIds = ["hero", "about", "skills", "projects", "certifications", "goal", "contact"];

  constellationState = {
    canvas,
    ctx,
    sectionIds,
    mouseX: window.innerWidth * 0.5,
    mouseY: window.innerHeight * 0.25,
    time: 0,
    rafId: null
  };

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const draw = () => {
    if (!constellationState) return;

    const { canvas: c, ctx: context, sectionIds: ids } = constellationState;
    constellationState.time += 0.015;
    context.clearRect(0, 0, c.width, c.height);

    const points = ids
      .map((id, index) => {
        const section = document.getElementById(id);
        if (!section) return null;

        const rect = section.getBoundingClientRect();
        const yCenter = rect.top + Math.min(110, rect.height * 0.45);
        const floatOffset = Math.sin(constellationState.time + index) * 6;

        return {
          x: rect.left + rect.width * 0.5,
          y: yCenter + floatOffset,
          active: rect.bottom > -80 && rect.top < window.innerHeight + 80
        };
      })
      .filter(Boolean);

    context.lineWidth = 1;

    for (let i = 0; i < points.length - 1; i += 1) {
      const from = points[i];
      const to = points[i + 1];
      if (!from.active && !to.active) continue;

      const alpha = 0.1 + (Math.sin(constellationState.time * 1.6 + i) + 1) * 0.08;
      context.strokeStyle = `rgba(112, 210, 255, ${alpha.toFixed(3)})`;
      context.beginPath();
      context.moveTo(from.x, from.y);
      context.lineTo(to.x, to.y);
      context.stroke();
    }

    points.forEach((point, index) => {
      if (!point.active) return;

      const pulse = 2.2 + (Math.sin(constellationState.time * 2.4 + index) + 1) * 1.2;
      context.fillStyle = "rgba(128, 222, 255, 0.9)";
      context.beginPath();
      context.arc(point.x, point.y, pulse, 0, Math.PI * 2);
      context.fill();

      const dist = Math.hypot(point.x - constellationState.mouseX, point.y - constellationState.mouseY);
      if (dist < 170) {
        context.strokeStyle = "rgba(88, 214, 255, 0.28)";
        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineTo(constellationState.mouseX, constellationState.mouseY);
        context.stroke();
      }
    });

    constellationState.rafId = requestAnimationFrame(draw);
  };

  resize();
  draw();

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", (event) => {
    if (!constellationState) return;
    constellationState.mouseX = event.clientX;
    constellationState.mouseY = event.clientY;
  });
  window.addEventListener("scroll", () => {
    if (constellationState && !constellationState.rafId) {
      constellationState.rafId = requestAnimationFrame(() => {
        constellationState.rafId = null;
      });
    }
  });
}

function loadContent() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return cloneData(defaultContent);
  }

  try {
    const parsed = JSON.parse(saved);
    if (parsed && typeof parsed === "object") {
      return parsed;
    }
  } catch (error) {
    console.error("Contenu local invalide, retour au contenu par defaut.", error);
  }

  return cloneData(defaultContent);
}

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

function renderAll() {
  injectHero();
  injectAbout();
  renderSkills();
  renderProjects();
  renderCertifications();
  injectGoal();
  renderContact();
  applyStaggerReveal();
  initRevealOnScroll();
  initMagneticCards();
}

function setEditorState(isOpen) {
  const panel = document.getElementById("editorPanel");
  if (!panel) return;

  panel.classList.toggle("open", isOpen);
  panel.setAttribute("aria-hidden", String(!isOpen));
}

function syncEditorValue() {
  const textarea = document.getElementById("contentEditor");
  if (!textarea) return;

  textarea.value = JSON.stringify(content, null, 2);
}

function initEditorPanel() {
  const toggle = document.getElementById("editToggle");
  const panel = document.getElementById("editorPanel");
  const close = document.getElementById("editorClose");
  const apply = document.getElementById("editorApply");
  const reset = document.getElementById("editorReset");
  const textarea = document.getElementById("contentEditor");

  if (!toggle || !panel || !close || !apply || !reset || !textarea) return;

  toggle.addEventListener("click", () => {
    syncEditorValue();
    setEditorState(true);
  });

  close.addEventListener("click", () => {
    setEditorState(false);
  });

  panel.addEventListener("click", (event) => {
    if (event.target === panel) {
      setEditorState(false);
    }
  });

  apply.addEventListener("click", () => {
    try {
      const parsed = JSON.parse(textarea.value);
      if (!parsed || typeof parsed !== "object") {
        alert("Le JSON doit representer un objet.");
        return;
      }

      content = parsed;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
      renderAll();
      setEditorState(false);
    } catch (error) {
      alert("JSON invalide. Verifie la syntaxe avant d'appliquer.");
      console.error(error);
    }
  });

  reset.addEventListener("click", () => {
    content = cloneData(defaultContent);
    localStorage.removeItem(STORAGE_KEY);
    renderAll();
    syncEditorValue();
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

  const techList = (project.technologies || []).map((item) => `<li>${item}</li>`).join("");
  const githubLink = project.github
    ? `<a href="${project.github}" target="_blank" rel="noreferrer">Voir sur GitHub</a>`
    : "";

  article.innerHTML = `
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

  article.innerHTML = `
    <h4>${certification.title || ""}</h4>
    <p>${certification.description || ""}</p>
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

function initThemeToggle() {
  const button = document.getElementById("themeToggle");
  if (!button) return;

  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    button.innerHTML = "<span>☀️</span>";
  }

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
    button.innerHTML = isDark ? "<span>☀️</span>" : "<span>🌙</span>";
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
initEditorPanel();
initThemeToggle();
initConstellation();
setCurrentYear();
startBootSequence();
