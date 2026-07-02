import { motion } from "motion/react";
import { Link } from "react-router-dom";

interface CTABannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  variant?: "dark" | "gradient";
}

export default function CTABanner({
  title,
  subtitle,
  buttonText,
  buttonLink,
  variant = "gradient",
}: CTABannerProps) {
  return (
    <section
      className={`py-16 ${
        variant === "dark"
          ? "bg-[#1A202C]"
          : "bg-gradient-to-r from-teal-900 to-[#1A202C]"
      }`}
    >
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-white font-display font-semibold text-3xl md:text-4xl mb-4">
          {title}
        </h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">{subtitle}</p>
        <Link
          to={buttonLink}
          className="inline-block bg-[#00CED1] hover:bg-white text-[#1A202C] py-4 px-10 rounded-md font-display font-bold transition-colors"
        >
          {buttonText}
        </Link>
      </motion.div>
    </section>
  );
}
