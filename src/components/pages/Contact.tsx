import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Facebook,
  Linkedin,
  Send,
} from "lucide-react";
import PageHero from "../shared/PageHero";
import SectionHeader from "../shared/SectionHeader";
import { DEPARTMENTS } from "../../data/departments";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const departmentOptions = [
    ...DEPARTMENTS.map((d) => ({ id: d.id, name: d.shortName })),
    { id: "other", name: "Autre / General" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoye ! Nous vous repondrons dans les plus brefs delais.");
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-[#bcc9c8] focus:border-[#006767] focus:ring-2 focus:ring-[#006767]/10 outline-none transition";

  return (
    <>
      {/* Hero */}
      <PageHero
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
        title="Contactez-nous"
        subtitle="Notre equipe est a votre disposition pour repondre a toutes vos questions"
        badge="Contact"
      />

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-2xl text-[#006767] mb-6">
                Envoyez-nous un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Department Selector */}
                <div>
                  <label className="block text-sm font-semibold text-[#3D4949] mb-3">
                    Departement concerne *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {departmentOptions.map((dept) => (
                      <button
                        key={dept.id}
                        type="button"
                        onClick={() => setDepartment(dept.id)}
                        className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition cursor-pointer ${
                          department === dept.id
                            ? "border-[#006767] bg-[#006767]/5 text-[#006767]"
                            : "border-[#bcc9c8] text-[#3D4949] hover:border-[#006767]/50"
                        }`}
                      >
                        {dept.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subject & Message (shown after department selection) */}
                {department && (
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-[#3D4949] mb-2"
                      >
                        Sujet *
                      </label>
                      <input
                        id="subject"
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Ex: Demande d'information sur les formations"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-[#3D4949] mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Decrivez votre demande en detail..."
                        className={inputClasses + " resize-none"}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Name, Email, Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-[#3D4949] mb-2"
                    >
                      Nom complet *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Votre nom et prenom"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#3D4949] mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#3D4949] mb-2"
                  >
                    Telephone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+237 6XX XXX XXX"
                    className={inputClasses}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#006767] hover:bg-[#008282] text-white py-4 rounded-lg font-display font-bold text-sm uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </button>
              </form>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#F0F4F4] rounded-xl p-8">
                <h3 className="font-display font-bold text-xl text-[#006767] mb-6">
                  Informations de contact
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#006767]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#006767]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A202C] text-sm">
                        Adresse
                      </p>
                      <p className="text-[#3D4949] text-sm">
                        Pharmacie de la Logpom, Douala, Cameroun
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#006767]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#006767]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A202C] text-sm">
                        Telephone
                      </p>
                      <a
                        href="tel:+237693010342"
                        className="text-[#3D4949] text-sm hover:text-[#006767] transition"
                      >
                        +237 693 01 03 42
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#006767]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#006767]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A202C] text-sm">
                        Email
                      </p>
                      <a
                        href="mailto:contact@sims-btp.com"
                        className="text-[#3D4949] text-sm hover:text-[#006767] transition"
                      >
                        contact@sims-btp.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#006767]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#006767]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A202C] text-sm">
                        Horaires
                      </p>
                      <p className="text-[#3D4949] text-sm">
                        Lun - Sam: 8h00 - 18h00
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Link */}
                <a
                  href="https://wa.me/237693010342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-lg font-bold text-sm transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  Discuter sur WhatsApp
                </a>

                {/* Social Links */}
                <div className="mt-6 flex items-center gap-4">
                  <span className="text-sm text-[#3D4949]">Suivez-nous :</span>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-[#006767]/10 rounded-lg flex items-center justify-center hover:bg-[#006767] hover:text-white text-[#006767] transition"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-[#006767]/10 rounded-lg flex items-center justify-center hover:bg-[#006767] hover:text-white text-[#006767] transition"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments Quick Links */}
      <section className="py-16 bg-[#F0F4F4]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionHeader
            title="Contactez directement un departement"
            subtitle="Accedez rapidement au departement de votre choix"
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEPARTMENTS.map((dept, index) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={dept.route}
                  className="block bg-white rounded-xl p-6 hover:shadow-lg transition group"
                >
                  <h4 className="font-display font-bold text-[#006767] group-hover:text-[#008282] transition mb-2">
                    {dept.shortName}
                  </h4>
                  <p className="text-sm text-[#3D4949] mb-4">{dept.tagline}</p>
                  <div className="flex items-center gap-3">
                    <a
                      href="tel:+237693010342"
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 bg-[#006767]/10 rounded-lg flex items-center justify-center hover:bg-[#006767] hover:text-white text-[#006767] transition"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href="https://wa.me/237693010342"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 bg-[#25D366]/10 rounded-lg flex items-center justify-center hover:bg-[#25D366] hover:text-white text-[#25D366] transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
