import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { Film, Code, Zap, Camera, Globe, Bot, Database, Layers, Workflow, ExternalLink } from "lucide-react";

const services = [
  { icon: Film, label: "Docuseries & Documentales" },
  { icon: Camera, label: "Producción audiovisual premium" },
  { icon: Globe, label: "Contenido para Netflix, HBO, FIFA" },
  { icon: Code, label: "Landing pages inmersivas" },
  { icon: Bot, label: "Automatización con agentes de IA" },
  { icon: Zap, label: "Campañas digitales & retargeting" },
];

const projects = [
  {
    title: "SPECTRO LEGENDS",
    subtitle: "Juan Fernando Quintero",
    description: "Docuserie del goleador histórico del fútbol colombiano. Producción en negociación con Disney.",
    tags: ["Documental", "Deportes", "Disney"],
    image: "/legends/Juanferriver.png",
  },
  {
    title: "DAIRO MORENO",
    subtitle: "Podcast documental + Novela",
    description: "Podcast documental de la vida del goleador histórico y novela actuada. Producción en curso.",
    tags: ["Podcast", "Novela", "Deportes"],
    image: "/legends/Dayro.png",
  },
  {
    title: "MI GOL MUNDIALISTA",
    subtitle: "Tito Puchetti x Spectro",
    description: "Todos los jugadores colombianos que han marcado un gol en un mundial. James, Jerry Mina, Quintero.",
    tags: ["Serie", "Mundial 2026", "En desarrollo"],
    image: "/legends/Juanfer vs polonia.png",
  },
  {
    title: "ATLÉTICO NACIONAL",
    subtitle: "80 años de historia",
    description: "Narración de Carlo Ancelotti. Múltiples capítulos contando la historia del club más grande de Colombia.",
    tags: ["Docuserie", "Fútbol", "Premium"],
    image: "/legends/Nacional.png",
  },
];

const monzaServices = [
  { icon: Code, label: "Desarrollo full-stack & APIs" },
  { icon: Database, label: "Bases de datos & scraping" },
  { icon: Layers, label: "UX/UI premium" },
  { icon: Bot, label: "Automatización & agentes de IA" },
  { icon: Workflow, label: "Flujos WhatsApp & CRM" },
  { icon: Globe, label: "Landing pages de alto impacto" },
];

const monzaProjects = [
  {
    title: "MONZA CARS",
    subtitle: "Founder · Plataforma de inteligencia automotriz",
    description: "Un Bloomberg para el mundo automotriz. Datos en tiempo real, valoraciones por mercado global, scraping de inventarios y analítica de colección.",
    tags: ["Founder", "Full-stack", "APIs", "Data"],
    badge: "En desarrollo",
    image: "/portfolio/Monza Cars.png",
    url: "https://monza-cars-marketplace-pzpy.vercel.app/",
  },
  {
    title: "SPECTRO LEGENDS",
    subtitle: "Spectro Group",
    description: "Página web de la productora Spectro Group. Narrativas cinematográficas de atletas y creadores extraordinarios.",
    tags: ["UX/UI", "Branding", "Motion"],
    image: "/portfolio/ref-spectro.jpg",
    url: "https://spectrolegends.monzalab.com/",
  },
  {
    title: "FRANCISCO ÁLVAREZ",
    subtitle: "Dakar 2026 · Rally Rider",
    description: "Marca personal del piloto colombiano, campeón LATAM x2 y Husqvarna Factory rider en el Rally Dakar 2026.",
    tags: ["UX/UI", "Personal Brand", "Deportes"],
    image: "/portfolio/ref-pacho.jpg",
    url: "https://pacho-alvarez-dakar.vercel.app/",
  },
  {
    title: "BAVARIAN ECONS",
    subtitle: "Co-founder · Restauración & electrificación",
    description: "Empresa de restauración y electrificación de BMWs clásicos en Alemania. Edgar es co-founder y lidera toda la estrategia digital y de producto.",
    tags: ["Co-founder", "Automotive", "Alemania"],
    image: "/portfolio/BavarianEcons.png",
    url: "https://bavarian-econs.vercel.app/",
  },
];

const portfolioImages = Array.from({ length: 12 }, (_, i) => `/portfolio/portfolio-${String(i + 1).padStart(2, "0")}.jpg`);

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionLabel number="02" title="WHO WE ARE" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
            CONTENIDO QUE GENERA DESEO
            <br />
            <span className="text-gradient-purple">EXPERIENCIAS QUE ESCALAN</span>
          </h2>
          <p className="font-accent text-lg text-primary-glow/70 max-w-2xl mx-auto">
            Un equipo que no existe en el mercado
          </p>
        </motion.div>

        {/* Spectro services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bento-card p-5 sm:p-8 mb-12 sm:mb-20 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <h3 className="font-display text-xl tracking-wider">SPECTRO</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Capturamos la luz de atletas, visionarios y creadores extraordinarios, transformándola en narrativas cinematográficas y experiencias digitales que convierten atención en ventas.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <s.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reel video showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-center text-sm text-muted-foreground font-display tracking-wider mb-6">
            NUESTRO REEL
          </p>
          <div className="relative rounded-2xl overflow-hidden border border-border max-w-5xl mx-auto glow-purple-sm bg-black">
            <video
              controls
              playsInline
              poster="/legends/Juanferriver.png"
              className="w-full h-auto block"
              preload="metadata"
            >
              <source src="/legends/Spectro-legends-web.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Projects with images */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm text-muted-foreground font-display tracking-wider mb-8">
            PROYECTOS EN DESARROLLO
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 sm:mb-20">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bento-card p-0 overflow-hidden group"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_6%)] via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-sm tracking-wider text-gradient-purple mb-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3 font-accent">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-display tracking-wider px-2 py-1 rounded-full border border-primary/20 text-primary/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Monza Lab section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bento-card p-5 sm:p-8 mb-12 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            <h3 className="font-display text-xl tracking-wider">MONZA LAB</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            No somos una agencia. Monza Lab es el brazo digital de empresas donde Edgar es co-founder. Cada proyecto de este portafolio es una empresa propia — construida desde cero con plataformas full-stack, APIs, bases de datos y automatización con IA. La misma visión de dueño que ponemos en nuestras empresas es la que traemos a esta alianza.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {monzaServices.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <s.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Monza Lab projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm text-muted-foreground font-display tracking-wider mb-8">
            PROYECTOS — MONZA LAB
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 sm:mb-20">
            {monzaProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bento-card p-0 overflow-hidden group"
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0_0%_6%)] via-transparent to-transparent" />
                    {project.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-yellow-500/90 text-black text-[9px] font-display tracking-[0.15em] px-3 py-1 rounded-full">
                          {project.badge}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-black/50 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-3 h-3 text-white/70" />
                    </div>
                  </div>
                </a>
                <div className="p-5">
                  <h4 className="font-display text-sm tracking-wider text-gradient-purple mb-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3 font-accent">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-display tracking-wider px-2 py-1 rounded-full border border-primary/20 text-primary/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm text-muted-foreground font-display tracking-wider mb-8">
            PORTFOLIO — SPECTRO PRODUCTION
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {portfolioImages.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Portfolio ${i + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
