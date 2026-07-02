import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { ChatMessage } from "../types";
import { X, Send, Bot, User, MessageCircle, Zap, MessageSquare } from "lucide-react";

interface ConsultantAIProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultantAI({ isOpen, onClose }: ConsultantAIProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const initialPrompts = [
    { text: "Cours TCF/TEF", value: "Quels sont les programmes de preparation au TCF et TEF disponibles ?" },
    { text: "Permis B", value: "Quelles sont les conditions et le processus pour obtenir le permis B ?" },
    { text: "Etudes au Canada", value: "Comment fonctionne le programme d'etudes au Canada ?" },
    { text: "Formation BTP", value: "Quelles sont les filieres et niveaux de formation a l'Academie BTP ?" }
  ];

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          sender: "ai",
          text: "Bonjour ! Je suis l'Assistant de SIMS BTP Holdings. Formation linguistique, immigration, auto-ecole ou BTP — comment puis-je vous aider ?",
          timestamp: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    }
  }, [messages]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim()) return;

    if (!customText) setInput("");

    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: textToSend })
      });

      if (!response.ok) {
        throw new Error("Impossible de communiquer avec le serveur de calcul");
      }

      const data = await response.json();

      const aiReply: ChatMessage = {
        id: Math.random().toString(),
        sender: "ai",
        text: data.reply || "Désolé, j'ai rencontré un contretemps lors du calcul.",
        timestamp: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, aiReply]);
    } catch {
      setTimeout(() => {
        let fallbackReply = "Notre equipe est disponible pour vous renseigner. Contactez-nous au +237 693 01 03 42 ou rendez-vous sur notre page Contact.";
        const query = textToSend.toLowerCase();

        if (query.includes("tcf") || query.includes("tef") || query.includes("langue") || query.includes("francais")) {
          fallbackReply = "SafeFlight Language Center propose des programmes intensifs de preparation aux examens TCF et TEF, ainsi que des cours de francais general et professionnel. Nos sessions sont adaptees a tous les niveaux, du debutant a l'avance.";
        } else if (query.includes("permis") || query.includes("conduire") || query.includes("auto")) {
          fallbackReply = "SafeAuto Ecole vous accompagne dans l'obtention de votre permis B avec des cours de code et de conduite encadres par des moniteurs certifies. Nous proposons des formules adaptees a votre rythme et a votre budget.";
        } else if (query.includes("canada") || query.includes("france") || query.includes("visa") || query.includes("immigration") || query.includes("etudes")) {
          fallbackReply = "SafeFlight Consulting vous guide dans vos demarches d'immigration et d'etudes a l'etranger (Canada, France, etc.). Nous offrons un accompagnement complet : choix de programme, constitution du dossier, preparation a l'entrevue et suivi post-visa.";
        } else if (query.includes("btp") || query.includes("maconnerie") || query.includes("formation") || query.includes("academie") || query.includes("chantier")) {
          fallbackReply = "L'Academie Professionnelle BTP forme aux metiers du batiment et des travaux publics : maconnerie, coffrage, ferraillage, electricite batiment et plus encore. Les formations sont disponibles en plusieurs niveaux et debouchent sur des certifications reconnues.";
        }

        const aiReply: ChatMessage = {
          id: Math.random().toString(),
          sender: "ai",
          text: fallbackReply,
          timestamp: new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
        };
        setMessages((prev) => [...prev, aiReply]);
      }, 800);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:justify-end md:p-6">
      <div className="absolute inset-0 bg-brand-on-surface/30 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-[460px] h-[min(700px,90vh)] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-brand-primary/10 border border-brand-outline-variant/40 bg-brand-construction-white animate-in slide-in-from-bottom-4 md:slide-in-from-right-4 duration-300">

        {/* Header */}
        <div className="px-5 py-4 flex items-center justify-between bg-white border-b border-brand-outline-variant/30">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center shadow-md shadow-brand-primary/20">
                <MessageCircle size={20} className="text-white" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white" />
            </div>
            <div>
              <h2 className="font-display font-bold text-sm text-brand-on-surface leading-tight">
                Assistant SIMS Holdings
              </h2>
              <span className="text-[11px] text-brand-on-surface-variant font-medium">
                SIMS BTP Holdings
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-brand-on-surface-variant hover:text-brand-primary hover:bg-brand-surface-container-low transition-all cursor-pointer"
            aria-label="Fermer l'assistant"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div
          ref={containerRef}
          className="flex-1 overflow-y-auto px-4 py-5 space-y-5 bg-brand-surface-container-low"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-2.5 ${m.sender === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center mt-0.5 ${
                m.sender === "user"
                  ? "bg-brand-primary shadow-sm"
                  : "bg-white border border-brand-outline-variant/50 shadow-sm"
              }`}>
                {m.sender === "user"
                  ? <User size={13} className="text-white" />
                  : <Bot size={13} className="text-brand-primary" />
                }
              </div>

              <div className={`max-w-[80%] ${m.sender === "user" ? "text-right" : ""}`}>
                <div className={`inline-block px-4 py-3 text-[13px] leading-relaxed font-sans ${
                  m.sender === "user"
                    ? "bg-brand-primary text-white rounded-2xl rounded-tr-md shadow-sm"
                    : "bg-white text-brand-on-surface rounded-2xl rounded-tl-md border border-brand-outline-variant/30 shadow-sm"
                }`}>
                  {m.sender === "ai" ? (
                    <div className="prose prose-sm max-w-none select-text prose-headings:text-brand-on-surface prose-headings:text-[13px] prose-headings:font-bold prose-headings:mt-3 prose-headings:mb-1 prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5 prose-strong:text-brand-on-surface">
                      <ReactMarkdown>{m.text}</ReactMarkdown>
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap select-text">{m.text}</p>
                  )}
                </div>
                <span className="text-[10px] text-brand-on-surface-variant/60 mt-1.5 block px-1">
                  {m.timestamp}
                </span>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex gap-2.5">
              <div className="w-7 h-7 rounded-full bg-white border border-brand-outline-variant/50 flex items-center justify-center shrink-0 shadow-sm">
                <Bot size={13} className="text-brand-primary" />
              </div>
              <div className="bg-white border border-brand-outline-variant/30 px-4 py-3 rounded-2xl rounded-tl-md shadow-sm">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-brand-vibrant-cyan rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-2 h-2 bg-brand-vibrant-cyan rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 bg-brand-vibrant-cyan rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick prompts */}
        {messages.length < 3 && (
          <div className="px-4 py-3 bg-white border-t border-brand-outline-variant/20">
            <div className="flex items-center gap-1.5 mb-2">
              <Zap size={10} className="text-brand-vibrant-cyan" />
              <span className="text-[10px] font-semibold text-brand-on-surface-variant uppercase tracking-wider">
                Questions frequentes
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {initialPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(p.value)}
                  className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-brand-surface-container-low border border-brand-outline-variant/40 text-brand-on-surface-variant hover:bg-brand-primary/5 hover:border-brand-primary/30 hover:text-brand-primary transition-all cursor-pointer"
                >
                  {p.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input area */}
        <div className="p-4 bg-white border-t border-brand-outline-variant/30">
          <div className="flex items-center gap-2 bg-brand-surface-container-low border border-brand-outline-variant/40 rounded-xl px-3 py-1 focus-within:border-brand-primary/50 focus-within:ring-2 focus-within:ring-brand-primary/10 transition-all">
            <MessageSquare size={16} className="text-brand-outline-variant shrink-0" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Votre question technique..."
              className="flex-1 bg-transparent text-sm text-brand-on-surface placeholder:text-brand-on-surface-variant/50 py-2.5 outline-none font-sans"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!input.trim()}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-brand-primary text-white hover:bg-brand-primary-container disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm"
            >
              <Send size={14} />
            </button>
          </div>
          <p className="text-[10px] text-brand-on-surface-variant/50 text-center mt-2.5 font-sans">
            Assistant SIMS BTP Holdings — Conseils a valeur informative
          </p>
        </div>
      </div>
    </div>
  );
}
