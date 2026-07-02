interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  badge,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {badge && (
        <span className="px-3 py-1 bg-[#00CED1] text-[#1A202C] font-bold text-xs tracking-widest uppercase rounded-md inline-block mb-4">
          {badge}
        </span>
      )}
      <h2
        className={`font-display font-bold text-3xl md:text-4xl uppercase tracking-wider mb-3 ${
          light ? "text-white" : "text-[#006767]"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-20 h-1.5 bg-[#00CED1] rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className={`mt-4 ${light ? "text-slate-300" : "text-[#3D4949]"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
