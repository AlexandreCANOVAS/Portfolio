// Modifie uniquement ce fichier pour mettre a jour ton portfolio.
// Tu peux ajouter/supprimer des elements dans les tableaux (skills, projects, certifications, contactLinks, etc.).

window.PORTFOLIO_CONTENT = {
  hero: {
    eyebrow: "Portfolio Alternance IT",
    name: "Alexandre Canovas",
    title: "Alternance Support Informatique / IT",
    pitch:
      "Etudiant en informatique (CESI) avec un parcours en securite terrain, oriente support utilisateur, maintenance systemes et assistance helpdesk. Je recherche une alternance pour contribuer rapidement en environnement IT."
  },
  about: {
    text:
      "Ancien gendarme puis agent de securite, j'ai developpe rigueur, gestion du stress et sens des responsabilites. En reconversion vers l'informatique, je me specialise en support, depannage systemes et bases reseau.",
    qualities: ["Rigueur", "Discipline", "Logique", "Autonomie", "Sens du service"]
  },
  skills: [
    {
      title: "Support & Systemes",
      items: [
        "Support utilisateur niveau 1",
        "Windows : installation, diagnostic, maintenance",
        "Navigation Linux / ligne de commande (bases)",
        "Resolution d'incidents materiels et logiciels"
      ]
    },
    {
      title: "Reseaux (bases)",
      items: [
        "Adressage IP et sous-reseaux",
        "DNS / DHCP",
        "Notions TCP/IP, routage et switching",
        "Diagnostic reseau de premier niveau"
      ]
    },
    {
      title: "Developpement Web",
      items: [
        "HTML / CSS / JavaScript",
        "Bases Svelte et Laravel",
        "Creation d'interfaces responsives",
        "Structure de mini-applications web"
      ]
    },
    {
      title: "Outils",
      items: [
        "Git & GitHub",
        "PowerShell (commandes essentielles)",
        "Organisation et documentation technique"
      ]
    }
  ],
  projects: [
    {
      title: "Bot Discord - Automatisation",
      description:
        "Developpement d'un bot pour automatiser des commandes, organiser des interactions utilisateurs et renforcer la logique evenementielle.",
      technologies: ["JavaScript", "Node.js", "Discord API"],
      github: "https://github.com/AlexandreCANOVAS"
    },
    {
      title: "Mini application web",
      description:
        "Creation d'une application web responsive avec formulaire, validation cote client et structure claire pour la maintenance.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/AlexandreCANOVAS"
    },
    {
      title: "Atelier maintenance PC",
      description:
        "Projet personnel de montage/demontage et diagnostic de pannes pour renforcer les reflexes support materiel.",
      technologies: ["Diagnostic materiel", "Windows", "Documentation"],
      github: "https://github.com/AlexandreCANOVAS"
    }
  ],
  certifications: [
    {
      title: "SSIAP 1",
      description: "Qualification securite incendie et assistance a personnes."
    },
    {
      title: "Cisco Networking Academy - Parcours Reseaux",
      description: "Bases solides en OSI, TCP/IP, routage et switching."
    },
    {
      title: "Gestionnaire en maintenance et support informatique (CESI)",
      description: "Formation Bac+2 orientee support, administration et reseau."
    }
  ],
  goal:
    "Je recherche une alternance en support informatique / helpdesk afin de renforcer mes competences terrain et evoluer vers un poste de technicien systemes et reseaux junior.",
  contactLinks: [
    {
      label: "Email",
      text: "alexandre.canovas111@gmail.com",
      href: "mailto:alexandre.canovas111@gmail.com"
    },
    {
      label: "LinkedIn",
      text: "linkedin.com/in/alexandre-canovas",
      href: "https://www.linkedin.com/in/alexandre-canovas"
    },
    {
      label: "GitHub",
      text: "github.com/AlexandreCANOVAS",
      href: "https://github.com/AlexandreCANOVAS"
    }
  ]
};
