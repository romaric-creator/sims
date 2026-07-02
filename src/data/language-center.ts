import { Course } from "../types";

export const COURSES: Course[] = [
  {
    id: "tcf",
    language: "french",
    title: "Preparation TCF",
    exam: "TCF Canada / TCF Tout Public",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    duration: "2 a 4 mois",
    description: "Preparation complete aux tests TCF Canada et TCF Tout Public. Cours axes sur les 4 competences evaluees.",
    benefits: [
      "Comprehension orale intensive",
      "Comprehension ecrite avancee",
      "Expression orale structuree",
      "Expression ecrite methodique",
      "Simulations d'examen chaque semaine",
      "Correction personnalisee"
    ]
  },
  {
    id: "tef",
    language: "french",
    title: "Preparation TEF",
    exam: "TEF Canada",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    duration: "2 a 4 mois",
    description: "Formation intensive pour le TEF Canada. Entrainement sur les formats officiels d'examen avec suivi individualise.",
    benefits: [
      "Maitrise du format TEF",
      "Strategies de reponse rapide",
      "Vocabulaire cible immigration",
      "Tests blancs conditions reelles",
      "Feedback detaille par competence",
      "Accompagnement jusqu'a l'examen"
    ]
  },
  {
    id: "ielts",
    language: "english",
    title: "Preparation IELTS",
    exam: "IELTS Academic & General",
    levels: ["A2", "B1", "B2", "C1"],
    duration: "2 a 3 mois",
    description: "Preparation au test IELTS Academic et General. Methodes modernes basees sur des simulations reelles d'examens.",
    benefits: [
      "Listening & Reading strategies",
      "Writing Task 1 & 2 mastery",
      "Speaking mock interviews",
      "Score target 6.5 - 8.0",
      "Suivi individualise",
      "Ressources Cambridge officielles"
    ]
  },
  {
    id: "german",
    language: "german",
    title: "Cours d'Allemand",
    exam: "Goethe-Zertifikat",
    levels: ["A1", "A2", "B1", "B2"],
    duration: "3 a 6 mois",
    description: "Formation complete de niveau A1 a B2. Cours axes sur la communication pratique et la preparation aux examens Goethe.",
    benefits: [
      "Communication pratique quotidienne",
      "Grammaire progressive",
      "Preparation examens Goethe",
      "Culture germanophone",
      "Ideal pour immigration Allemagne",
      "Supports multimedia modernes"
    ]
  }
];

export const LANGUAGE_STATS = [
  { value: "500+", label: "Etudiants formes" },
  { value: "95%", label: "Taux de reussite" },
  { value: "4", label: "Tests prepares" },
  { value: "3", label: "Langues enseignees" }
];
