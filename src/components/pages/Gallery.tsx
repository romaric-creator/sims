import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import PageHero from "../shared/PageHero";
import SectionHeader from "../shared/SectionHeader";
import { GALLERY_IMAGES } from "../../data/gallery";
import { DEPARTMENTS } from "../../data/departments";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = GALLERY_IMAGES.filter(
    (img) => activeFilter === "all" || img.department === activeFilter || img.department === "all"
  );

  const selectedImageData = GALLERY_IMAGES.find((img) => img.id === selectedImage);

  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
        title="Notre Galerie"
        subtitle="Decouvrez nos activites en images"
        badge="Galerie"
      />

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader
            title="Nos Activites en Images"
            subtitle="Explorez nos differents departements a travers notre galerie photo"
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeFilter === "all"
                  ? "bg-[#006767] text-white"
                  : "bg-[#F0F4F4] text-[#3D4949] hover:bg-[#006767]/10"
              }`}
            >
              Toutes
            </button>
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveFilter(dept.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeFilter === dept.id
                    ? "bg-[#006767] text-white"
                    : "bg-[#F0F4F4] text-[#3D4949] hover:bg-[#006767]/10"
                }`}
              >
                {dept.shortName}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layoutId={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg overflow-hidden group cursor-pointer relative"
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover h-64 w-full group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <p className="text-white text-sm font-semibold">{image.caption}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-[#00CED1] transition"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImageData.src}
              alt={selectedImageData.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-white text-lg font-semibold">{selectedImageData.caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
