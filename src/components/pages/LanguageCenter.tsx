import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

import PageHero from "../shared/PageHero";
import SectionHeader from "../shared/SectionHeader";
import StatsCounter from "../shared/StatsCounter";
import ProcessSteps from "../shared/ProcessSteps";
import CTABanner from "../shared/CTABanner";

import { COURSES, LANGUAGE_STATS } from "../../data/language-center";

const FLAG_MAP: Record<string, string> = {
  french: "\u{1F1EB}\u{1F1F7}",
  english: "\u{1F1EC}\u{1F1E7}",
  german: "\u{1F1E9}\u{1F1EA}",
};

const processSteps = [
  {
    title: "Test de niveau",
    description: "Evaluation gratuite de votre niveau actuel",
    icon: "ClipboardCheck",
  },
  {
    title: "Programme personnalise",
    description: "Plan de formation adapte a vos objectifs et deadlines",
    icon: "Target",
  },
  {
    title: "Formation intensive",
    description:
      "Cours en petits groupes avec simulations d'examens regulieres",
    icon: "BookOpen",
  },
  {
    title: "Passage du test",
    description: "Accompagnement jusqu'a l'obtention du score vise",
    icon: "Award",
  },
];

export default function LanguageCenter() {
  return (
    <>
      {/* HERO */}
      <PageHero
        image="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&q=80"
        title="SafeFlight Language Center"
        subtitle="Centre de formation linguistique agree — Preparez vos tests de langue avec les meilleurs formateurs"
        badge="Langues & Tests"
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
              Votre reussite linguistique commence ici
            </h2>
            <p className="text-[#3D4949] leading-relaxed mb-4">
              Le SafeFlight Language Center accompagne etudiants et
              professionnels dans l'atteinte de leurs objectifs d'immigration,
              d'etudes ou de travail a l'international. Nos formations intensives
              et pratiques sont adaptees a tous les niveaux, du debutant au
              confirme.
            </p>
            <p className="text-[#3D4949] leading-relaxed">
              Nos formateurs certifies utilisent des methodes modernes basees sur
              la pratique reelle des examens. Chaque programme est concu pour
              maximiser votre score dans les delais les plus courts possibles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <StatsCounter stats={LANGUAGE_STATS} />
          </motion.div>
        </div>
      </section>

      {/* COURSES */}
      <section className="py-24 bg-[#F0F4F4]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader title="Nos Formations" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {COURSES.map((course, index) => (
              <motion.div
                key={course.id}
                className="bg-white rounded-xl p-8 border shadow-xs hover:shadow-md transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">
                    {FLAG_MAP[course.language]}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#006767]">
                      {course.title}
                    </h3>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-[#00CED1]/15 text-[#006767] text-xs font-semibold rounded">
                      {course.exam}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#3D4949] text-sm leading-relaxed mb-5">
                  {course.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-5">
                  {course.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[#3D4949]"
                    >
                      <CheckCircle className="w-4 h-4 text-[#00CED1] mt-0.5 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Duration pill */}
                <span className="inline-block px-3 py-1 bg-[#F0F4F4] text-[#006767] text-xs font-semibold rounded-full">
                  Duree : {course.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader title="Comment ca marche" />

          <div className="mt-12">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Pret a atteindre votre objectif linguistique ?"
        subtitle="Inscrivez-vous maintenant et commencez votre preparation avec nos formateurs experts."
        buttonText="S'inscrire"
        buttonLink="/contact"
      />
    </>
  );
}
