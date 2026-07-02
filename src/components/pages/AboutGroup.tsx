import { motion } from "motion/react";
import {
  Award,
  Users,
  Lightbulb,
  Shield,
  GraduationCap,
  Wrench,
  LayoutGrid,
  HardHat,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import PageHero from "../shared/PageHero";
import SectionHeader from "../shared/SectionHeader";
import StatsCounter from "../shared/StatsCounter";
import CTABanner from "../shared/CTABanner";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "Nous visons les plus hauts standards dans chaque formation et service que nous proposons.",
  },
  {
    icon: Users,
    title: "Accompagnement",
    description:
      "Un suivi personnalise de chaque etudiant, du premier jour jusqu'a l'insertion professionnelle.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Des methodes pedagogiques modernes et des outils numeriques au service de l'apprentissage.",
  },
  {
    icon: Shield,
    title: "Integrite",
    description:
      "Transparence, ethique et respect des engagements envers nos etudiants et partenaires.",
  },
];

const ecosystemSteps = [
  { icon: GraduationCap, label: "Formation" },
  { icon: Wrench, label: "Techniciens" },
  { icon: LayoutGrid, label: "Plateforme" },
  { icon: HardHat, label: "Chantiers" },
  { icon: Briefcase, label: "Emploi" },
];

export default function AboutGroup() {
  return (
    <>
      {/* HERO */}
      <PageHero
        image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80"
        title="A Propos de SIMS BTP Holdings"
        subtitle="Un groupe camerounais au service de la formation et du developpement professionnel"
        badge="Notre Histoire"
      />

      {/* MISSION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#006767] uppercase tracking-wider mb-6">
                Notre Mission
              </h2>
              <div className="w-20 h-1.5 bg-[#00CED1] rounded-full mb-6" />
              <p className="text-[#3D4949] leading-relaxed mb-4">
                SIMS BTP Holdings est un groupe ne d'une vision claire :
                accompagner la jeunesse camerounaise a travers la formation, la
                mobilite internationale et le developpement professionnel.
              </p>
              <p className="text-[#3D4949] leading-relaxed mb-4">
                Fonde a Douala, le groupe opere desormais a travers 4
                departements complementaires qui couvrent l'ensemble du parcours
                d'un jeune professionnel — de la formation initiale jusqu'a
                l'insertion sur le marche de l'emploi.
              </p>
              <p className="text-[#3D4949] leading-relaxed">
                Notre ambition est de creer un ecosysteme complet ou chaque
                etudiant trouve les ressources, l'accompagnement et les
                opportunites necessaires pour batir un avenir solide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Equipe SIMS BTP Holdings"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-20 bg-[#F0F4F4]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader title="Nos Valeurs" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-lg p-8 shadow-xs border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-[#E0F7F7] flex items-center justify-center mb-5">
                  <value.icon className="w-7 h-7 text-[#006767]" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#1A202C] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#3D4949] text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader title="Notre Ecosysteme" />

          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {ecosystemSteps.map((step, index) => (
              <div key={step.label} className="flex items-center gap-3 md:gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#E0F7F7] border-2 border-[#006767] flex items-center justify-center">
                    <step.icon className="w-7 h-7 md:w-9 md:h-9 text-[#006767]" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-[#1A202C] text-center">
                    {step.label}
                  </span>
                </div>
                {index < ecosystemSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-[#00CED1] shrink-0" />
                )}
              </div>
            ))}
          </motion.div>

          <p className="text-center text-[#3D4949] mt-10 max-w-2xl mx-auto leading-relaxed">
            De la formation technique a l'emploi sur chantier, notre ecosysteme
            connecte chaque etape du parcours professionnel pour garantir une
            insertion reussie et durable.
          </p>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-[#006767]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 [&_span]:!text-white [&_p]:!text-slate-200">
          <StatsCounter
            stats={[
              { value: "500+", label: "Etudiants formes" },
              { value: "200+", label: "Visas obtenus" },
              { value: "300+", label: "Permis delivres" },
              { value: "4", label: "Departements" },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Rejoignez l'aventure SIMS BTP Holdings"
        subtitle="Que vous souhaitiez vous former, immigrer ou obtenir votre permis de conduire, nous sommes la pour vous accompagner."
        buttonText="Nous contacter"
        buttonLink="/contact"
      />
    </>
  );
}
