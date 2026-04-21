const projects = [
  {
    title: "Bot Discord - Automatisation",
    description:
      "Développement d'un bot pour automatiser des commandes, organiser des interactions utilisateurs et renforcer la logique événementielle.",
    technologies: ["JavaScript", "Node.js", "Discord API"],
    github: "https://github.com/AlexandreCANOVAS"
  },
  {
    title: "Mini application web",
    description:
      "Création d'une application web responsive avec formulaire, validation côté client et structure claire pour la maintenance.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/AlexandreCANOVAS"
  },
  {
    title: "Atelier maintenance PC",
    description:
      "Projet personnel de montage/démontage et diagnostic de pannes pour renforcer les réflexes support matériel.",
    technologies: ["Diagnostic matériel", "Windows", "Documentation"],
    github: "https://github.com/AlexandreCANOVAS"
  }
];

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "card project-card reveal";

  const techList = project.technologies.map((item) => `<li>${item}</li>`).join("");

  article.innerHTML = `
    <h4>${project.title}</h4>
    <p>${project.description}</p>
    <ul>${techList}</ul>
    <a href="${project.github}" target="_blank" rel="noreferrer">Voir sur GitHub</a>
  `;

  return article;
}

function renderProjects() {
  const container = document.getElementById("projectList");
  if (!container) return;

  projects.forEach((project) => {
    container.appendChild(createProjectCard(project));
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
  const revealedInitially = document.querySelectorAll(".reveal");
  if (!revealedInitially.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function setCurrentYear() {
  const yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
}

renderProjects();
initThemeToggle();
initRevealOnScroll();
setCurrentYear();
