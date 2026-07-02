import { Destination } from "../types";

export const DESTINATIONS: Destination[] = [
  {
    id: "canada",
    country: "Canada",
    flag: "🇨🇦",
    type: "studies",
    processingTime: "3 a 6 mois",
    description: "Programmes d'etudes dans les universites et colleges partenaires. Admission rapide et assistance complete jusqu'a l'obtention du visa.",
    programs: [
      {
        id: "canada-studies",
        title: "Etudes universitaires",
        description: "Admission dans nos universites et colleges partenaires avec accompagnement complet.",
        eligibility: ["Baccalaureat ou equivalent", "Score TCF/TEF requis", "Capacite financiere demontree"]
      },
      {
        id: "canada-rp",
        title: "Residence Permanente",
        description: "Procedure de Residence Permanente accessible aux diplomes universitaires.",
        eligibility: ["Diplome obtenu au Canada", "Experience professionnelle", "Score linguistique CLB 7+"]
      }
    ]
  },
  {
    id: "france",
    country: "France",
    flag: "🇫🇷",
    type: "studies",
    processingTime: "3 jours (admission)",
    description: "Admission garantie en 3 jours grace a nos universites partenaires. Accompagnement complet pour Campus France.",
    programs: [
      {
        id: "france-studies",
        title: "Etudes en France",
        description: "Accompagnement complet pour la procedure Campus France et la demande de visa etudiant.",
        eligibility: ["Baccalaureat", "Score TCF/TEF B2 minimum", "Dossier Campus France"]
      }
    ]
  },
  {
    id: "belgique",
    country: "Belgique",
    flag: "🇧🇪",
    type: "studies",
    processingTime: "10 jours (admission)",
    description: "Admission expresse en 10 jours. Universites francophones reconnues pour la qualite de leurs formations.",
    programs: [
      {
        id: "belgique-studies",
        title: "Etudes en Belgique",
        description: "Universites francophones de qualite avec assistance complete pour le dossier et le visa.",
        eligibility: ["Baccalaureat", "Equivalence de diplome", "Preuve de moyens financiers"]
      }
    ]
  },
  {
    id: "allemagne",
    country: "Allemagne",
    flag: "🇩🇪",
    type: "studies",
    processingTime: "2 a 4 mois",
    description: "Etudes dans des etablissements reconnus avec possibilite de bourses partielles. Preparation linguistique incluse.",
    programs: [
      {
        id: "allemagne-studies",
        title: "Etudes en Allemagne",
        description: "Etablissements reconnus avec preparation linguistique en allemand avant le depart.",
        eligibility: ["Baccalaureat", "Niveau B1 allemand minimum", "Lettre de motivation"]
      }
    ]
  },
  {
    id: "roumanie",
    country: "Roumanie",
    flag: "🇷🇴",
    type: "work",
    processingTime: "1 a 3 mois",
    description: "Contrats de travail certifies dans les domaines techniques : Batiment, Electricite, Plomberie.",
    programs: [
      {
        id: "roumanie-work",
        title: "Travail en Roumanie",
        description: "Contrats de travail certifies avec accompagnement jusqu'a l'obtention du visa de travail.",
        eligibility: ["Experience en BTP/technique", "Passeport valide", "Certificat medical"]
      }
    ]
  },
  {
    id: "russie",
    country: "Russie",
    flag: "🇷🇺",
    type: "studies",
    processingTime: "2 a 3 mois",
    description: "Etudes dans des universites prestigieuses a frais abordables. Programme adapte aux etudiants francophones.",
    programs: [
      {
        id: "russie-studies",
        title: "Etudes en Russie",
        description: "Universites prestigieuses a frais abordables avec assistance pour la lettre d'invitation et le visa.",
        eligibility: ["Baccalaureat", "Lettre d'invitation universitaire", "Assurance medicale"]
      }
    ]
  },
  {
    id: "bielorussie",
    country: "Bielorussie",
    flag: "🇧🇾",
    type: "studies",
    processingTime: "2 a 4 semaines",
    description: "Programmes d'etudes courts et intensifs (jusqu'a 3 semaines). Ideal pour des formations pratiques et immersives.",
    programs: [
      {
        id: "bielorussie-studies",
        title: "Formations intensives",
        description: "Programmes courts et immersifs avec assistance complete de l'inscription a l'arrivee.",
        eligibility: ["Passeport valide", "Frais de formation", "Assurance voyage"]
      }
    ]
  }
];

export const CONSULTING_PROCESS = [
  {
    title: "Consultation gratuite",
    description: "Analyse de votre profil et orientation vers le programme adapte a vos objectifs.",
    icon: "MessageCircle"
  },
  {
    title: "Constitution du dossier",
    description: "Preparation complete de votre dossier avec tous les documents requis.",
    icon: "FolderOpen"
  },
  {
    title: "Soumission & Suivi",
    description: "Depot de votre candidature et suivi en temps reel de l'avancement.",
    icon: "Send"
  },
  {
    title: "Obtention du visa",
    description: "Accompagnement jusqu'a la delivrance de votre visa et preparation au depart.",
    icon: "CheckCircle"
  }
];

export const CONSULTING_STATS = [
  { value: "200+", label: "Visas obtenus" },
  { value: "7", label: "Destinations" },
  { value: "98%", label: "Satisfaction client" },
  { value: "15+", label: "Universites partenaires" }
];
