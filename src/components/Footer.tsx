import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="font-display text-sm tracking-[0.2em] text-muted-foreground">
              SPECTRO
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 text-xs text-muted-foreground"
          >
            <span>andres@spec7ro.com</span>
            <span className="text-primary/30">|</span>
            <span>&copy; 2026</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
