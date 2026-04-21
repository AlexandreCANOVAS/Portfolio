// Modifie uniquement ce fichier pour mettre à jour ton portfolio.
// Tu peux ajouter/supprimer des éléments dans les tableaux (skills, projects, certifications, contactLinks, etc.).

window.PORTFOLIO_CONTENT = {
  hero: {
    eyebrow: "Portfolio Alternance IT",
    name: "Alexandre Canovas",
    title: "Alternance Support Informatique / IT",
    pitch:
      "Admis à l’école d’ingénieurs CESI pour la rentrée de septembre 2026 en informatique, je prépare la formation Gestionnaire en maintenance et support informatique (Bac+2), orientée support utilisateur, administration systèmes et réseaux. Issu d’un parcours en sécurité terrain, je m’oriente vers les métiers du support IT et de la maintenance informatique. Je recherche une alternance afin de développer mes compétences techniques et contribuer efficacement en environnement IT (helpdesk / systèmes et réseaux)."
  },

  goal:
    "Je recherche une alternance en support informatique / helpdesk afin de développer mes compétences techniques en environnement professionnel, renforcer mon expérience terrain et évoluer progressivement vers un poste de technicien systèmes et réseaux junior, au sein d’une équipe IT.",
  about: {
    text:
      "Ancien gendarme puis agent de sécurité, j'ai développé rigueur, gestion du stress et sens des responsabilités. En reconversion vers l'informatique, je me spécialise en support, dépannage systèmes et bases réseau.",
    qualities: ["Rigueur", "Discipline", "Logique", "Autonomie", "Sens du service"]
  },
  whyMe:
    "Avec un parcours hybride sécurité et informatique, j'apporte une discipline opérationnelle, une forte rigueur et une vraie maîtrise du travail en environnement structuré. Habitué à gérer la pression et les priorités, je veux devenir un technicien systèmes et réseaux fiable, réactif et orienté service utilisateur.",
  skills: [
    {
      title: "Support & Systèmes",
      items: [
        "Support utilisateur niveau 1",
        "Windows : installation, diagnostic, maintenance",
        "Navigation Linux / ligne de commande (bases)",
        "Résolution d'incidents matériels et logiciels"
      ]
    },
    {
      title: "Réseaux (bases)",
      items: [
        "Adressage IP et sous-réseaux",
        "DNS / DHCP",
        "Notions TCP/IP, routage et switching",
        "Diagnostic réseau de premier niveau"
      ]
    },
    {
      title: "Développement Web",
      items: [
        "HTML / CSS / JavaScript",
        "Bases Svelte et Laravel",
        "Création d'interfaces responsives",
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
      title: "Atelier maintenance PC",
      description:
        "Projet personnel de montage/démontage et diagnostic de pannes pour renforcer les réflexes support matériel.",
      technologies: ["Diagnostic matériel", "Windows", "Documentation"],
      image: "assets/projects/IMG_4436.jpeg"
    },
    {
      title: "Bot Discord - Automatisation",
      description:
        "Développement d'un bot pour automatiser des commandes, organiser des interactions utilisateurs et renforcer la logique événementielle.",
      technologies: ["JavaScript", "Node.js", "Discord API"],
      image: "assets/projects/Capture d’écran 2026-02-19 164153.png",
      github: "https://github.com/AlexandreCANOVAS/BOT-WOLF-V2-RDR"
    },
    {
      title: "Application web FiveM",
      description:
        "Développement d’un projet lié à l’environnement FiveM, incluant la création et la gestion de scripts ou fonctionnalités serveur afin d’améliorer l’expérience utilisateur et l’interaction en jeu.",
      technologies: ["HTML", "CSS", "TypeScripts", "MongoDB", "MySQL"],
      image: "assets/projects/Capture d’écran 2026-02-23 025057.png",
      github: "https://github.com/AlexandreCANOVAS/SITE-BOT-RP"
    },
    {
      title: "Site web gestion de planning",
      description:
        "Gestion et création de planning, calcul automatique des heures, fiches employés, etc.",
      technologies: ["JavaScript", "CSS", "Blade", "PHP","MySQL"],
      image: "assets/projects/IMG_2223 (1).jpg",
      github: "https://github.com/AlexandreCANOVAS/planning-app"
    },
    
  ],
  certifications: [

    {
      title: "Gestionnaire en maintenance et support informatique CESI (en cours)",
      description: "Formation Bac+2 orientée support, administration et réseau.",
      image: "",
      pdf: ""
    },

     {
      title: "Cisco Networking Academy - Notions de base du matériel informatique",
      description: "Apprendre les bases du matériel informatique et découvrir les composants des PC, des ordinateurs portables et des terminaux mobiles",
      image: "assets/certifications/Computer_Hardware_Basics_certificate_alexandre-canovas111-gmail-com_05d8107f-70da-4a8b-96e9-e75f55ee0222.pdf",
      pdf: "assets/certifications/Computer_Hardware_Basics_certificate_alexandre-canovas111-gmail-com_05d8107f-70da-4a8b-96e9-e75f55ee0222.pdf"
    },
    {
      title: "Certificat de réussite HTML & CSS",
      description: "Base de programmation HTML & CSS",
      image: "assets/certifications/assets/certifications/4f0b79b2-0f15-41dd-ac16-49e231839e14.pdf",
      pdf: "assets/certifications/4f0b79b2-0f15-41dd-ac16-49e231839e14.pdf"
    },

    {
      title: "BAC STI2D option systèmes d'information et numérique",
      description: "",
      image: "assets/certifications/Attestation.pdf",
      pdf: "assets/certifications/Attestation.pdf"
    },
   
    
  ],
  
  contactLinks: [
    {
      label: "Téléphone",
      text: "07 81 35 47 12",
      href: "tel:0612345678"
    },
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
