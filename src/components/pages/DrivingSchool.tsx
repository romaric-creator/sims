import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Car, Clock, Award } from "lucide-react";

import PageHero from "../shared/PageHero";
import SectionHeader from "../shared/SectionHeader";
import StatsCounter from "../shared/StatsCounter";
import ProcessSteps from "../shared/ProcessSteps";
import CTABanner from "../shared/CTABanner";

import { PERMITS, DRIVING_PROCESS, DRIVING_STATS } from "../../data/driving-school";

const ACCENT_COLORS: Record<string, string> = {
  A: "bg-blue-500",
  B: "bg-amber-500",
  C: "bg-red-500",
};

const ADVANTAGES = [
  {
    icon: Users,
    title: "Instructeurs certifies",
    description:
      "Nos moniteurs sont diplomes et experimentes pour vous accompagner efficacement.",
  },
  {
    icon: Car,
    title: "Vehicules modernes",
    description:
      "Apprenez sur des vehicules recents, bien entretenus et equipes en double commande.",
  },
  {
    icon: Clock,
    title: "Horaires flexibles",
    description:
      "Des creneaux adaptes a votre emploi du temps, y compris les week-ends.",
  },
  {
    icon: Award,
    title: "Reussite garantie",
    description:
      "Un suivi personnalise jusqu'a l'obtention de votre permis de conduire.",
  },
];

export default function DrivingSchool() {
  return (
    <>
      {/* HERO */}
      <PageHero
        image="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1600&q=80"
        title="SafeAuto Ecole"
        subtitle="Formez-vous a conduire en toute securite et confiance avec des instructeurs qualifies"
        badge="Auto-Ecole"
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
              Apprenez a conduire avec les meilleurs
            </h2>
            <p className="text-[#3D4949] leading-relaxed mb-4">
              SafeAuto Ecole vous offre une formation complete, alliant theorie
              et pratique, dispensee par des instructeurs qualifies et
              passionnes. Notre objectif : vous rendre autonome et confiant sur
              la route.
            </p>
            <p className="text-[#3D4949] leading-relaxed mb-6">
              Dans un environnement professionnel et moderne, vous beneficiez
              d'un apprentissage structure du code de la route et de la conduite
              pratique, adapte a votre rythme et a vos besoins.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#006767] hover:bg-[#00CED1] text-white hover:text-[#1A202C] py-3 px-8 rounded-md font-display font-bold transition-colors"
            >
              Nous contacter
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <StatsCounter stats={DRIVING_STATS} />
          </motion.div>
        </div>
      </section>

      {/* PERMITS */}
      <section className="py-24 bg-[#F0F4F4]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader title="Nos Formations" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {PERMITS.map((permit, index) => (
              <motion.div
                key={permit.id}
                className="bg-white rounded-xl overflow-hidden shadow-xs border hover:shadow-md transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Colored accent bar */}
                <div
                  className={`h-2 ${ACCENT_COLORS[permit.category] || "bg-gray-400"}`}
                />

                <div className="p-8">
                  {/* Category circle */}
                  <div className="w-14 h-14 rounded-full bg-[#006767] text-white font-display font-bold text-2xl flex items-center justify-center mb-5">
                    {permit.category}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-[#006767] mb-3">
                    {permit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#3D4949] text-sm leading-relaxed mb-5">
                    {permit.description}
                  </p>

                  {/* Duration pill */}
                  <span className="inline-block px-3 py-1 bg-[#F0F4F4] text-[#006767] text-xs font-semibold rounded-full mb-5">
                    Duree : {permit.duration}
                  </span>

                  {/* Requirements */}
                  <ul className="space-y-2">
                    {permit.requirements.map((req, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[#3D4949]"
                      >
                        <CheckCircle className="w-4 h-4 text-[#00CED1] mt-0.5 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader title="Votre Parcours" />

          <div className="mt-12">
            <ProcessSteps steps={DRIVING_PROCESS} />
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-20 bg-[#F8FAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader title="Pourquoi SafeAuto Ecole ?" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {ADVANTAGES.map((adv, index) => {
              const Icon = adv.icon;
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
                    {adv.title}
                  </h3>
                  <p className="text-sm text-[#3D4949] leading-relaxed">
                    {adv.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Pret a prendre le volant ?"
        subtitle="Inscrivez-vous des aujourd'hui et obtenez votre permis de conduire."
        buttonText="S'inscrire"
        buttonLink="/contact"
      />
    </>
  );
}
