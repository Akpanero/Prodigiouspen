import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 80);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          className="font-bold text-lg text-foreground"
          whileHover={{ scale: 1.02 }}
        >
          {isScrolled && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              Prodigiouspen
            </motion.span>
          )}
        </motion.a>

        <div className="flex items-center gap-6">
          <motion.a
            href="#work-with-me"
            className="hidden md:block text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            whileHover={{ y: -1 }}
          >
            Services
          </motion.a>
          <motion.a
            href="#contact"
            className="hidden md:block text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            whileHover={{ y: -1 }}
          >
            Contact
          </motion.a>
          <a href="https://drive.google.com/drive/folders/1OS9FYs9OgdFy9DD7S_sJgsxryP_AImEU" target="_blank" rel="noopener noreferrer"
            className="text-sm font-bold tracking-wide transition-all duration-200 px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:opacity-90"
          >
            Portfolio
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;