import express from "express";
import path from "path";
import dotenv from "dotenv";
import { CohereClient } from "cohere-ai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const SYSTEM_PROMPT = `Tu es l'assistant conseil de SIMS BTP Holdings, un groupe diversifie base a Douala, Cameroun. Le groupe comprend 4 departements :

1. SafeFlight Language Center — Centre de langues agree : preparation TCF Canada, TCF Tout Public, TEF Canada (francais), IELTS Academic et General (anglais), et cours d'allemand A1 a B2 (preparation Goethe).

2. SafeAuto Ecole — Auto-ecole formant aux permis A (moto), B (voiture) et C (poids lourd). Code de la route, conduite pratique, cours acceleres.

3. SafeFlight Consulting — Cabinet de conseil en immigration et etudes a l'etranger. Destinations : Canada (etudes + residence permanente), France (admission 3 jours, Campus France), Belgique (admission 10 jours), Allemagne (bourses, preparation linguistique), Roumanie (contrats de travail BTP/electricite/plomberie), Russie et Bielorussie (etudes abordables).

4. Academie Professionnelle BTP — Formation professionnelle en batiment avec 80% de pratique. Filieres : maconnerie, plomberie, electricite batiment, topographie. 5 niveaux de 6 mois chacun (Initiation -> Ouvrier Qualifie -> Technicien -> Technicien Superieur -> Specialisation). Accessible sans diplome au niveau 1.

Le groupe prevoit egalement :
- Une plateforme numerique de commande de techniciens en ligne (maconnerie, plomberie, electricite, topographie, maintenance batiment).
- Des programmes de travail a l'etranger (Roumanie : contrats certifies en batiment, electricite, plomberie).

Structure de l'Academie BTP :
- Niveau 1 (Initiation) : accessible sans diplome, 6 mois, sortie = Certificat d'Initiation Professionnelle, debouches = aide-macon, assistant chantier.
- Niveau 2 (Ouvrier Qualifie) : 6 mois, sortie = Certificat Professionnel Qualifie, debouches = macon qualifie, coffreur, ferrailleur.
- Niveau 3 (Technicien) : 6 mois, accessible aux bacheliers, sortie = Diplome de Technicien, debouches = chef d'equipe, conducteur adjoint.
- Niveau 4 (Technicien Superieur) : 6 mois, sortie = Diplome de Technicien Superieur, debouches = conducteur des travaux, superviseur chantier.
- Niveau 5 (Specialisation) : 6 mois, specialisations = routes/VRD, structure beton, architecture, topographie avancee, BIM, gestion grands projets.

Modele pedagogique : 80% pratique, 20% theorie. Chantier-ecole integre. Systeme de tenues par niveau (Bleu, Orange, Vert, Gris, Noir).

Reponds de maniere professionnelle, chaleureuse et precise en francais. Fournis des informations sur les programmes, niveaux, durees, prerequis et processus d'inscription. Si la question concerne un domaine specifique, donne des details precis. Conserve un ton accueillant, institutionnel et rassurant. Ne donne pas de prix exacts mais indique qu'un rendez-vous permet d'obtenir un devis personnalise.`;

async function startServer() {
  const app = express();
  const PORT = 4000;

  app.use(express.json());

  app.post("/api/chat", async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt) {
        return res.status(400).json({ error: "Le prompt de question est manquant." });
      }

      const apiKey = process.env.COHERE_API_KEY;
      if (!apiKey || apiKey === "YOUR_COHERE_API_KEY") {
        return res.status(200).json({
          reply: "La cle API Cohere n'est pas configuree. Veuillez renseigner COHERE_API_KEY dans le fichier .env pour activer l'assistant IA."
        });
      }

      const cohere = new CohereClient({ token: apiKey });

      const response = await cohere.chat({
        model: "command-a-03-2025",
        message: prompt,
        preamble: SYSTEM_PROMPT,
        temperature: 0.7,
      });

      const reply = response.text || "Desole, je n'ai pas pu formuler de reponse pour cette question.";
      res.json({ reply });
    } catch (err: any) {
      console.error("Erreur serveur Cohere API:", err);
      res.status(500).json({
        error: "Erreur lors de la communication avec l'assistant IA.",
        details: err.message
      });
    }
  });

  // 2. Client assets and Hot Module Replacement proxy integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SIMS FullStack Server] Démarré sur http://localhost:${PORT}`);
  });
}

startServer();
