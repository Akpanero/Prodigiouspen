import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/images/hero-image.jpg";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden min-h-[600px] md:min-h-[700px]"
    >
      {/* Parallax Background Layer */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-secondary"
      >
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/5" />
        
        {/* Decorative floating shapes with primary color */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-[15%] w-32 h-32 rounded-full bg-primary/10 blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 left-[10%] w-48 h-48 rounded-full bg-primary/15 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[40%] left-[20%] w-24 h-24 rounded-full bg-primary/5 blur-xl"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-24 px-6 "
      >
        <div className="max-w-6xl lg:max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Profile Image with Parallax */}
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex-shrink-0"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-80 lg:h-96">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl scale-110" />
                <img
                  src={heroImage}
                  alt="Israel folding his arms and smiling"
                  className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-primary/20"
                />
              </div>
            </motion.div>

            {/* Text Content with Parallax */}
            <motion.div
              style={{ y: textY }}
              className="text-center md:text-left flex-1 max-w-3xl lg:max-w-4xl"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-6"
              >
                Growing YouTube Empires{" "}
                {/* <span role="img" aria-label="test tube"></span> */}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                className="text-base md:text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed"
              >
                I'm Israel. I write viral scripts, shape creator strategy, and manage channels and talent to help YouTubers grow faster and smarter.              
                </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <motion.a
                  href="#work-with-me"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="cta-button"
                >
                  Get in Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* Scroll Indicator (Tablet and above only) */}
<motion.a
  href="#TestimonialsSection"
  aria-label="Scroll to next section"
  initial={{ opacity: 0 }}
  animate={{
    opacity: 1,
    y: [0, 12, 0],
  }}
  transition={{
    opacity: { delay: 1.2, duration: 0.6 },
    y: {
      duration: 1.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full  border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
>
  <ArrowDown size={30} />
</motion.a>

    </section>
  );
};

export default HeroSection;