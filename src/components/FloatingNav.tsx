import { motion } from "framer-motion";

const navItems = [
  { label: "01", href: "#opportunity" },
  { label: "02", href: "#who-we-are" },
  { label: "03", href: "#strategy" },
  { label: "04", href: "#deliverables" },
  { label: "05", href: "#team" },
  { label: "06", href: "#investment" },
];

export default function FloatingNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass-strong rounded-full px-2 py-2 flex items-center gap-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="px-4 py-2 text-xs font-display tracking-wider text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-primary/10"
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
