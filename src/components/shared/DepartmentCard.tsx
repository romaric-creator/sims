import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Globe, Car, Plane, HardHat, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Car,
  Plane,
  HardHat,
};

interface Department {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  route: string;
  icon: string;
  accentColor: string;
  image: string;
  description: string;
  highlights: string[];
}

interface DepartmentCardProps {
  department: Department;
}

export default function DepartmentCard({ department }: DepartmentCardProps) {
  const Icon = iconMap[department.icon];

  return (
    <motion.div whileHover={{ y: -4 }}>
      <Link
        to={department.route}
        className="group block bg-white rounded-lg overflow-hidden border border-[#bcc9c8]/30 shadow-xs hover:shadow-lg transition"
      >
        <div className="relative overflow-hidden">
          <img
            src={department.image}
            alt={department.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span
            className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-xs font-semibold"
            style={{ backgroundColor: department.accentColor }}
          >
            {Icon && <Icon className="w-3.5 h-3.5" />}
            {department.shortName}
          </span>
        </div>

        <div className="p-6">
          <h3 className="font-display font-bold text-lg text-[#006767] group-hover:text-[#00CED1] transition">
            {department.name}
          </h3>
          <p className="text-sm text-[#3D4949] mt-1">{department.tagline}</p>

          <ul className="mt-4 space-y-1.5">
            {department.highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-[#3D4949]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00CED1] shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.div>
  );
}
