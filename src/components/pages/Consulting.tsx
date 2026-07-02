import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  UserCheck,
  FolderOpen,
  Languages,
  Stamp,
  Home,
  Luggage,
  Clock,
  ChevronRight,
} from "lucide-react";

import PageHero from "../shared/PageHero";
import SectionHeader from "../shared/SectionHeader";
import StatsCounter from "../shared/StatsCounter";
import ProcessSteps from "../shared/ProcessSteps";
import CTABanner from "../shared/CTABanner";

import {
  DESTINATIONS,
  CONSULTING_PROCESS,
  CONSULTING_STATS,
} from "../../data/consulting";

type FilterType = "all" | "studies" | "work";

const SERVICES = [
  {
    icon: UserCheck,
    title: "Analyse de profil",
    description:
      "Evaluation complete de votre parcours et orientation vers le programme ideal.",
  },
  {
    icon: FolderOpen,
    title: "Constitution du dossier",
    description:
      "Preparation et verification de tous les documents requis pour votre candidature.",
  },
  {
    icon: Languages,
    title: "Preparation linguistique",
    description:
      "Formation en langues et preparation aux tests exiges par les institutions.",
  },
  {
    icon: Stamp,
    title: "Demande de visa",
    description:
      "Accompagnement complet pour le depot et le suivi de votre demande de visa.",
  },
  {
    icon: Home,
    title: "Logement",
    description:
      "Assistance dans la recherche et la reservation de votre logement a destination.",
  },
  {
    icon: Luggage,
    title: "Preparation au depart",
    description:
      "Briefing complet sur la vie sur place, les demarches a l'arrivee et les contacts utiles.",
  },
];

export default function Consulting() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredDestinations = DESTINATIONS.filter((dest) => {
    if (activeFilter === "all") return true;
    return dest.type === activeFilter;
  });

  return (
    <>
      {/* HERO */}
      <PageHero
        image="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1600&q=80"
        title="SafeFlight Consulting"
        subtitle="Votre passerelle vers l'international — Etudes, travail et immigration"
        badge="Immigration & Etudes"
      />

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#006767] mb-6">
              Facilitez vos demarches internationales
            </h2>
            <p className="text-[#3D4949] leading-relaxed mb-4">
              SafeFlight Consulting vous accompagne dans toutes vos procedures
              pour etudier, travailler ou vous installer a l'etranger. Notre
              equipe d'experts simplifie chaque etape, de la constitution du
              dossier jusqu'a votre installation dans le pays de destination.
            </p>
            <p className="text-[#3D4949] leading-relaxed">
              Grace a nos collaborations avec des universites partenaires, des
              entreprises etrangeres et des institutions gouvernementales, nous
              vous offrons un accompagnement sur mesure et des taux de reussite
              exceptionnels.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <StatsCounter stats={CONSULTING_STATS} />
          </motion.div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-24 bg-[#F0F4F4]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader title="Nos Destinations" />

          {/* Filter tabs */}
          <div className="flex items-center justify-center gap-3 mt-10 mb-10">
            {([
              { key: "all", label: "Toutes" },
              { key: "studies", label: "Etudes" },
              { key: "work", label: "Travail" },
            ] as { key: FilterType; label: string }[]).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-5 py-2 rounded-md text-sm font-semibold transition-colors ${
                  activeFilter === tab.key
                    ? "bg-[#006767] text-white"
                    : "bg-white text-[#3D4949] hover:bg-[#006767]/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Destination cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                className="group bg-white rounded-xl p-6 border shadow-xs hover:shadow-md transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{dest.flag}</span>
                  <h3 className="font-display font-bold text-lg text-[#006767]">
                    {dest.country}
                  </h3>
                </div>

                {/* Type badge */}
                <span
                  className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded mb-3 ${
                    dest.type === "studies"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {dest.type === "studies" ? "Etudes" : "Travail"}
                </span>

                {/* Processing time pill */}
                <div className="flex items-center gap-1.5 text-xs text-[#3D4949] mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{dest.processingTime}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#3D4949] leading-relaxed mb-4">
                  {dest.description}
                </p>

                {/* Programs */}
                <ul className="space-y-1.5 mb-5">
                  {dest.programs.map((program) => (
                    <li
                      key={program.id}
                      className="flex items-start gap-2 text-sm text-[#3D4949]"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#00CED1] mt-0.5 shrink-0" />
                      <span>{program.title}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA link */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#006767] hover:text-[#00CED1] transition-colors"
                >
                  Demander une consultation
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader title="Notre Processus" />

          <div className="mt-12">
            <ProcessSteps steps={CONSULTING_PROCESS} />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-[#F8FAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader title="Services inclus" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-11 h-11 rounded-lg bg-[#006767]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#006767]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#006767] mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#3D4949] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Votre avenir international commence ici"
        subtitle="Prenez rendez-vous pour une consultation gratuite et decouvrez les opportunites qui s'offrent a vous."
        buttonText="Consultation gratuite"
        buttonLink="/contact"
      />
    </>
  );
}
