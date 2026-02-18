import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const team = [
  {
    name: "ANDRÉS ARANGO",
    role: "Spectro — Director Creativo",
    image: "/team/andres-arango.png",
    description:
      "Experto en producción de contenido deportivo de clase mundial. Proyectos con Disney, Netflix y los atletas más grandes de Colombia. El cerebro detrás de Spectro Legends, la docuserie de Quintero, el proyecto con Dairo Moreno y Atlético Nacional.",
    strengths: [
      "Producción audiovisual premium",
      "Relaciones con atletas y figuras públicas",
      "Estrategia de contenido viral",
      "Narrativa cinematográfica",
    ],
  },
  {
    name: "EDGAR NAVARRO",
    role: "Monzalab — Fundador",
    image: "/team/Edgar.jpg",
    description:
      "Especialista en experiencias digitales para marcas de nicho y lujo. Construye páginas web inmersivas, automatización con agentes de IA y experiencias digitales que no parecen de este mercado. Ejecución directa, sin intermediarios.",
    strengths: [
      "Experiencias digitales de nicho y lujo",
      "Automatización e inteligencia artificial",
      "Páginas web inmersivas de alto impacto",
      "Ejecución directa, cero delegación",
    ],
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionLabel number="05" title="THE TEAM" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
            NO SOMOS PROVEEDORES
            <br />
            <span className="text-gradient-purple">SOMOS SOCIOS</span>
          </h2>
          <p className="font-accent text-lg text-primary-glow/70 max-w-xl mx-auto">
            Dos perfiles que juntos crean algo que no existe en el mercado colombiano
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="border-gradient-purple rounded-2xl overflow-hidden"
            >
              {/* Photo with purple tint */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0 bg-[hsl(263_70%_50%/0.15)] mix-blend-color z-[1]" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-[center_15%] grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-[hsl(263_70%_50%/0.12)] z-[2]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] via-[hsl(var(--card)/0.2)] to-transparent z-[3]" />
              </div>

              <div className="p-8 pt-4">
                <h3 className="font-display text-2xl tracking-wider mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary/70 font-display tracking-wider mb-6">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {member.description}
                </p>

                <div className="space-y-3">
                  {member.strengths.map((s) => (
                    <div key={s} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-foreground/80">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
