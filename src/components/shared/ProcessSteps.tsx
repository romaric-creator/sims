import { motion } from "motion/react";
import {
  Globe,
  Car,
  Plane,
  HardHat,
  ClipboardList,
  Users,
  CheckCircle,
  Settings,
  FileText,
  Truck,
  Shield,
  Wrench,
  MessageCircle,
  Search,
  FileCheck,
  Trophy,
  ClipboardCheck,
  Target,
  BookOpen,
  Award,
  Send,
  FolderOpen,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Car,
  Plane,
  HardHat,
  ClipboardList,
  Users,
  CheckCircle,
  Settings,
  FileText,
  Truck,
  Shield,
  Wrench,
  MessageCircle,
  Search,
  FileCheck,
  Trophy,
  ClipboardCheck,
  Target,
  BookOpen,
  Award,
  Send,
  FolderOpen,
};

interface Step {
  title: string;
  description: string;
  icon: string;
}

interface ProcessStepsProps {
  steps: Step[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Dashed connector line - visible on desktop only */}
      <div className="hidden lg:block absolute top-6 left-0 right-0 h-px border-t-2 border-dashed border-[#bcc9c8]/50 z-0" />

      {steps.map((step, index) => {
        const Icon = iconMap[step.icon];

        return (
          <motion.div
            key={index}
            className="relative z-10 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="w-12 h-12 rounded-full bg-[#006767] text-white font-bold flex items-center justify-center mb-4">
              {Icon ? <Icon className="w-5 h-5" /> : index + 1}
            </div>
            <h3 className="font-display font-bold text-lg text-[#006767] mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-[#3D4949]">{step.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
