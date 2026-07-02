import { motion } from "motion/react";

interface PageHeroProps {
  image: string;
  title: string;
  subtitle: string;
  badge?: string;
}

export default function PageHero({
  image,
  title,
  subtitle,
  badge,
}: PageHeroProps) {
  return (
    <section className="h-[400px] md:h-[500px] relative flex items-center overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {badge && (
          <span className="px-3 py-1 bg-[#00CED1] text-[#1A202C] font-bold text-xs tracking-widest uppercase rounded-md inline-block mb-4">
            {badge}
          </span>
        )}
        <h1 className="font-display font-bold text-4xl md:text-5xl text-white uppercase tracking-wider mb-4">
          {title}
        </h1>
        <p className="text-slate-200 text-lg max-w-2xl">{subtitle}</p>
      </motion.div>
    </section>
  );
}
