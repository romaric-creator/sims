import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

import SectionHeader from "../shared/SectionHeader";
import DepartmentCard from "../shared/DepartmentCard";
import StatsCounter from "../shared/StatsCounter";
import ProcessSteps from "../shared/ProcessSteps";
import TestimonialSlider from "../shared/TestimonialSlider";
import CTABanner from "../shared/CTABanner";

import { DEPARTMENTS } from "../../data/departments";
import { TESTIMONIALS } from "../../data/testimonials";

const stats = [
  { value: "500+", label: "Etudiants formes" },
  { value: "4", label: "Departements" },
  { value: "10+", label: "Partenaires" },
  { value: "98%", label: "Satisfaction" },
];

const processSteps = [
  {
    title: "Contactez-nous",
    description:
      "Prenez rendez-vous ou ecrivez-nous pour nous exposer votre projet.",
    icon: "MessageCircle",
  },
  {
    title: "Analyse personnalisee",
    description:
      "Nous etudions votre profil et vous orientons vers le programme adapte.",
    icon: "Search",
  },
  {
    title: "Preparation complete",
    description:
      "Nous constituons votre dossier et vous preparons avec rigueur.",
    icon: "FileCheck",
  },
  {
    title: "Objectif atteint",
    description:
      "Vous obtenez votre certification, visa, permis ou diplome.",
    icon: "Trophy",
  },
];

export default function HoldingHome() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[650px] md:h-[780px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80"
          alt="SIMS BTP Holdings"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-[#00CED1] text-[#1A202C] px-4 py-1.5 rounded-md font-extrabold text-xs tracking-widest uppercase mb-6">
            Formation &bull; Immigration &bull; Permis &bull; BTP
          </span>

          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-4">
            Construisons Votre Avenir
          </h1>

          <p className="text-lg md:text-xl text-white/90 italic max-w-2xl mb-8">
            SIMS BTP Holdings — Votre partenaire de confiance pour la formation,
            l'immigration et le developpement professionnel au Cameroun.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#departements"
              className="inline-block bg-[#006767] hover:bg-[#00CED1] text-white py-3 px-8 rounded-md font-display font-bold transition-colors"
            >
              Decouvrir nos services
            </a>
            <Link
              to="/contact"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#006767] py-3 px-8 rounded-md font-display font-bold transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-[#F0F4F4]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#006767] mb-6">
              Un Groupe, Quatre Expertises
            </h2>
            <p className="text-[#3D4949] leading-relaxed mb-8">
              SIMS BTP Holdings reunit quatre departements complementaires pour
              offrir un accompagnement global a ceux qui souhaitent se former,
              immigrer, conduire ou batir. Notre mission : transformer vos
              ambitions en realisations concretes grace a des equipes
              passionnees et des methodes eprouvees.
            </p>
            <StatsCounter stats={stats} />
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
              alt="Equipe SIMS BTP Holdings"
              className="rounded-lg shadow-xl h-[350px] md:h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* DEPARTMENTS SECTION */}
      <section id="departements" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader
            title="Nos Departements"
            subtitle="Quatre poles d'excellence pour accompagner vos projets"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {DEPARTMENTS.map((department) => (
              <DepartmentCard key={department.id} department={department} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-[#F8FAFA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader
            title="Notre Processus"
            subtitle="Un accompagnement simple et efficace"
          />

          <div className="mt-12">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-[#F0F4F4]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader title="Ils nous font confiance" />

          <div className="mt-12">
            <TestimonialSlider testimonials={TESTIMONIALS} />
          </div>
        </div>
      </section>

      {/* AI CTA SECTION */}
      <section className="bg-gradient-to-r from-teal-900 to-[#1A202C] text-white py-14 border-y border-teal-800">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#00CED1]/20 animate-pulse" />
              <div className="relative w-14 h-14 rounded-full bg-[#006767] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#00CED1]" />
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl">
                Une question ? Notre assistant est la.
              </h3>
              <p className="text-slate-300 text-sm mt-1">
                Utilisez l'icone de chat dans la barre de navigation pour
                discuter avec notre assistant IA et obtenir des reponses
                instantanees.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-block bg-[#00CED1] hover:bg-white text-[#1A202C] py-3 px-8 rounded-md font-display font-bold transition-colors whitespace-nowrap"
          >
            Discuter avec l'IA
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABanner
        title="Pret a realiser votre projet ?"
        subtitle="Rejoignez les centaines de personnes qui ont fait confiance a SIMS BTP Holdings."
        buttonText="Nous contacter"
        buttonLink="/contact"
      />
    </>
  );
}
