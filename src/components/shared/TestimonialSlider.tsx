import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  department: string;
  text: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (!testimonials.length) return null;

  const testimonial = testimonials[current];

  return (
    <div className="overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl p-8 shadow-md border border-[#bcc9c8]/20"
          >
            <Quote className="text-[#00CED1] mb-4" />
            <p className="italic text-[#3D4949] text-lg leading-relaxed mb-6">
              {testimonial.text}
            </p>
            <div>
              <p className="font-display font-bold text-[#006767]">{testimonial.name}</p>
              <p className="text-sm text-[#3D4949]">{testimonial.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === current ? "bg-[#006767]" : "bg-[#bcc9c8]"
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
