import { Trade, AcademyLevel } from "../types";

export const TRADES: Trade[] = [
  {
    id: "masonry",
    title: "Maconnerie & Gros Oeuvre",
    icon: "Layers",
    description: "Formation complete en fondations, dosage beton, montage des agglos, coffrage, ferraillage, dallage et crepissage.",
    modules: [
      "Fondations et terrassement",
      "Dosage beton et mortier",
      "Montage des agglos",
      "Coffrage et decoffrage",
      "Ferraillage",
      "Dallage et chape",
      "Crepissage et enduits",
      "Lecture de plans"
    ]
  },
  {
    id: "plumbing",
    title: "Plomberie",
    icon: "Droplets",
    description: "Installation sanitaire complete, raccordements, evacuations, gestion de la pression et reparation de fuites.",
    modules: [
      "Installation sanitaire",
      "Raccordements et joints",
      "Systemes d'evacuation",
      "Gestion de la pression",
      "Reparation de fuites",
      "Pose WC et lavabo",
      "Lecture schemas plomberie",
      "Normes et securite"
    ]
  },
  {
    id: "electrical",
    title: "Electricite Batiment",
    icon: "Zap",
    description: "Circuits electriques, cablage, prises et interrupteurs, tableau electrique et securite electrique complete.",
    modules: [
      "Circuits electriques",
      "Cablage domestique",
      "Prises et interrupteurs",
      "Tableau electrique",
      "Securite electrique",
      "Installation complete batiment",
      "Normes NF C 15-100",
      "Depannage et diagnostic"
    ]
  },
  {
    id: "topography",
    title: "Topographie",
    icon: "Compass",
    description: "Lecture terrain, nivellement, implantation, mesures et maitrise des appareils topographiques modernes.",
    modules: [
      "Lecture de terrain",
      "Nivellement geometrique",
      "Implantation d'ouvrages",
      "Mesures et calculs",
      "Station totale",
      "GPS topographique",
      "Niveaux automatiques",
      "Plans topographiques"
    ]
  }
];

export const ACADEMY_LEVELS: AcademyLevel[] = [
  {
    id: "level-1",
    level: 1,
    title: "Initiation Professionnelle",
    duration: "6 mois",
    color: "#3B82F6",
    prerequisites: "Aucun diplome requis — accessible a tous",
    outcomes: [
      "Introduction au BTP",
      "Securite chantier",
      "Lecture basique des plans",
      "Dosage beton",
      "Outils de chantier",
      "Implantation simple"
    ],
    certification: "Certificat d'Initiation Professionnelle"
  },
  {
    id: "level-2",
    level: 2,
    title: "Ouvrier Qualifie",
    duration: "6 mois",
    color: "#F59E0B",
    prerequisites: "Niveau 1 valide ou experience equivalente",
    outcomes: [
      "Lecture de plans avancee",
      "Maconnerie moderne",
      "Topographie basique",
      "Beton arme",
      "Coffrage avance",
      "Introduction DAO"
    ],
    certification: "Certificat Professionnel Qualifie"
  },
  {
    id: "level-3",
    level: 3,
    title: "Technicien BTP",
    duration: "6 mois",
    color: "#10B981",
    prerequisites: "Niveau 2 ou Baccalaureat",
    outcomes: [
      "Metres et etude de prix",
      "AutoCAD",
      "Topographie avancee",
      "Organisation chantier",
      "Resistance des materiaux",
      "Suivi chantier"
    ],
    certification: "Diplome de Technicien"
  },
  {
    id: "level-4",
    level: 4,
    title: "Technicien Superieur",
    duration: "6 mois",
    color: "#6B7280",
    prerequisites: "Niveau 3 valide",
    outcomes: [
      "Gestion de projet",
      "Management chantier",
      "DAO avance",
      "Calcul de structures",
      "Devis quantitatifs",
      "Planification"
    ],
    certification: "Diplome de Technicien Superieur"
  },
  {
    id: "level-5",
    level: 5,
    title: "Specialisation / Expertise",
    duration: "6 mois",
    color: "#1F2937",
    prerequisites: "Niveau 4 valide",
    outcomes: [
      "Routes et VRD",
      "Structure beton avancee",
      "Architecture",
      "BIM (Building Information Modeling)",
      "Gestion grands projets",
      "Topographie experte"
    ],
    certification: "Certification Professionnelle d'Expertise"
  }
];

export const BTP_STATS = [
  { value: "80%", label: "Pratique terrain" },
  { value: "4", label: "Filieres" },
  { value: "5", label: "Niveaux" },
  { value: "6 mois", label: "Par niveau" }
];
