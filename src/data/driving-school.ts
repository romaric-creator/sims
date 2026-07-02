import { Permit, ProcessStep } from "../types";

export const PERMITS: Permit[] = [
  {
    id: "permit-a",
    category: "A",
    title: "Permis A — Moto",
    description: "Formation complete pour la conduite de motocyclettes. Theorie et pratique en conditions reelles de circulation.",
    duration: "1 a 2 mois",
    requirements: [
      "Avoir 18 ans minimum",
      "Piece d'identite valide",
      "Certificat medical d'aptitude",
      "4 photos d'identite"
    ]
  },
  {
    id: "permit-b",
    category: "B",
    title: "Permis B — Voiture",
    description: "Formation au permis de conduire pour vehicules legers. Apprentissage complet du code de la route et de la conduite pratique.",
    duration: "2 a 3 mois",
    requirements: [
      "Avoir 18 ans minimum",
      "Piece d'identite valide",
      "Certificat medical d'aptitude",
      "4 photos d'identite",
      "Frais d'inscription"
    ]
  },
  {
    id: "permit-c",
    category: "C",
    title: "Permis C — Poids Lourd",
    description: "Formation specialisee pour la conduite de vehicules lourds et de transport. Ideal pour les professionnels du transport.",
    duration: "2 a 4 mois",
    requirements: [
      "Avoir 21 ans minimum",
      "Permis B en cours de validite",
      "Certificat medical renforce",
      "4 photos d'identite",
      "Visite medicale approfondie"
    ]
  }
];

export const DRIVING_PROCESS: ProcessStep[] = [
  {
    title: "Inscription",
    description: "Deposez votre dossier complet et choisissez votre formule de formation.",
    icon: "FileText"
  },
  {
    title: "Code de la Route",
    description: "Formation theorique complete avec examens blancs reguliers.",
    icon: "BookOpen"
  },
  {
    title: "Conduite Pratique",
    description: "Heures de conduite avec un instructeur qualifie en conditions reelles.",
    icon: "Car"
  },
  {
    title: "Examen Final",
    description: "Passage de l'examen officiel avec accompagnement jusqu'a la reussite.",
    icon: "Award"
  }
];

export const DRIVING_STATS = [
  { value: "300+", label: "Permis delivres" },
  { value: "92%", label: "Reussite 1er passage" },
  { value: "3", label: "Categories de permis" },
  { value: "5", label: "Instructeurs certifies" }
];
