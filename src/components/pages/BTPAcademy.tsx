import { motion } from "motion/react";
import {
  Layers,
  Droplets,
  Zap,
  Compass,
  Hammer,
  HardHat,
  MapPin,
  ClipboardCheck,
} from "lucide-react";

import PageHero from "../shared/PageHero";
import SectionHeader from "../shared/SectionHeader";
import StatsCounter from "../shared/StatsCounter";
import CTABanner from "../shared/CTABanner";

import { TRADES, ACADEMY_LEVELS, BTP_STATS } from "../../data/btp-academy";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Droplets,
  Zap,
  Compass,
};

const ICON_COLORS: Record<string, string> = {
  Layers: "bg-blue-100 text-blue-600",
  Droplets: "bg-cyan-100 text-cyan-600",
  Zap: "bg-amber-100 text-amber-600",
  Compass: "bg-emerald-100 text-emerald-600",
};

const PEDAGOGY = [
  {
    icon: Hammer,
    title: "80% Pratique",
    description:
      "L'apprentissage se fait sur le terrain, les mains dans le ciment. La theorie accompagne la pratique, jamais l'inverse.",
  },
  {
    icon: HardHat,
    title: "Chantier Ecole",
    description:
      "Un chantier reel sert de salle de classe. Les apprenants construisent des ouvrages concrets des le premier mois.",
  },
  {
    icon: MapPin,
    title: "Stages Terrain",
    description:
      "Des immersions regulieres sur des chantiers partenaires pour confronter les acquis a la realite du metier.",
  },
  {
    icon: ClipboardCheck,
    title: "Evaluations Continues",
    description:
      "Pas d'examen final unique. L'evaluation est permanente, basee sur la maitrise des gestes et la qualite du travail.",
  },
];

export default function BTPAcademy() {
  return (
    <>
      {/* HERO */}
      <PageHero
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
        title="Academie Professionnelle BTP"
        subtitle="Former les batisseurs de demain — 80% pratique, 20% theorie"
        badge="Formation BTP"
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
              Former une nouvelle generation de professionnels
            </h2>
            <p className="text-[#3D4949] leading-relaxed mb-4">
              L'Academie Professionnelle BTP forme une nouvelle generation de
              professionnels competents, disciplines et immediatement
              operationnels dans les metiers de la construction.
            </p>
            <p className="text-[#3D4949] leading-relaxed">
              Notre mission : combler le deficit de main-d'oeuvre qualifiee dans
              les secteurs du batiment et des travaux publics, en offrant une
              formation intensive axee sur la pratique terrain.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <StatsCounter stats={BTP_STATS} />
          </motion.div>
        </div>
      </section>

      {/* TRADES */}
      <section className="py-24 bg-[#F0F4F4]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader title="Nos Filieres" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {TRADES.map((trade, index) => {
              const Icon = ICON_MAP[trade.icon];
              const colorClass = ICON_COLORS[trade.icon] || "bg-gray-100 text-gray-600";
              return (
                <motion.div
                  key={trade.id}
                  className="bg-white rounded-xl p-8 border shadow-xs hover:shadow-md transition"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={`w-14 h-14 rounded-full ${colorClass} flex items-center justify-center mb-5`}
                  >
                    {Icon && <Icon className="w-7 h-7" />}
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#006767] mb-3">
                    {trade.title}
                  </h3>

                  <p className="text-[#3D4949] text-sm leading-relaxed mb-5">
                    {trade.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {trade.modules.map((mod, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-[#3D4949]"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#00CED1] shrink-0" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEVELS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader
            title="Parcours de Formation"
            subtitle="Chaque niveau dure 6 mois — arretez quand vous voulez ou continuez jusqu'au sommet"
          />

          <div className="mt-12 relative">
            {/* Vertical connecting line */}
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-[#00CED1]/30" />

            <div className="space-y-8">
              {ACADEMY_LEVELS.map((level, index) => (
                <motion.div
                  key={level.id}
                  className="flex gap-6 relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Level circle */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-bold text-xl shrink-0 z-10"
                    style={{ backgroundColor: level.color }}
                  >
                    {level.level}
                  </div>

                  {/* Content */}
                  <div className="bg-[#F8FAFA] rounded-xl p-6 border flex-1">
                    <h3 className="font-display font-bold text-lg text-[#006767] mb-1">
                      {level.title}
                    </h3>
                    <p className="text-sm text-[#3D4949] mb-2">
                      Duree : {level.duration}
                    </p>
                    <p className="text-sm italic text-[#3D4949] mb-3">
                      {level.prerequisites}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {level.outcomes.map((outcome, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white border border-[#00CED1]/30 text-[#3D4949] text-xs rounded-full"
                        >
                          {outcome}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm font-bold text-[#006767]">
                      {level.certification}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PEDAGOGY */}
      <section className="py-20 bg-[#F8FAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader title="Notre Approche Pedagogique" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {PEDAGOGY.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg border hover:shadow-md transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#00CED1]/15 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#006767]" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#006767] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#3D4949] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* UNIFORMS */}
      <section className="py-16 bg-[#006767] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-8">
            Systeme de tenues par niveau
          </h3>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {ACADEMY_LEVELS.map((level) => (
              <motion.div
                key={level.id}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: level.level * 0.1 }}
              >
                <div
                  className="w-10 h-10 rounded-full border-2 border-white/40"
                  style={{ backgroundColor: level.color }}
                />
                <span className="text-xs text-slate-200">
                  Niveau {level.level}
                </span>
                <span className="text-xs font-semibold">
                  {level.level === 1 && "Bleu"}
                  {level.level === 2 && "Orange"}
                  {level.level === 3 && "Vert"}
                  {level.level === 4 && "Gris"}
                  {level.level === 5 && "Noir"}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="text-slate-200 max-w-2xl mx-auto text-sm leading-relaxed">
            Les tenues par niveau creent une culture de discipline, de prestige
            et de motivation. Chaque couleur represente un stade de progression
            — les apprenants visualisent leur avancement et aspirent au niveau
            suivant.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Devenez un professionnel du BTP"
        subtitle="Inscrivez-vous a l'Academie et commencez votre transformation des maintenant."
        buttonText="S'inscrire"
        buttonLink="/contact"
      />
    </>
  );
}
