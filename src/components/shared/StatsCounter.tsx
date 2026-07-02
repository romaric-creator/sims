import { motion } from "motion/react";

interface Stat {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="border-l-4 border-[#00CED1] pl-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <span className="font-display font-extrabold text-3xl md:text-4xl text-[#006767]">
            {stat.value}
          </span>
          <p className="font-sans text-xs font-semibold text-[#3D4949] tracking-wider uppercase mt-1">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
