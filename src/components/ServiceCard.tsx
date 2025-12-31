import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  index: number;
}

const ServiceCard = ({
  icon,
  title,
  description,
  buttonText,
  buttonLink,
  index,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className="service-card flex flex-col items-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
        className="w-20 h-20 md:w-24 md:h-24 mb-6"
      >
        <img
          src={icon}
          alt={title}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <h4 className="text-xl font-bold text-foreground mb-3">{title}</h4>
      <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed max-w-xs">
        {description}
      </p>
      <motion.a
        href={buttonLink}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-primary-foreground bg-primary rounded-full transition-all duration-300 hover:opacity-90"
      >
        {buttonText}
      </motion.a>
    </motion.div>
  );
};

export default ServiceCard;