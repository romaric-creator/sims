import { Department } from "../types";

export const DEPARTMENTS: Department[] = [
  {
    id: "language",
    name: "SafeFlight Language Center",
    shortName: "Language Center",
    tagline: "Centre de formation linguistique agree",
    route: "/safeflight-language",
    icon: "Globe",
    accentColor: "#3B82F6",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
    description: "Nos cours de langues sont specialement concus pour aider les etudiants et les professionnels a atteindre leurs objectifs d'immigration, d'etudes ou de travail a l'etranger.",
    highlights: [
      "Preparation TCF, TEF & IELTS",
      "Cours d'allemand A1 a B2",
      "Formations intensives et pratiques",
      "Suivi individualise"
    ]
  },
  {
    id: "driving",
    name: "SafeAuto Ecole",
    shortName: "Auto Ecole",
    tagline: "Formez-vous a conduire en toute confiance",
    route: "/safeauto",
    icon: "Car",
    accentColor: "#F59E0B",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    description: "SafeAuto Ecole forme les futurs conducteurs a conduire en toute securite et confiance avec des instructeurs qualifies.",
    highlights: [
      "Permis A, B et C",
      "Code de la route complet",
      "Cours acceleres disponibles",
      "Conduite accompagnee"
    ]
  },
  {
    id: "consulting",
    name: "SafeFlight Consulting",
    shortName: "Consulting",
    tagline: "Votre passerelle vers l'international",
    route: "/safeflight-consulting",
    icon: "Plane",
    accentColor: "#8B5CF6",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80",
    description: "SafeFlight Consulting facilite vos demarches pour etudier, travailler ou vous installer a l'etranger dans les meilleures conditions.",
    highlights: [
      "7 destinations disponibles",
      "Admission rapide garantie",
      "Accompagnement complet visa",
      "Universites partenaires"
    ]
  },
  {
    id: "btp-academy",
    name: "Academie Professionnelle BTP",
    shortName: "Academie BTP",
    tagline: "Former les batisseurs de demain",
    route: "/academie-btp",
    icon: "HardHat",
    accentColor: "#EF4444",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    description: "L'Academie forme une nouvelle generation de professionnels competents et directement operationnels dans les metiers du batiment.",
    highlights: [
      "80% pratique, 20% theorie",
      "4 filieres specialisees",
      "5 niveaux de progression",
      "Stages sur chantiers reels"
    ]
  }
];
